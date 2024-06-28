import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medusa Storefront",
  description: "Stay ahead in fashion with our exclusive designer wear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
