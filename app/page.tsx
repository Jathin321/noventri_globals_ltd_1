"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const successStories = [
  {
    category: "Financial services",
    title: "A clearer path from lead to long-term client.",
    challenge: "A growing wealth manager had the right data, but no shared view of the client journey.",
    work: "Sales Cloud · Experience Cloud · RevOps",
    outcome: "32% faster handover",
    metric: "32%",
  },
  {
    category: "Healthcare & life sciences",
    title: "More time for patients. Less time chasing updates.",
    challenge: "A global healthcare team needed one trusted operating picture across regions and partners.",
    work: "Service Cloud · Data architecture · Automation",
    outcome: "18 hrs saved per team / month",
    metric: "18h",
  },
  {
    category: "Technology & SaaS",
    title: "A revenue engine built to keep up.",
    challenge: "A fast-moving SaaS company had outgrown its spreadsheets and needed confidence in its forecast.",
    work: "Sales Cloud · CPQ · Custom integrations",
    outcome: "2x forecast confidence",
    metric: "2x",
  },
  {
    category: "Professional services",
    title: "Turning delivery data into better decisions.",
    challenge: "A specialist consultancy wanted to protect margin without adding more reporting overhead.",
    work: "Service Cloud · Tableau · Governance",
    outcome: "14% margin recovered",
    metric: "14%",
  },
  {
    category: "Financial services",
    title: "A CRM that earns its place in the room.",
    challenge: "A lending business needed adoption to match the investment it had already made in Salesforce.",
    work: "Health check · UX redesign · Enablement",
    outcome: "91% active adoption",
    metric: "91%",
  },
  {
    category: "Technology & SaaS",
    title: "From stalled implementation to steady momentum.",
    challenge: "A complex implementation had lost direction, with teams unsure what should happen next.",
    work: "Recovery plan · Architecture · Delivery",
    outcome: "10 weeks to go-live",
    metric: "10w",
  },
];

