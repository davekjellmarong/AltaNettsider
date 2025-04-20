import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AltaNettsider - Lokale nettsider for din bedrift i Alta",
  description:
    "Vi utvikler moderne, brukervennlige og responsive nettsider som hjelper din bedrift å vokse og nå ut til flere kunder i Alta og omegn.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
