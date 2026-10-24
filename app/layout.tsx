import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const siteUrl = "https://noventrixgloballtd.com";
const companyName = "Noventrix Global LTD";
const companyDescription =
  "Salesforce strategy, delivery, data and automation for teams in Bournemouth, across the UK and internationally.";

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
    default: "Salesforce Consultancy in Bournemouth, UK",
    template: "%s | Noventrix Global Ltd",
  },
  description: companyDescription,
  authors: [{ name: companyName, url: siteUrl }],
  creator: companyName,
  publisher: companyName,
  alternates: { canonical: "/" },
  icons: {
    icon: "/half_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: companyName,
    title: "Salesforce Consultancy in Bournemouth, UK",
    description: companyDescription,
    images: [{ url: "/logo.png", alt: `${companyName} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Consultancy in Bournemouth, UK",
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
    identifier: "17127364",
    sameAs: ["https://find-and-update.company-information.service.gov.uk/company/17127364"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Calvin Road",
      addressLocality: "Bournemouth",
      addressRegion: "England",
      postalCode: "BH9 1LN",
      addressCountry: "GB",
    },
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
      suppressHydrationWarning
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
        <CookieConsent />
      </body>
    </html>
  );
}
