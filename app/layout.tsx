import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormVault – Secure Encrypted Form Autofill",
  description: "Encrypts and syncs your browser form data across devices with zero-knowledge architecture. Smart autofill with full security controls."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="80c6c435-8fbd-4ef7-865f-ac128986e92c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
