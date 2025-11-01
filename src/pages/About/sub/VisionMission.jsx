import React from "react";
import "./visionMission.scss";

/**
 * VisionMission component
 * - Self-contained, responsive
 * - Lightweight icons (emoji fallback)
 * - Replace any text or add links/CTAs as needed
 */

export default function VisionMission() {
  return (
    <section className="vm-section" aria-labelledby="vm-title">
      <div className="vm-inner">
        <header className="vm-header">
          <div className="kicker">About Us</div>
          <h2 id="vm-title">Our Vision & Mission</h2>
          <p className="subtitle">
            We turn creativity into unforgettable experiences. Our values guide everything we do — from first idea to final applause.
          </p>
        </header>

        <div className="vm-grid">
          {/* Vision card */}
          <article className="vm-card vm-vision">
            {/* <div className="vm-icon" aria-hidden>🌟</div> */}
            <h3>Our Vision</h3>
            <blockquote className="vm-quote">
              To be one of India’s most trusted and innovative event management companies known
              for creativity, professionalism, and perfection.
            </blockquote>

            <p className="vm-note">We build brands, celebrate milestones, and create moments that last.</p>
          </article>

          {/* Mission card */}
          <article className="vm-card vm-mission">
            {/* <div className="vm-icon" aria-hidden>🎯</div> */}
            <h3>Our Mission</h3>

            <ul className="vm-list">
              <li>
                <span className="bullet">✓</span>
                <div>
                  <strong>Design extraordinary experiences</strong>
                  <div className="small">Event concepts that inspire, engage, and connect people.</div>
                </div>
              </li>

              <li>
                <span className="bullet">✓</span>
                <div>
                  <strong>Build long-term client relationships</strong>
                  <div className="small">Transparency, reliability, and trust at every step.</div>
                </div>
              </li>

              <li>
                <span className="bullet">✓</span>
                <div>
                  <strong>Continuously innovate</strong>
                  <div className="small">New ideas in design, production and digital promotion.</div>
                </div>
              </li>
            </ul>

            <div className="vm-cta-row">
              <a className="btn primary" href="/contact">Talk to our team</a>
              <a className="btn ghost" href="/services">See services</a>
            </div>
          </article>
        </div>

        <footer className="vm-stats">
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
        </footer>
      </div>
    </section>
  );
}
