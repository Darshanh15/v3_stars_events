import React from "react";
import "./ECard.scss";

const ECard = () => (
  <div className="ecard">
    <div className="ecard-top">
      <h1>Cosmo & Pharma Global Expo 2026</h1>
      <p>Beauty • Wellness • Pharmaceutical Innovation</p>
      <span className="badge">B2B International Expo</span>
    </div>

    <div className="ecard-body">
      <div><label>Dates</label><span>April 18th & 19th, 2026</span></div>
      <div><label>Venue</label><span>Gayatri Grand – Palace Grounds</span></div>
      <div><label>Organised By</label><span>V3 Stars Events</span></div>

      <div className="cta">
        <a href="https://drive.google.com" className="btn btn-primary">Register</a>
        <a href="tel:7353631113" className="btn btn-outline">Call Now</a>
      </div>
    </div>

    <div className="ecard-footer">
      © 2026 Cosmo & Pharma Global Expo
    </div>
  </div>
);

export default ECard;
