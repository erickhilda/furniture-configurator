import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Honey Jar - Furniture Store",
  description: "Furniture for your comfort and elegant room",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Syne:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* custom the scrollbar */}
      <body className={clsx("h-screen")}>{children}</body>
    </html>
  );
}
