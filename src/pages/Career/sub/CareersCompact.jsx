import React, { useMemo, useState, useEffect } from "react";
import "./careersCompact.scss";

export default function CareersCompact({ roles: rolesProp }) {
  const ROLES = rolesProp ?? [
    { id: 1, title: "Event Ops Executive", dept: "Operations", loc: "Bengaluru", type: "Full-time", exp: "2–4 yrs", summary: "Own venue coordination, vendor & floor ops.", jd: ["Vendor coordination", "Floor planning", "Show-day execution"] },
    { id: 2, title: "BD Manager", dept: "Sales", loc: "Bengaluru / Mumbai", type: "Full-time", exp: "3–6 yrs", summary: "Drive exhibitor signups & partnerships.", jd: ["Pipeline & outreach", "Demos & proposals", "Targets & reporting"] },
    { id: 3, title: "Digital Marketing Lead", dept: "Marketing", loc: "Bengaluru", type: "Full-time", exp: "4–7 yrs", summary: "Own paid/organic funnels & brand.", jd: ["Paid & SEO", "Content calendar", "Analytics & CRO"] },
  ];

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  const [q, setQ] = useState("");
  const [dept, setDept] = useState("All");
  const [openId, setOpenId] = useState(null);
  const [applyFor, setApplyFor] = useState(null); // role object

  const departments = useMemo(() => ["All", ...new Set(ROLES.map(r => r.dept))], [ROLES]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return ROLES.filter(r => {
      const matchDept = dept === "All" || r.dept === dept;
      const matchQ =
        !query ||
        r.title.toLowerCase().includes(query) ||
        r.dept.toLowerCase().includes(query) ||
        r.loc.toLowerCase().includes(query) ||
        r.type.toLowerCase().includes(query);
      return matchDept && matchQ;
    });
  }, [ROLES, q, dept]);

  const toggleOpen = (id) => setOpenId(prev => (prev === id ? null : id));

  const submitApply = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.roleId = applyFor?.id;
    console.log("Apply payload:", payload);
    alert("Application submitted!");
    setApplyFor(null);
  };

  return (
    <main className="careers-compact">
      {/* HERO */}
      <header className="cc-hero">
        <h1>Careers @ V3 Stars Events</h1>
        <p>Join a small, fast team building large-scale impact.</p>
        <div className="cc-cta">
          <a href="#roles" className="btn primary">See Open Roles</a>
          <a href="#life" className="btn ghost">Life at V3</a>
        </div>
      </header>

      {/* FILTERS */}
      <section id="roles" className="cc-filters">
        <input
          className="cc-search"
          placeholder="Search roles (e.g., marketing, ops)…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select className="cc-select" value={dept} onChange={(e) => setDept(e.target.value)}>
          {departments.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </section>

      {/* ROLES (Accordion) */}
      <section className="cc-list">
        {filtered.length === 0 && <div className="cc-empty">No roles match your filters.</div>}

        {filtered.map((r) => {
          const isOpen = openId === r.id;
          return (
            <article key={r.id} className={`cc-role ${isOpen ? "is-open" : ""}`}>
              <button className="cc-head" onClick={() => toggleOpen(r.id)} aria-expanded={isOpen}>
                <div className="cc-head-main">
                  <h3>{r.title}</h3>
                  <div className="meta">
                    <span className="chip">{r.dept}</span>
                    <span className="dot">•</span>
                    <span>{r.type}</span>
                    <span className="dot">•</span>
                    <span>{r.loc}</span>
                  </div>
                </div>
                <div className="plus" aria-hidden />
              </button>

              <div className="cc-panel" aria-hidden={!isOpen}>
                <p className="summary">{r.summary}</p>
                <ul className="jd">
                  {r.jd.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
                <div className="cc-actions">
                  <button className="btn primary" onClick={() => setApplyFor(r)}>Apply</button>
                  <button className="btn ghost" onClick={() => window.alert("JD download coming soon")}>View JD</button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* LIFE */}
      <section id="life" className="cc-life">
        <h2>Life at V3</h2>
        <div className="life-grid">
          <div className="life-card">🌱 Growth paths & mentorship</div>
          <div className="life-card">🧠 Speakers & learning budget</div>
          <div className="life-card">🤝 Collaborative, kind teammates</div>
          <div className="life-card">🌍 Real impact on industries</div>
        </div>
      </section>

      {/* BOTTOM SHEET APPLY (mobile friendly) */}
      <div className={`cc-sheet ${applyFor ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="sheet-head">
          <h3>Apply — {applyFor?.title}</h3>
          <button className="close" onClick={() => setApplyFor(null)} aria-label="Close">×</button>
        </div>
        <form className="sheet-form" onSubmit={submitApply}>
          <input type="hidden" name="roleTitle" value={applyFor?.title || ""} />
          <label className="field">
            <span>Full name</span>
            <input name="name" required placeholder="Your full name" />
          </label>
          <label className="field">
            <span>Email</span>
            <input type="email" name="email" required placeholder="you@example.com" />
          </label>
          <label className="field">
            <span>Phone</span>
            <input type="tel" name="phone" required placeholder="+91 9XXXXXXXXX" />
          </label>
          <label className="field">
            <span>Resume</span>
            <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
          </label>
          <div className="sheet-actions">
            <button className="btn primary" type="submit">Submit</button>
            <button className="btn ghost" type="button" onClick={() => setApplyFor(null)}>Cancel</button>
          </div>
        </form>
      </div>
    </main>
  );
}
