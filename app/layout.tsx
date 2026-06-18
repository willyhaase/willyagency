import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://willyagency.ch"),
  title: "Willy Agency | KI-Anwendungen fuer Unternehmen",
  description:
    "Willy Agency entwickelt KI-basierte Business-Anwendungen, Agentic Workflows und produktionsreife Automationen fuer Unternehmen.",
  alternates: {
    canonical: "https://willyagency.ch",
  },
  openGraph: {
    title: "Willy Agency | KI-Anwendungen fuer Unternehmen",
    description:
      "Business-Software mit KI: von Prototypen bis zu produktionsreifen Anwendungen.",
    url: "https://willyagency.ch",
    siteName: "Willy Agency",
    type: "website",
    images: ["/saas-fee-story-bg-clean.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
