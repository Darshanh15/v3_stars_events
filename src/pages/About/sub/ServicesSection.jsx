import React from "react";
import "./services.scss";

// Simple inline SVG icon factory for variety
const Icon = ({ name }) => {
  const size = 34;
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
  switch (name) {
    case "management":
      return (
        <svg {...common}><rect x="2" y="3" width="20" height="18" rx="3" fill="#EAF4FF"/><path d="M7 10h10M7 14h6" stroke="#0B74DE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      );
    case "production":
      return (
        <svg {...common}><circle cx="12" cy="8" r="3" fill="#FFF5E6"/><path d="M4 21c0-4 3-6 8-6s8 2 8 6" stroke="#FF9A2E" strokeWidth="1.6" strokeLinecap="round"/></svg>
      );
    case "media":
      return (
        <svg {...common}><rect x="3" y="6" width="18" height="12" rx="2" fill="#F0FFF6"/><path d="M7 9l5 3-5 3V9z" fill="#17C3B2"/></svg>
      );
    case "decor":
      return (
        <svg {...common}><path d="M12 3l2.5 5L20 9l-4 3 1 6-5-3-5 3 1-6L4 9l5.5-1L12 3z" fill="#FFF0F6" stroke="#D14A8E" strokeWidth="0.6"/></svg>
      );
    case "artists":
      return (
        <svg {...common}><circle cx="8" cy="8" r="3" fill="#FFF6E8"/><path d="M3 20c2-4 10-4 14 0" stroke="#FF6B6B" strokeWidth="1.6"/></svg>
      );
    case "support":
      return (
        <svg {...common}><path d="M4 7h16v10H4z" fill="#EEF7FF"/><path d="M9 11h6M9 14h4" stroke="#0B74DE" strokeWidth="1.6" strokeLinecap="round"/></svg>
      );
    default:
      return <svg {...common}><rect width="24" height="24" rx="4" fill="#eee"/></svg>;
  }
};

const SERVICES = [
  {
    id: "s1",
    icon: "management",
    title: "Event Management",
    items: [
      "Corporate Events",
      "Conferences & Seminars",
      "Product Launches",
      "Dealer Meets",
      "Weddings & Receptions",
      "Engagements / Birthdays / Anniversaries",
      "Exhibitions, Trade Fairs & Fashion Shows",
    ],
  },
  {
    id: "s2",
    icon: "production",
    title: "Event Production",
    items: [
      "Stage Design & Fabrication",
      "Sound, Light & LED Setup",
      "Backdrop & Branding Solutions",
      "Truss, Entry Arch & Booth Fabrication",
    ],
  },
  {
    id: "s3",
    icon: "media",
    title: "Media & Promotion",
    items: [
      "Photography & Videography",
      "Drone & Live Streaming",
      "Invitation Video & Event Teasers",
      "Social Media Marketing & Digital Campaigns",
    ],
  },
  {
    id: "s4",
    icon: "decor",
    title: "Décor & Theme Design",
    items: [
      "Floral & Lighting Décor",
      "Corporate Theme Décor",
      "Wedding / Reception Themes",
      "Photo Booth & Creative Corners",
    ],
  },
  {
    id: "s5",
    icon: "artists",
    title: "Artist & Celebrity Management",
    items: [
      "Celebrity Appearances",
      "Anchors, DJs & Performers",
      "Influencers & Models",
      "Fashion Show Coordination",
    ],
  },
  {
    id: "s6",
    icon: "support",
    title: "Support Services",
    items: [
      "Catering Coordination",
      "Hospitality & Guest Handling",
      "Security & Transportation",
      "On-Site Event Staff & Crew",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="services-inner">
        <header className="services-head">
          <h2 id="services-title">Our Core Services</h2>
          <p className="services-sub">Comprehensive event solutions — from concept to curtain call. We design, produce, promote and support unforgettable experiences.</p>
        </header>

        <div className="services-grid" role="list">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.id} role="listitem">
              <div className="service-head">
                <div className="service-icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
              </div>

              <ul className="service-list">
                {s.items.map((it, i) => (
                  <li key={i}><svg className="tick" viewBox="0 0 24 24" width="16" height="16" aria-hidden><circle cx="12" cy="12" r="11" fill="#F0FFFA"/><path d="M7.5 12.5l2.3 2.3 6.7-8.3" stroke="#17C3B2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>{it}</li>
                ))}
              </ul>

              <div className="service-cta">
                <a href="/contact" className="btn-primary">Enquire</a>
                <button className="btn-ghost" onClick={() => alert(`${s.title} — full details sent to your inbox (demo).`)}>More</button>
              </div>
            </article>
          ))}
        </div>

        <div className="services-footer">
          <a className="btn-outline" href="/services">See full services & packages</a>
          <div className="trusted">Trusted by 50+ corporate clients</div>
        </div>
      </div>
    </section>

    
  );
}
