import type { Metadata } from "next";
import { Observability } from "@/components/observability";
import "./globals.css";

const title = "Malu Hair Studio | Cabeleireira em Botucatu";
const description =
  "Conheça o trabalho de Marcinha e Lucy no Malu Hair Studio, salão de beleza em Botucatu. Cortes, cor, tratamentos e finalizações com atendimento personalizado.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Malu Hair Studio",
  keywords: [
    "cabeleireira em Botucatu",
    "salão de beleza Botucatu",
    "Malu Hair Studio",
    "corte de cabelo Botucatu",
    "coloração Botucatu",
  ],
  authors: [{ name: "Malu Hair Studio" }],
  creator: "Malu Hair Studio",
  category: "beauty",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Malu Hair Studio",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Botucatu",
    "theme-color": "#080808",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Observability />
        {children}
      </body>
    </html>
  );
}
