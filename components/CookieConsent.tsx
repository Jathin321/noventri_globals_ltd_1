"use client";

import { useState, useSyncExternalStore } from "react";

const consentKey = "noventrix-cookie-consent";

export default function CookieConsent() {
  const [dismissed, setDismissed] = useState(false);
  const hasConsent = useSyncExternalStore(
    () => () => {},
    () => window.localStorage.getItem(consentKey) !== null,
    () => false,
  );

  const choose = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(consentKey, value);
    setDismissed(true);
  };

  if (dismissed || hasConsent) return null;

  return (
    <aside className="cookie-banner" aria-label="Cookie preferences">
      <div className="cookie-copy">
        <span className="cookie-eyebrow">Your privacy matters</span>
        <strong>Choose how we use cookies</strong>
        <p>
          We use essential storage to remember your choice and keep this website working.
          Optional analytics cookies are only used with your permission.{" "}
          <a href="/cookies">Read our cookie notice</a>.
        </p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-reject" onClick={() => choose("rejected")}>
          Reject optional
        </button>
        <button type="button" className="cookie-allow" onClick={() => choose("accepted")}>
          Allow all cookies
        </button>
      </div>
    </aside>
  );
}
