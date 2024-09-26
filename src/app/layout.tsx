import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clarissa Dias - Advocacia & Consultoria Jurídica",
  description: "Escritório de advocacia da Dra. Clarissa Dias",
  openGraph: {
    images: "opengraph-image.png",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-br">
      <body className={`${inter.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
