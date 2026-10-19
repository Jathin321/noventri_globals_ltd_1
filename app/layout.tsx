import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const siteUrl = "https://noventrixgloballtd.com";
const companyName = "Noventrix Global Ltd";
const companyDescription =
  "Noventrix Global Ltd is among the best Salesforce developers in the UK (United Kingdom), delivering Salesforce strategy, architecture, and implementation for UK and international clients.";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Salesforce Developers in the UK",
    template: "%s | Noventrix Global Ltd",
  },
  description: companyDescription,
  authors: [{ name: companyName, url: siteUrl }],
  creator: companyName,
  publisher: companyName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: companyName,
    title: "Best Salesforce Developers in the UK",
    description: companyDescription,
    images: [{ url: "/logo.png", alt: `${companyName} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salesforce Developers in the UK",
    description: companyDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: companyName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: companyDescription,
    email: "info@noventrixgloballtd.com",
    areaServed: ["GB", "Worldwide"],
    knowsAbout: ["Salesforce strategy", "Salesforce implementation", "Salesforce architecture"],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: companyName,
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-GB",
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
