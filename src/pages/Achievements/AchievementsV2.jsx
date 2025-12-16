import React, { useEffect, useMemo } from "react";
import "./achievementsV2.scss";

export default function AchievementsV2() {
  // ---- Sample data (swap with your real data/props) ----
  const stats = useMemo(() => ([
    { label: "Visitors", value: 52000, suffix: "+" },
    { label: "Exhibitors", value: 780, suffix: "+" },
    { label: "Knowledge Hours", value: 150, suffix: "h" },
    { label: "Cities", value: 18, suffix: "+" },
  ]), []);

  const highlights = [
    { title: "Innovation Zone", text: "60+ live demos of AI, green chem, and sustainable packaging." },
    { title: "Buyer Programs", text: "Hosted buyer delegations from 12 countries." },
    { title: "Sustainability", text: "Waste-neutral operations with verified offsets." },
  ];

  const milestones = [
    { date: "2021", title: "Launch", desc: "Founded and held first curated B2B showcase." },
    { date: "2022", title: "National Footprint", desc: "7K+ visitors at the first national expo." },
    { date: "2023", title: "International Buyers", desc: "Global sourcing lanes & export tracks." },
    { date: "2024", title: "Recognition", desc: "Green Event Certification & media coverage." },
    { date: "2025", title: "Tracks Expanded", desc: "HealthTech & Clean Beauty verticals added." },
  ];

  const awards = [
    { title: "Best B2B Expo", by: "Event Excellence Awards", year: "2024" },
    { title: "Green Event", by: "SustainOps Council", year: "2024" },
    { title: "Innovation Showcase", by: "Industry Guild", year: "2023" },
  ];

  const partners = ["L’Oréal", "Unilever", "Dr. Reddy’s", "BASF", "ITC", "3M", "HUL", "Tata"];

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  return (
    <main className="achv2">
      {/* Hero */}
      <header className="achv2__hero">
        <div className="hero__text">
          <h1>V3 Stars Events — Achievements</h1>
          <p>Impact at scale. Crafting experiences that move industries forward.</p>
          <div className="hero__cta">
            <a className="btn primary" href="/#register">Become an Exhibitor</a>
            <a className="btn ghost" href="/#contact">Partner with Us</a>
          </div>
        </div>
        <div className="hero__image" aria-hidden>
          {/* Replace with your banner */}
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
            alt=""
          />
        </div>
      </header>

      {/* KPI strip */}
      <section className="achv2__kpis">
        {stats.map((s, i) => (
          <div key={i} className="kpi">
            <div className="kpi__num">
              {s.value.toLocaleString("en-IN")}
              <span className="kpi__suf">{s.suffix}</span>
            </div>
            <div className="kpi__label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Highlights */}
      <section className="achv2__highlights card">
        <h2 className="section-title">Highlights</h2>
        <div className="hi-grid">
          {highlights.map((h, i) => (
            <article key={i} className="hi-card">
              <div className="hi-icon" aria-hidden>✨</div>
              <h4>{h.title}</h4>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="achv2__timeline card">
        <h2 className="section-title">Milestone Timeline</h2>
        <ol className="tl">
          {milestones.map((m, i) => (
            <li className="tl-item" key={i}>
              <div className="tl-head">
                <div className="tl-dot" />
                <div className="tl-date">{m.date}</div>
              </div>
              <div className="tl-body">
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Awards */}
      <section className="achv2__awards card">
        <h2 className="section-title">Awards</h2>
        <div className="aw-grid">
          {awards.map((a, i) => (
            <article className="aw-card" key={i}>
              <div className="aw-medal" aria-hidden>🏅</div>
              <h4>{a.title}</h4>
              <div className="aw-meta">{a.by} • {a.year}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="achv2__belt card">
        <h2 className="section-title">Partners & Media</h2>
        <div className="belt">
          {partners.map((p, i) => (
            <div className="belt__item" key={i}>{p}</div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="achv2__cta card">
        <div className="cta-box">
          <h3>Let’s build the next chapter.</h3>
          <p>Speakerships, showcases, and strategic alliances are now open.</p>
          <a className="btn primary" href="/#contact">Talk to Our Team</a>
        </div>
      </section>
    </main>
  );
}
