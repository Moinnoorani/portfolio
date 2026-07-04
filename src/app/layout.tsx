import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Moin Noorani — Business Analyst & AI Solutions Lead",
  description:
    "Moin Noorani is a Business Analyst delivering data-driven ERP, automation, and analytics solutions across supply chain, procurement, inventory, and manufacturing domains.",
  keywords: [
    "Moin Noorani",
    "Business Analyst",
    "ERP",
    "Supply Chain",
    "SQL",
    "Power BI",
    "Automation",
    "Procurement",
    "Inventory",
    "Agile",
  ],
  authors: [{ name: "Moin Noorani" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: ["/favicon-32x32.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    title: "MN Portfolio",
    statusBarStyle: "default",
    capable: true,
  },
  openGraph: {
    title: "Moin Noorani — Business Analyst & AI Solutions Lead",
    description:
      "Data-driven ERP, automation & analytics solutions across supply chain, procurement, inventory, and manufacturing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moin Noorani — Business Analyst & AI Solutions Lead",
    description:
      "Data-driven ERP, automation & analytics solutions across supply chain, procurement, inventory, and manufacturing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${spaceMono.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
