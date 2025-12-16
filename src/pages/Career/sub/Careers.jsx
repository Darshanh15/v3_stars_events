import React, { useMemo, useState, useEffect } from "react";
import "./careers.scss";

const SAMPLE_ROLES = [
  {
    id: 1,
    title: "Event Operations Executive",
    dept: "Operations",
    type: "Full-time • Bengaluru",
    tags: ["On-site", "2–4 yrs"],
    blurb:
      "Own venue coordination, vendor management, and flawless show-day execution.",
  },
  {
    id: 2,
    title: "Business Development Manager",
    dept: "Sales",
    type: "Full-time • Bengaluru / Mumbai",
    tags: ["Hybrid", "3–6 yrs"],
    blurb:
      "Drive exhibitor signups, partnerships, and revenue growth across editions.",
  },
  {
    id: 3,
    title: "Marketing Lead (Digital)",
    dept: "Marketing",
    type: "Full-time • Bengaluru",
    tags: ["Hybrid", "4–7 yrs"],
    blurb:
      "Own paid/organic campaigns, funnels, and brand storytelling for V3 shows.",
  },
  {
    id: 4,
    title: "Content & Community Manager",
    dept: "Marketing",
    type: "Full-time • Remote OK",
    tags: ["Remote", "2–5 yrs"],
    blurb:
      "Curate speakers, craft narratives, and nurture our professional community.",
  },
];

export default function Careers() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("All");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  const departments = useMemo(() => ["All", ...new Set(SAMPLE_ROLES.map(r => r.dept))], []);

  const filtered = useMemo(() => {
    return SAMPLE_ROLES.filter(r => {
      const q = query.trim().toLowerCase();
      const okDept = dept === "All" || r.dept === dept;
      const okQ =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.dept.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q);
      return okDept && okQ;
    });
  }, [query, dept]);

  const openApply = (role) => {
    setSelectedRole(role);
    setDrawerOpen(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.roleId = selectedRole?.id;
    console.log("Apply payload:", payload);
    alert("Application submitted! We'll get back to you shortly.");
    setDrawerOpen(false);
  };

  return (
    <main className="careers">
      {/* HERO */}
      <header className="c-hero">
        <div className="c-hero__content">
          <h1>Build experiences that move industries.</h1>
          <p>
            At <strong>V3 Stars Events</strong>, your work shapes conversations,
            unlocks partnerships, and accelerates innovation.
          </p>
          <div className="c-hero__actions">
            <a href="#open-roles" className="btn primary">View Open Roles</a>
            <a href="#culture" className="btn ghost">Our Culture</a>
          </div>
        </div>
      </header>

      {/* FILTERS */}
      <section id="open-roles" className="c-list card">
        <div className="c-filters">
          <div className="c-search">
            <input
              type="text"
              placeholder="Search roles (e.g., marketing, manager)…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search open roles"
            />
          </div>
          <div className="c-dept">
            <label htmlFor="dept">Department</label>
            <select
              id="dept"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              aria-label="Filter by department"
            >
              {departments.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ROLES */}
        <ul className="roles" role="list">
          {filtered.length === 0 && (
            <li className="role empty">No roles match your filters.</li>
          )}
          {filtered.map((r) => (
            <li key={r.id} className="role">
              <div className="role__main">
                <h3 className="role__title">{r.title}</h3>
                <div className="role__meta">
                  <span className="chip">{r.dept}</span>
                  <span className="dot">•</span>
                  <span>{r.type}</span>
                </div>
                <p className="role__blurb">{r.blurb}</p>
                <div className="role__tags">
                  {r.tags.map((t, i) => (
                    <span key={i} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="role__actions">
                <button className="btn primary" onClick={() => openApply(r)}>
                  Apply
                </button>
                <button className="btn ghost" onClick={() => window.alert("JD download coming soon")}>
                  View JD
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* PERKS & CULTURE */}
      <section id="culture" className="c-perks card">
        <h2 className="section-title">Life at V3 Stars</h2>
        <div className="perks-grid">
          <article className="perk">
            <div className="perk__icon" aria-hidden>🌱</div>
            <h4>Grow Fast</h4>
            <p>Ownership from day one, mentorship, and cross-functional exposure.</p>
          </article>
          <article className="perk">
            <div className="perk__icon" aria-hidden>🧠</div>
            <h4>Learn Deep</h4>
            <p>Speaker access, backstage learning, and course reimbursements.</p>
          </article>
          <article className="perk">
            <div className="perk__icon" aria-hidden>🤝</div>
            <h4>Strong Team</h4>
            <p>Problem-solvers who celebrate wins and support each other.</p>
          </article>
          <article className="perk">
            <div className="perk__icon" aria-hidden>🌍</div>
            <h4>Impact</h4>
            <p>Your work directly shapes industries and opportunities.</p>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section className="c-process card">
        <h2 className="section-title">Hiring Process</h2>
        <ol className="steps">
          <li><span className="step-no">1</span> Quick Intro Call</li>
          <li><span className="step-no">2</span> Skills/Task Round</li>
          <li><span className="step-no">3</span> Manager Interview</li>
          <li><span className="step-no">4</span> Offer & Onboarding</li>
        </ol>
      </section>

      {/* APPLY DRAWER */}
      <div className={`apply-drawer ${drawerOpen ? "is-open" : ""}`} role="dialog" aria-modal="true">
        <div className="apply-head">
          <h3>Apply — {selectedRole?.title || "Role"}</h3>
          <button className="close" onClick={() => setDrawerOpen(false)} aria-label="Close">×</button>
        </div>
        <form className="apply-form" onSubmit={onSubmit}>
          <input type="hidden" name="roleTitle" value={selectedRole?.title || ""} />
          <label className="field">
            <span>Full name</span>
            <input name="name" required placeholder="Your full name" />
          </label>
          <label className="field">
            <span>Email</span>
            <input name="email" type="email" required placeholder="you@example.com" />
          </label>
          <label className="field">
            <span>Phone</span>
            <input name="phone" type="tel" required placeholder="+91 9XXXXXXXXX" />
          </label>
          <label className="field">
            <span>Portfolio / LinkedIn (optional)</span>
            <input name="link" type="url" placeholder="https://…" />
          </label>
          <label className="field">
            <span>Resume</span>
            <input name="resume" type="file" accept=".pdf,.doc,.docx" required />
          </label>
          <div className="apply-actions">
            <button className="btn primary" type="submit">Submit Application</button>
            <button className="btn ghost" type="button" onClick={() => setDrawerOpen(false)}>Cancel</button>
          </div>
        </form>
      </div>

      {/* Sticky mobile apply bar (optional) */}
      <div className="sticky-apply">
        <a href="#open-roles" className="btn primary">Apply Now</a>
      </div>
    </main>
  );
}
