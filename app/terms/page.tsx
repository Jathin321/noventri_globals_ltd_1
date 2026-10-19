import Link from "next/link";

export const metadata = { title: "Terms of Use", description: "Website terms of use for Noventrix Global LTD." };

export default function TermsPage() {
  return <main className="legal-page"><Link className="legal-back" href="/">Back to Noventrix Global LTD</Link><h1>Terms of Use</h1><p className="legal-updated">Last updated: 20 October 2026</p><h2>Using this website</h2><p>This website provides general information about Noventrix Global LTD and its services. Content is not professional, legal or financial advice.</p><h2>Intellectual property</h2><p>Unless stated otherwise, the content, design and branding belong to Noventrix Global LTD or its licensors. Do not reproduce or commercially exploit it without permission.</p><h2>Governing law</h2><p>These terms are governed by the laws of England and Wales. Noventrix Global LTD is registered under company number 17127364. Registered office: 1 Calvin Road, Bournemouth, England, BH9 1LN.</p></main>;
}