export default function Home() {
  const [storyIndex, setStoryIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(3);
  const storyViewportRef = useRef<HTMLDivElement>(null);
  const maxStoryIndex = successStories.length - visibleCardCount;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://noventrixgloballtd.com/#webpage",
    name: "Salesforce Consultancy in Bournemouth, UK",
    url: "https://noventrixgloballtd.com/",
    description:
      "Salesforce strategy, architecture, implementation, data, AI, and automation for UK and international teams.",
    inLanguage: "en-GB",
    isPartOf: { "@id": "https://noventrixgloballtd.com/#website" },
    about: { "@id": "https://noventrixgloballtd.com/#organization" },
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Salesforce services",
    itemListElement: [
      "Salesforce architecture",
      "Delivery and implementation",
      "Data, AI and automation",
      "Rescue and optimisation",
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name,
        provider: { "@id": "https://noventrixgloballtd.com/#organization" },
        areaServed: ["GB", "Worldwide"],
      },
    })),
  };

  useEffect(() => {
    const updateVisibleCards = () => setVisibleCardCount(window.matchMedia("(max-width: 760px)").matches ? 1 : 3);
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const autoAdvance = window.setInterval(() => {
      setStoryIndex((currentIndex) => currentIndex >= maxStoryIndex ? 0 : currentIndex + 1);
    }, 3000);

    return () => window.clearInterval(autoAdvance);
  }, [maxStoryIndex]);

  useEffect(() => {
    const viewport = storyViewportRef.current;
    if (!viewport) return;

    const gap = visibleCardCount === 1 ? 16 : 22;
    const cardStep = (viewport.clientWidth - gap * (visibleCardCount - 1)) / visibleCardCount + gap;
    viewport.scrollTo({ left: storyIndex * cardStep, behavior: "smooth" });
  }, [storyIndex, visibleCardCount]);

  const moveStories = (direction: number) => {
    setStoryIndex((currentIndex) => Math.max(0, Math.min(maxStoryIndex, currentIndex + direction)));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
      <div className="announcement" style={{ color: "#6f4014" }}>Salesforce delivery for teams that are ready to move <span>↗</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Noventrix Global LTD home">
          <Image className="brand-logo" src="/half_logo.png" alt="Noventrix Global LTD" width={1152} height={768} priority />
        </a>
        <input className="menu-toggle" type="checkbox" id="menu-toggle" />
        <label className="menu-button" htmlFor="menu-toggle" aria-label="Toggle navigation"><span /><span /></label>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#approach">Approach</a><a href="#industries">Industries</a><a href="#insights">Insights</a>
          <a className="nav-cta" href="#contact">Start a conversation <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow reveal">Salesforce / strategy / delivery</p>
          <h1 className="reveal reveal-delay-1">Make Salesforce<br /><em>work as hard as</em><br />your business does.</h1>
          <p className="hero-intro reveal reveal-delay-2">Noventrix Global LTD helps ambitious teams, primarily across the UK and internationally, turn Salesforce into a system people actually want to use.</p>
          <a className="button button-light reveal reveal-delay-3" href="#contact">Talk to an expert <span>↗</span></a>
        </div>
        <div className="hero-note"><span className="line" />Built for momentum<span className="hero-note-index">01 / 04</span></div>
      </section>

      <section className="intro section-pad">
        <div className="intro-side"><div className="intro-image" aria-hidden="true" /><div className="section-label">01 — The point of view</div></div>
        <div className="intro-content"><h2>Good technology should make the work feel <em>lighter.</em></h2><p>We bring senior Salesforce architecture, thoughtful design and hands-on delivery together in one team. No layers of handoffs. No black boxes. Just better systems, built around how your business really works.</p><a className="text-link" href="#approach">How we work <span>↗</span></a></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading"><div className="section-label">02 — What we do</div><p>From first idea to a platform that performs, we stay close to the work.</p></div>
        <div className="service-list">
          <a className="service-row" href="#contact"><span className="service-number">01</span><h3>Salesforce<br /><em>architecture</em></h3><span className="service-detail">A clear, scalable foundation for your next chapter.</span><span className="arrow">↗</span></a>
          <a className="service-row" href="#contact"><span className="service-number">02</span><h3>Delivery &<br /><em>implementation</em></h3><span className="service-detail">From quick wins to complex transformation, delivered properly.</span><span className="arrow">↗</span></a>
          <a className="service-row" href="#contact"><span className="service-number">03</span><h3>Data, AI &<br /><em>automation</em></h3><span className="service-detail">Make better decisions, faster, with intelligence built in.</span><span className="arrow">↗</span></a>
          <a className="service-row" href="#contact"><span className="service-number">04</span><h3>Rescue &<br /><em>optimisation</em></h3><span className="service-detail">A pragmatic reset when a project has lost its way.</span><span className="arrow">↗</span></a>
        </div>
      </section>

      <section className="success-stories section-pad" id="success-stories" aria-labelledby="success-stories-title">
        <div className="success-heading">
          <div>
            <div className="section-label">03 — Success stories</div>
            <h2 id="success-stories-title">Proof that<br /><em>progress works.</em></h2>
          </div>
          <div className="carousel-controls" aria-label="Success stories navigation">
            <span className="carousel-count">{String(storyIndex + 1).padStart(2, "0")} — {String(maxStoryIndex + 1).padStart(2, "0")}</span>
            <button type="button" onClick={() => moveStories(-1)} disabled={storyIndex === 0} aria-label="Previous success story">←</button>
            <button type="button" onClick={() => moveStories(1)} disabled={storyIndex === maxStoryIndex} aria-label="Next success story">→</button>
          </div>
        </div>
        <div className="story-viewport" ref={storyViewportRef}>
          <div className="story-track">
            {successStories.map((story) => (
              <article className="story-card" key={story.title}>
                <div className="story-card-top"><span className="story-category">{story.category}</span><span className="story-metric">{story.metric}</span></div>
                <h3>{story.title}</h3>
                <div className="story-detail"><span>THE BRIEF</span><p>{story.challenge}</p></div>
                <div className="story-card-footer"><span>{story.work}</span><strong>{story.outcome}</strong></div>
              </article>
            ))}
          </div>
        </div>
        <p className="carousel-note">Selected work, representative outcomes. Every engagement starts with the context behind the number.</p>
      </section>

      <section className="statement" id="approach"><div className="statement-image" /><div className="statement-copy"><div className="section-label">04 — The Noventrix way</div><h2>Senior thinking.<br /><em>Human delivery.</em></h2><p>The person who shapes the solution is the person who helps you deliver it. That means sharper decisions, fewer surprises and a team that understands the detail without losing sight of the bigger picture.</p><div className="commitments"><div><strong>01</strong><span>Clarity from day one</span></div><div><strong>02</strong><span>Progress you can see</span></div><div><strong>03</strong><span>Systems that last</span></div></div></div></section>

      <section className="industries section-pad" id="industries"><div className="section-label">05 — Where we help</div><div className="industry-grid"><div><span>Salesforce Energy & Utilities Cloud</span><small>Powering better outcomes across essential services.</small></div><div><span>Salesforce Communications Cloud - Telecommunications</span><small>Connect every customer interaction.</small></div><div><span>Financial services</span><small>Trust, control and growth at scale.</small></div><div><span>Healthcare & life sciences</span><small>Better outcomes, less friction.</small></div></div></section>

      <section className="insights section-pad" id="insights"><div className="section-heading"><div className="section-label">06 — A little thinking</div><a className="text-link" href="#contact">View all insights <span>↗</span></a></div><div className="insight-grid"><article><span className="article-tag">Perspective</span><h3>What a healthy Salesforce org actually looks like.</h3><a href="#contact">Read the thinking <span>↗</span></a></article><article><span className="article-tag">Field note</span><h3>AI is only as useful as the system underneath it.</h3><a href="#contact">Read the thinking <span>↗</span></a></article><article><span className="article-tag">Guide</span><h3>Five signals it is time to rethink your CRM.</h3><a href="#contact">Read the thinking <span>↗</span></a></article></div></section>

      <section className="contact" id="contact"><Image className="contact-logo" src="/half_logo.png" alt="Noventrix Global LTD" width={1152} height={768} /><div><div className="section-label">Your next move</div><h2>Let’s build<br /><em>what’s next.</em></h2><p>Tell us what is stuck, what is changing, or where you want to go. We will bring the right people to the first conversation.</p><a className="button button-dark" href="mailto:info@noventrixgloballtd.com">info@noventrixgloballtd.com <span>↗</span></a><p>Based in Bournemouth, UK<br />Calvin Road, Bournemouth BH9 1LN<br />Supporting clients across the UK and internationally.</p></div></section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand"><a className="brand brand-footer" href="#top" aria-label="Noventrix Global LTD home"><Image className="brand-logo" src="/half_logo.png" alt="Noventrix Global LTD" width={1152} height={768} /></a><p>Salesforce strategy and delivery<br />for businesses going places.</p></div>
          <div className="footer-column"><span>Explore</span><a href="#services">Services</a><a href="#industries">Industries</a><a href="#approach">Our approach</a><a href="#contact">Contact</a></div>
          <div className="footer-column"><span>Contact</span><a href="mailto:info@noventrixgloballtd.com">info@noventrixgloballtd.com</a><span className="footer-subhead">Based in</span><p>Bournemouth, UK<br />Supporting clients across the UK and internationally.</p></div>
          <div className="footer-column footer-company"><span>Company details</span><p><strong>Noventrix Global LTD</strong><br />Company number 17127364<br />Registered in England and Wales</p><a href="https://find-and-update.company-information.service.gov.uk/company/17127364" rel="noreferrer">View Companies House record ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Noventrix Global LTD</span><span>Registered office: 1 Calvin Road, Bournemouth, England, BH9 1LN</span><span><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a></span></div>
      </footer>
      </main>
    </>
  );
}
