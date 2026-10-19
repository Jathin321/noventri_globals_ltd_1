import Link from "next/link";

export const metadata = { title: "Cookie Notice", description: "Cookie notice for Noventrix Global LTD." };

export default function CookiesPage() {
  return <main className="legal-page"><Link className="legal-back" href="/">Back to Noventrix Global LTD</Link><h1>Cookie Notice</h1><p className="legal-updated">Last updated: 20 October 2026</p><p>This website uses essential browser storage to remember whether you accepted or rejected optional cookies. Optional analytics or advertising cookies are not set unless you choose &quot;Allow cookies&quot;.</p><h2>Changing your choice</h2><p>Clear this website&apos;s stored data in your browser settings to see the consent banner again. Contact <a href="mailto:info@noventrixgloballtd.com">info@noventrixgloballtd.com</a> with questions.</p><p>Noventrix Global LTD, company number 17127364, registered office: 1 Calvin Road, Bournemouth, England, BH9 1LN.</p></main>;
}
