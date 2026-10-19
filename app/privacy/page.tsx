import Link from "next/link";

export const metadata = { title: "Privacy Policy", description: "Privacy policy for Noventrix Global LTD." };

export default function PrivacyPage() {
  return <main className="legal-page"><Link className="legal-back" href="/">Back to Noventrix Global LTD</Link><h1>Privacy Policy</h1><p className="legal-updated">Last updated: 20 October 2026</p><h2>Who we are</h2><p>Noventrix Global LTD is registered in England and Wales under company number 17127364. Our registered office is 1 Calvin Road, Bournemouth, England, BH9 1LN.</p><h2>Information and use</h2><p>We may collect the details you provide when contacting us and limited technical information needed to keep this website secure. We use it to respond to enquiries, provide services, maintain records, improve the website and meet legal obligations. We do not sell personal information.</p><h2>Your rights</h2><p>Subject to applicable law, you can request access, correction, deletion, restriction or transfer of your information, or object to processing. Contact <a href="mailto:info@noventrixgloballtd.com">info@noventrixgloballtd.com</a>. You can complain to the <a href="https://ico.org.uk/make-a-complaint/" rel="noreferrer">Information Commissioner&apos;s Office</a>.</p></main>;
}
