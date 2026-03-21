import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeStay - Find Your Perfect Long-Term Accommodation",
  description: "Flexible mid to long-term accommodation for students and professionals. Find studios, shared apartments, co-living spaces, and student housing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
