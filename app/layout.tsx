import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Token Budget Alerter",
  description: "Get alerts before AI prompts exceed token budgets. Monitor AI API usage and costs in real-time."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="02547a2d-049e-4d5e-bbde-048de92a3558"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
