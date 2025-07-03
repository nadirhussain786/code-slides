import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Slides",
  description: "Animated code slide editor like Snappify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-mono">{children}</body>
    </html>
  );
}
