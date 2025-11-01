import React from "react";
import "./EventInfoCards1.scss";

export default function EventInfoCards1({ organizer = {}, logistics = {}, social = {} }) {
  const {
    name = "Voice Of Words",
    email = "voiceofwords@example.com",
    phone = "+91 9876543210",
    image = "",
  } = organizer;

  const {
    dateLabel = "Nov 16, 2025",
    timeLabel = "11:00 AM to 04:00 PM",
    venueLabel = "Prithvi Art Celebration, Ahmedabad, GJ, IN, 380015",
    mapUrl = "https://goo.gl/maps/example",
  } = logistics;

  const {
    instagram = "sdjasdnf",
    facebook = "sdbj",
    twitter = "#",
    linkedin = "#",
    youtube = "#",
  } = social;

  return (
    <div className="event-info-cards">
      <div className="cards-grid">
        {/* Organizer card */}
        <section className="card organizer-card">
          <h3 className="card-title">Event Organizer</h3>

          <div className="organizer-body">
            <div className="organizer-media">
              {image ? (
                <img src={image} alt={`${name} logo`} className="org-img" />
              ) : (
                <div className="org-placeholder">🎤</div>
              )}
            </div>

            <div className="organizer-info">
              <div className="org-name">{name}</div>
            </div>
          </div>

          <div className="org-contact">
            {/* Email */}
            {email && (
              <a href={`mailto:${email}`} className="info-row" target="_blank" rel="noopener noreferrer">
                <span className="icon email">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span>{email}</span>
              </a>
            )}

            {/* Phone */}
            {phone && (
              <a href={`tel:${phone}`} className="info-row" target="_blank" rel="noopener noreferrer">
                <span className="icon phone">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span>{phone}</span>
              </a>
            )}
          </div>

          {/* Social Links */}
          <div className="social-links">
            {instagram && (
              <a href={instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            )}
            {facebook && (
              <a href={facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
            )}
            {twitter && (
              <a href={twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            )}
            {youtube && (
              <a href={youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            )}
          </div>
        </section>

        {/* Event Duration & Location */}
        <section className="card details-card">
          <h3 className="card-title">Event Duration & Location</h3>

          <div className="detail-row">
            <div className="icon-box">
              <i className="fa-regular fa-calendar"></i>
            </div>
            <div className="detail-body">
              <div className="detail-title">
                {dateLabel} | {timeLabel}
              </div>
            </div>
          </div>

          <div className="detail-row">
            <div className="icon-box">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="detail-body">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="detail-title link">
                {venueLabel}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
