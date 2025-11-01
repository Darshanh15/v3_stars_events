import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import hero1 from "../../../assets/images/img5.jpeg";
import hero2 from "../../../assets/images/img6.jpeg";
import hero3 from "../../../assets/images/img.jpeg";
import "./heroSection.scss";

export default function HeroSection() {
  const slides = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      4000 // change delay (ms)
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`hero-bg ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-text">
        {/* <img src={logo} alt="V3 Stars Events" /> */}
        <h1>Welcome to V3 Stars Events</h1>
        <p>Cosmo and Pharma Global Expo 2026. Confidence.</p>
        <Link to="/services" className="hero-button">
          Explore Services
        </Link>
      </div>
    </section>
  );
}
