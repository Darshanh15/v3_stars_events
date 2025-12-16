import React from "react";
import "./aboutSection.scss";
import founderImg from "../../../assets/founder.jpeg"; // replace with your image or remove

export default function AboutSection() {
  return (
    <section className="about-hero" aria-labelledby="about-title">
      <div className="about-inner">
        {/* Sticky mobile CTA - place near the bottom of your component */}
<div className="mobile-cta" role="region" aria-label="Quick actions">
  <div className="cta-inner">
    <div>
      <div style={{ fontSize: 12, opacity: 0.92 }}>Ready to plan?</div>
      <div style={{ fontWeight: 900, fontSize: 14 }}>Book a free consult</div>
    </div>
    <div className="cta-actions">
      <a className="btn ghost" href="/portfolio" style={{ background: 'rgba(255,255,255,0.06)', color:'#fff', border:'1px solid rgba(255,255,255,0.06)' }}>Portfolio</a>
      <a className="btn primary" href="/contact">Start</a>
    </div>
  </div>
</div>
        <div className="about-left">
          <h1 id="about-title" className="eyebrow">V3 Stars Events</h1>
          <h2 className="headline">
            From Vision to Victory — <span>We Make It Happen</span>
          </h2>

          <p className="lead">
            V3 Stars Events is a dynamic event management company founded by{" "}
            <strong>Mrs. Channveer</strong>. We craft exceptional
            experiences for corporate, social and public occasions by combining creativity, technology,
            and flawless execution.
          </p>

          <p className="mission">
            Our mission is to transform every event into a memorable celebration filled with
            energy, elegance and excellence.
          </p>

          <div className="values">
            <article className="val">
              <div className="icon">✨</div>
              <div>
                <h4>Creative Concepts</h4>
                <p>Unique themes and experiences tailored to your brand and guests.</p>
              </div>
            </article>

            <article className="val">
              <div className="icon">⚙️</div>
              <div>
                <h4>Seamless Execution</h4>
                <p>End-to-end planning and on-site management so you relax and enjoy.</p>
              </div>
            </article>

            <article className="val">
              <div className="icon">📈</div>
              <div>
                <h4>Measurable Impact</h4>
                <p>Data and feedback driven improvements for every future event.</p>
              </div>
            </article>
          </div>

          <div className="cta-row">
            <a href="/contact" className="btn primary">Start your event</a>
            <a href="/portfolio" className="btn ghost">See our portfolio</a>
          </div>
        </div>

        <aside className="about-right" aria-hidden>
          <div className="card founder">
            <div className="founder-media">
              {founderImg ? <img src={founderImg} alt="Mrs. Channveer" /> : <div className="avatar">C</div>}
            </div>
            <div className="founder-meta">
              <h3>Mr. Channveer</h3>
              <p className="role">Founder & Creative Director</p>
              <p className="quote">“We convert visions into celebrations — every time.”</p>
              <ul className="contact-mini">
                <li><strong>Founded</strong><span>2020</span></li>
                <li><strong>Focus</strong><span>Corporate & Social</span></li>
                <li><strong>Location</strong><span>Banglore</span></li>
              </ul>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="num">250+</div>
              <div className="label">Events Delivered</div>
            </div>
            <div className="stat">
              <div className="num">98%</div>
              <div className="label">Client Satisfaction</div>
            </div>
            <div className="stat">
              <div className="num">50+</div>
              <div className="label">Corporate Clients</div>
            </div>
          </div>

          <div className="trust">
            <p className="small">Trusted by</p>
            <div className="brands">
              <div className="brand">ACME</div>
              <div className="brand">BlueCo</div>
              <div className="brand">GreenLabs</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
