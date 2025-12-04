import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centy - Intelligent Issue Tracking",
  description:
    "Centy is an intelligent issue tracking system that integrates seamlessly with your development workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
