import { NextResponse } from "next/server";

export const runtime = "nodejs";

const HUBSPOT_API_BASE = "https://api.hubapi.com";
const HUBSPOT_OWNER_ID = process.env.HUBSPOT_OWNER_ID ?? "93428995";

type ContactPayload = {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  consent?: string;
  website?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function jsonError(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

async function hubspotRequest<T>(
  path: string,
  token: string,
  init: RequestInit,
) {
  const response = await fetch(`${HUBSPOT_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  const text = await response.text();
  const data = text ? (JSON.parse(text) as T) : ({} as T);

  if (!response.ok) {
    throw new Error(
      `HubSpot request failed: ${response.status} ${JSON.stringify(data)}`,
    );
  }

  return data;
}

async function findContactId(email: string, token: string) {
  const result = await hubspotRequest<{
    results?: Array<{ id: string }>;
  }>("/crm/v3/objects/contacts/search", token, {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email,
            },
          ],
        },
      ],
      limit: 1,
      properties: ["email"],
    }),
  });

  return result.results?.[0]?.id ?? null;
}

async function upsertContact(
  token: string,
  properties: Record<string, string>,
) {
  const existingId = await findContactId(properties.email, token);

  if (existingId) {
    const result = await hubspotRequest<{ id: string }>(
      `/crm/v3/objects/contacts/${existingId}`,
      token,
      {
        method: "PATCH",
        body: JSON.stringify({ properties }),
      },
    );
    return result.id;
  }

  const result = await hubspotRequest<{ id: string }>(
    "/crm/v3/objects/contacts",
    token,
    {
      method: "POST",
      body: JSON.stringify({ properties }),
    },
  );
  return result.id;
}

async function createContactNote(
  token: string,
  contactId: string,
  noteBody: string,
) {
  await hubspotRequest("/crm/v3/objects/notes", token, {
    method: "POST",
    body: JSON.stringify({
      properties: {
        hs_note_body: noteBody,
        hs_timestamp: new Date().toISOString(),
        hubspot_owner_id: HUBSPOT_OWNER_ID,
      },
      associations: [
        {
          to: {
            id: contactId,
          },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: 202,
            },
          ],
        },
      ],
    }),
  });
}

export async function POST(request: Request) {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

  if (!token) {
    return jsonError(
      "HubSpot ist noch nicht konfiguriert. Bitte HUBSPOT_PRIVATE_APP_TOKEN in Vercel setzen.",
      503,
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonError("Ungültige Anfrage.");
  }

  if (clean(payload.website)) {
    return NextResponse.json({ message: "Danke. Wir melden uns zeitnah." });
  }

  const firstname = clean(payload.firstname);
  const lastname = clean(payload.lastname);
  const email = clean(payload.email).toLowerCase();
  const phone = clean(payload.phone);
  const company = clean(payload.company);
  const requestMessage = clean(payload.message);
  const consent = clean(payload.consent);

  if (!firstname || !email || !requestMessage || !consent) {
    return jsonError("Bitte füllen Sie alle Pflichtfelder aus.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
  }

  const properties: Record<string, string> = {
    email,
    firstname,
    hubspot_owner_id: HUBSPOT_OWNER_ID,
  };

  if (lastname) properties.lastname = lastname;
  if (phone) properties.phone = phone;
  if (company) properties.company = company;

  const noteBody = [
    "<strong>Neue Anfrage über willyagency.ch</strong>",
    "",
    `<strong>Name:</strong> ${firstname} ${lastname}`.trim(),
    `<strong>E-Mail:</strong> ${email}`,
    phone ? `<strong>Telefon:</strong> ${phone}` : null,
    company ? `<strong>Unternehmen:</strong> ${company}` : null,
    "",
    "<strong>Nachricht:</strong>",
    requestMessage.replace(/\n/g, "<br />"),
  ]
    .filter(Boolean)
    .join("<br />");

  try {
    const contactId = await upsertContact(token, properties);
    await createContactNote(token, contactId, noteBody);
  } catch (error) {
    console.error(error);
    return jsonError(
      "Die Nachricht konnte nicht an HubSpot übermittelt werden.",
      502,
    );
  }

  return NextResponse.json({ message: "Danke. Wir melden uns zeitnah." });
}
