import React, { useEffect, useMemo, useRef, useState } from "react";
import "./achievements.scss";

export default function Achievements() {
  // ===== Sample data (swap with API or props later) =====
  const stats = useMemo(() => ([
    { label: "Total Visitors", value: 52000, suffix: "+" },
    { label: "Exhibitors Hosted", value: 780, suffix: "+" },
    { label: "Knowledge Hours", value: 150, suffix: "h" },
    { label: "Cities Reached", value: 18, suffix: "+" },
  ]), []);

  const milestones = [
    { year: "2021", title: "Founded V3 Stars Events", desc: "Kicked off with boutique B2B showcases and curated networking." },
    { year: "2022", title: "First National Expo", desc: "150+ exhibitors, 7K visitors, launched Innovation Zone." },
    { year: "2023", title: "International Reach", desc: "Global buyer delegations; 40% YoY growth in footfall." },
    { year: "2024", title: "Awards & Accolades", desc: "Recognized for sustainable event operations and diversity programs." },
    { year: "2025", title: "Sector Expansion", desc: "Added HealthTech & Clean Beauty tracks; 150+ hours of sessions." },
  ];

  const awards = [
    { title: "Best B2B Expo Experience", org: "Event Excellence Awards", year: "2024" },
    { title: "Green Event Certification", org: "SustainOps Council", year: "2024" },
    { title: "Innovation Showcase", org: "Industry Guild of India", year: "2023" },
    { title: "Community Impact", org: "CSR Collective", year: "2022" },
  ];

  const partners = [
    "L’Oréal", "Unilever", "Dr. Reddy’s", "BASF", "Tata Chemicals", "3M", "HUL", "ITC"
  ];

  // ===== Count-up on view =====
  const wrapRef = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setSeen(true)),
      { threshold: 0.25 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <main className="achv">
      {/* Hero */}
      <header className="achv__hero">
        <div className="achv__hero-inner">
          <h1 className="achv__title">V3 Stars Events — Achievements</h1>
          <p className="achv__subtitle">
            A journey of <strong>innovation</strong>, <strong>impact</strong>, and <strong>industry growth</strong>.
          </p>
        </div>
      </header>

      {/* Stats */}
      <section className="achv__stats card" ref={wrapRef}>
        {stats.map((s, i) => (
          <Stat key={i} value={s.value} label={s.label} suffix={s.suffix} active={seen} />
        ))}
      </section>

      {/* Milestones Timeline */}
      <section className="achv__timeline card">
        <h2 className="section-title">Milestones</h2>
        <ol className="timeline">
          {milestones.map((m, i) => (
            <li key={i} className="t-item">
              <div className="t-dot" />
              <div className="t-year">{m.year}</div>
              <div className="t-body">
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Awards */}
      <section className="achv__awards card">
        <h2 className="section-title">Awards & Recognitions</h2>
        <div className="awards-grid">
          {awards.map((a, i) => (
            <article key={i} className="award">
              <div className="award__badge" aria-hidden>🏆</div>
              <h4 className="award__title">{a.title}</h4>
              <div className="award__meta">{a.org} • {a.year}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Partners / Press */}
      <section className="achv__partners card">
        <h2 className="section-title">Partners & Media</h2>
        <div className="logos">
          {partners.map((p, i) => (
            <div key={i} className="logo">{p}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="achv__cta card">
        <div className="cta-wrap">
          <h3>Ready to co-create the next milestone?</h3>
          <p>Join us as an exhibitor, speaker, or partner at our upcoming editions.</p>
          <div className="cta-actions">
            <a className="btn primary" href="/#register">Become an Exhibitor</a>
            <a className="btn ghost" href="/#contact">Partner with Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== Small Stat component with count-up ===== */
function Stat({ value, suffix = "", label, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const end = Number(value) || 0;
    const dur = 900; // ms
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      setCount(Math.floor(start + (end - start) * easeOutCubic(p)));
      if (p < 1) requestAnimationFrame(tick);
    };
    const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, value]);

  return (
    <div className="stat">
      <div className="stat__num">
        {count.toLocaleString("en-IN")}
        <span className="stat__suf">{suffix}</span>
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}
