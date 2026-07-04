import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@/components/portfolio/google-analytics";
import { StructuredData } from "@/components/portfolio/structured-data";
import { siteUrl, personal } from "@/lib/portfolio-data";

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

const SITE_TITLE = "Moin Noorani — Business Analyst & AI Solutions Lead";
const SITE_DESCRIPTION =
  "Business Analyst with 2+ years delivering data-driven ERP, automation, analytics & AI workflow solutions across supply chain, procurement, inventory, and manufacturing. 10+ ERP rollouts · 200+ users · 40% reporting time saved.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE,
    template: "%s · Moin Noorani",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Moin Noorani Portfolio",
  generator: "Next.js 16",
  keywords: [
    "Moin Noorani",
    "Business Analyst",
    "AI Solutions Lead",
    "ERP",
    "Supply Chain",
    "SQL",
    "Power BI",
    "Python",
    "Automation",
    "Procurement",
    "Inventory",
    "Agile",
    "BRD",
    "SRS",
    "UAT",
    "AI Workflows",
    "LLM",
    "LangChain",
    "Codes Technology",
    "Surat",
    "India",
    "Business Analyst India",
    "BA portfolio",
  ],
  authors: [{ name: "Moin Noorani", url: siteUrl }],
  creator: "Moin Noorani",
  publisher: "Moin Noorani",
  category: "Portfolio",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Moin Noorani Portfolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moin Noorani — Business Analyst & AI Solutions Lead",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@moinnoorani",
    creator: "@moinnoorani",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  other: {
    // Verify ownership for Google Search Console (paste your code below).
    // Get it at https://search.google.com/search-console → Add property →
    // URL prefix → your site URL → HTML tag method → copy the content="..." value.
    // Then set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel env vars.
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? {
          "google-site-verification":
            process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${playfair.variable} ${spaceMono.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        <GoogleAnalytics />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
