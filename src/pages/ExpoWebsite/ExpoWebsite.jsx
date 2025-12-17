import React from "react";
import "./ExpoWebsite.scss";

const ExpoWebsite = () => {
  return (
    <>
      <header className="expo-header">
        <div className="container hero-grid">
          <div>
            <h1>Cosmo & Pharma Global Expo 2026</h1>
            <p>
              <strong>April 18th & 19th, 2026</strong><br />
              Gayatri Grand – Palace Grounds, Bengaluru
            </p>
            <p>
              A premium B2B exhibition connecting cosmetic, pharmaceutical,
              dermatology, wellness, packaging and machinery industries.
            </p>
            <a href="#pricing" className="btn btn-primary">Book Your Stall</a>
            <a href="#registration" className="btn btn-outline">Register Now</a>
          </div>

          <div className="card">
            <strong>Organised By</strong><br /><br />
            <strong>V3 Stars Events</strong><br />
            World Trade Center, Brigade Gateway<br />
            Bengaluru – 560055
          </div>
        </div>
      </header>

      <section className="light">
        <div className="container">
          <h2>About the Expo</h2>
          <p>
            <strong>Cosmo & Pharma Global Expo 2026</strong> is a premier
            international B2B exhibition curated to unite cosmetics,
            pharmaceuticals, dermatology, wellness, nutraceuticals, packaging
            and machinery industries.
          </p>
          <p>
            Organised by <strong>V3 Stars Events</strong>, the expo enables
            networking, distributor appointments, product launches and global
            collaborations.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Industry Segments</h2>
          <div className="grid">
            {[
              "Cosmetics & Personal Care",
              "Pharmaceuticals & APIs",
              "Dermatology & Aesthetics",
              "Nutraceuticals & Wellness",
              "Packaging Solutions",
              "Machinery & Manufacturing",
            ].map((item, i) => (
              <div className="card" key={i}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="light">
        <div className="container">
          <h2>Who Should Exhibit</h2>
          <ul>
            <li>Cosmetic & Skincare Brands</li>
            <li>Pharmaceutical Manufacturers</li>
            <li>Contract Manufacturers</li>
            <li>Packaging Suppliers</li>
            <li>Machinery Providers</li>
          </ul>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <h2>Stall Pricing</h2>
          <table>
            <thead>
              <tr>
                <th>Stall Size</th>
                <th>Zone</th>
                <th>Visibility</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>10x10</td><td>Standard</td><td>Moderate</td><td>₹75,000</td></tr>
              <tr><td>10x10</td><td>Main Aisle</td><td>High</td><td>₹90,000</td></tr>
              <tr><td>10x20</td><td>Prime Aisle</td><td>Very High</td><td>₹1,65,000</td></tr>
              <tr><td>20x20</td><td>Premium</td><td>Maximum</td><td>₹3,50,000</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="registration" className="light">
        <div className="container grid">
          <div className="card">
            <h3>Visitor Registration</h3>
            <a className="btn btn-primary" href="https://drive.google.com" target="_blank">Register</a>
          </div>
          <div className="card">
            <h3>Exhibitor Registration</h3>
            <a className="btn btn-primary" href="https://drive.google.com" target="_blank">Register</a>
          </div>
        </div>
      </section>

      <footer>
        © 2026 Cosmo & Pharma Global Expo | V3 Stars Events
      </footer>
    </>
  );
};

export default ExpoWebsite;
