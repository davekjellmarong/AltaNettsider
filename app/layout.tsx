import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import ReactQueryProvider from "@/src/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "AltaNettsider - Profesjonelle nettsider for små bedrifter i Alta",
  description:
    "Jeg hjelper lokale bedrifter med å bli synlige på nett – raskt, enkelt og uten stress. Gratis forslag uten forpliktelser. Basert i Alta, Finnmark.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
