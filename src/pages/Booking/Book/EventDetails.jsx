// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ImageCarousel from "../../Booking/Book/ImageCarousel"; // reuse your carousel

// export default function EventDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const event = location.state?.event; // ✅ get the passed data

//   // scroll to top on page load
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   // if no data (e.g., page refresh), go back home
//   if (!event) {
//     navigate("/");
//     return null;
//   }

//   return (
//     <section className="event-details">
//       <div className="event-inner">
//         <div className="event-media">
//           <ImageCarousel images={event.img} height={300} autoplay autoplayDelay={4000} />
//         </div>

//         <div className="event-content">
//           <h1>{event.title}</h1>
//           <p className="date">
//             <strong>Date:</strong>{" "}
//             {new Date(event.date).toLocaleDateString("en-IN", {
//               day: "2-digit",
//               month: "long",
//               year: "numeric",
//             })}
//           </p>
//           <p className="duration">
//             <strong>Duration:</strong> {event.duration}
//           </p>

//           <p className="desc">{event.description}</p>

//           {/* <div className="price-box">
//             <p className="old">₹{event.originalPrice}</p>
//             <p className="new">₹{event.price} <span>per person</span></p>
//           </div> */}

//           <button className="btn primary">Proceed to Booking</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import ImageCarousel from "../../Booking/Book/ImageCarousel";
// import "./eventDetails.scss";

// export default function EventDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const event = location.state?.event;

//   // scroll to top when page loads
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   // redirect to home if no event found
//   if (!event) {
//     navigate("/");
//     return null;
//   }

//   return (
//     <main className="event-details">
//       {/* 🔹 Hero Section */}
//       <header className="event-hero">
//         <ImageCarousel
//           images={event.img}
//           height={400}
//           autoplay
//           autoplayDelay={4000}
//         />

//         <div className="hero-overlay">
//           <div className="hero-text">
//             <h1>{event.title}</h1>
//             <p className="tagline">{event.tagline}</p>

//             <div className="meta">
//               <p>
//                 <strong>Date:</strong>{" "}
//                 {new Date(event.date).toLocaleDateString("en-IN", {
//                   day: "2-digit",
//                   month: "long",
//                   year: "numeric",
//                 })}
//               </p>
//               <p>
//                 <strong>Duration:</strong> {event.duration}
//               </p>
//               <p>
//                 <strong>Venue:</strong> {event.logistics?.venue || "TBA"}
//               </p>
//             </div>

//             <div className="hero-cta">
//               <a href={event.ctas?.registerUrl} className="btn primary">
//                 Register Now
//               </a>
//               <a href={event.ctas?.bookBoothUrl} className="btn ghost">
//                 Book a Booth
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* 🔹 Overview Section */}
//       <section className="event-section overview">
//         <div className="container">
//           <h2>Overview</h2>
//           <p className="lead">{event.shortNote}</p>
//           <p>{event.overview}</p>
//         </div>
//       </section>

//       {/* 🔹 Why Organizing */}
//       <section className="event-section why">
//         <div className="container">
//           <h2>{event.whyOrganizing?.heading}</h2>
//           <div className="grid">
//             {event.whyOrganizing?.points.map((p, i) => (
//               <article key={i} className="why-card">
//                 <h4>{p.title}</h4>
//                 <p>{p.desc}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Benefits */}
//       <section className="event-section benefits">
//         <div className="container grid two-cols">
//           <div>
//             <h2>{event.benefitsForExhibitors.heading}</h2>
//             {event.benefitsForExhibitors.items.map((b, i) => (
//               <div key={i} className="benefit-card">
//                 <h4>{b.key}</h4>
//                 <p>{b.details}</p>
//               </div>
//             ))}
//           </div>

//           <div>
//             <h2>{event.benefitsForVisitors.heading}</h2>
//             {event.benefitsForVisitors.items.map((b, i) => (
//               <div key={i} className="benefit-card">
//                 <h4>{b.key}</h4>
//                 <p>{b.details}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Logistics Section */}
//       <section className="event-section logistics">
//         <div className="container">
//           <h2>Logistics & Contact</h2>
//           <ul className="logistics-list">
//             <li>
//               <strong>Dates:</strong> {event.logistics?.dates}
//             </li>
//             <li>
//               <strong>Venue:</strong> {event.logistics?.venue}
//             </li>
//             <li>
//               <strong>Contact:</strong> {event.logistics?.contact?.email} •{" "}
//               {event.logistics?.contact?.phone}
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* 🔹 Footer Navigation */}
//       <footer className="event-footer container">
//         <Link to="/" className="btn ghost">
//           ← Back to Events
//         </Link>
//       </footer>
//     </main>
//   );
// }












// -------------------------------------------------------------------------------------------------









// src/pages/.../EventDetails.jsx
// import React, { useEffect } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import ImageCarousel from "../../Booking/Book/ImageCarousel";
// import "./eventDetails.scss";

// export default function EventDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const event = location.state?.event;

//   // scroll to top when page loads
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   // if no event data (e.g., page refreshed and you didn't implement lookup), send user back
//   if (!event) {
//     navigate("/", { replace: true });
//     return null;
//   }

//   // safe getters with fallbacks
//   const title = event.title || event.name || "Untitled Event";
//   const tagline = event.tagline || "";
//   const shortNote = event.shortNote || "";
//   const overview = event.overview || "";
//   const heroImages = Array.isArray(event.img) ? event.img : (Array.isArray(event.heroImages) ? event.heroImages : []);
//   const date = event.date || null;
//   const duration = event.duration || (event.meta && event.meta.duration) || "—";

//   const why = event.whyOrganizing?.points ?? (event.why ?? []);
//   const whyHeading = event.whyOrganizing?.heading ?? "Why We're Organizing";

//   const exhibitors = event.benefitsForExhibitors?.items ?? (event.benefitsExhibitors ?? []);
//   const exhibitorsHeading = event.benefitsForExhibitors?.heading ?? "Benefits for Exhibitors";

//   const visitors = event.benefitsForVisitors?.items ?? (event.benefitsVisitors ?? []);
//   const visitorsHeading = event.benefitsForVisitors?.heading ?? "Benefits for Visitors";

//   const logistics = event.logistics ?? {};
//   const ctas = event.ctas ?? {};

//   return (
//     <main className="event-details">
//       {/* Hero */}
//       <header className="event-hero">
//         {/* Carousel; fallback to a single transparent slide if no images */}
//         <ImageCarousel images={heroImages.length ? heroImages : [""]} height={380} autoplay autoplayDelay={4000} />

//         <div className="hero-overlay">
//           <div className="hero-text">
//             <h1>{title}</h1>
//             {tagline && <p className="tagline">{tagline}</p>}

//             <div className="meta">
//               {date && (
//                 <p>
//                   <strong>Date:</strong>{" "}
//                   {new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}
//                 </p>
//               )}
//               <p>
//                 <strong>Duration:</strong> {duration}
//               </p>
//               {logistics?.venue && (
//                 <p>
//                   <strong>Venue:</strong> {logistics.venue}
//                 </p>
//               )}
//             </div>

//             <div className="hero-cta">
//               {ctas.registerUrl ? (
//                 <a className="btn primary" href={ctas.registerUrl}>
//                   Register Now
//                 </a>
//               ) : (
//                 <Link className="btn primary" to="/register">
//                   Register
//                 </Link>
//               )}

//               {ctas.bookBoothUrl ? (
//                 <a className="btn ghost" href={ctas.bookBoothUrl}>
//                   Book a Booth
//                 </a>
//               ) : (
//                 <Link className="btn ghost" to="/contact">
//                   Contact
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Overview */}
//       {(shortNote || overview) && (
//         <section className="event-section overview">
//           <div className="container">
//             <h2>Overview</h2>
//             {shortNote && <p className="lead">{shortNote}</p>}
//             {overview && <p>{overview}</p>}
//           </div>
//         </section>
//       )}

//       {/* Why Organizing */}
//       {Array.isArray(why) && why.length > 0 && (
//         <section className="event-section why">
//           <div className="container">
//             <h2>{whyHeading}</h2>
//             <div className="grid">
//               {why.map((p, i) => (
//                 <article className="why-card" key={i}>
//                   <h4>{p.title || p.key || `Point ${i + 1}`}</h4>
//                   <p>{p.desc || p.details || ""}</p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Benefits */}
//       {(Array.isArray(exhibitors) && exhibitors.length > 0) || (Array.isArray(visitors) && visitors.length > 0) ? (
//         <section className="event-section benefits">
//           <div className="container grid two-cols">
//             {Array.isArray(exhibitors) && exhibitors.length > 0 && (
//               <div>
//                 <h2>{exhibitorsHeading}</h2>
//                 <div className="cards">
//                   {exhibitors.map((b, i) => (
//                     <div className="benefit-card" key={i}>
//                       <h4>{b.key || b.title || `Benefit ${i + 1}`}</h4>
//                       <p>{b.details || b.desc || ""}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {Array.isArray(visitors) && visitors.length > 0 && (
//               <div>
//                 <h2>{visitorsHeading}</h2>
//                 <div className="cards">
//                   {visitors.map((b, i) => (
//                     <div className="benefit-card" key={i}>
//                       <h4>{b.key || b.title || `Benefit ${i + 1}`}</h4>
//                       <p>{b.details || b.desc || ""}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       ) : null}

//       {/* Logistics */}
//       {(logistics?.dates || logistics?.venue || logistics?.contact) && (
//         <section className="event-section logistics">
//           <div className="container">
//             <h2>Logistics & Contact</h2>
//             <ul className="logistics-list">
//               {logistics.dates && (
//                 <li>
//                   <strong>Dates:</strong> {logistics.dates}
//                 </li>
//               )}
//               {logistics.venue && (
//                 <li>
//                   <strong>Venue:</strong> {logistics.venue}
//                 </li>
//               )}
//               {(logistics.contact?.email || logistics.contact?.phone) && (
//                 <li>
//                   <strong>Contact:</strong> {`${logistics.contact?.email ?? ""}${logistics.contact?.email && logistics.contact?.phone ? " • " : ""}${logistics.contact?.phone ?? ""}`}
//                 </li>
//               )}
//             </ul>
//           </div>
//         </section>
//       )}

//       {/* Footer */}
//       <footer className="event-footer container">
//         <Link to="/" className="btn ghost">
//           ← Back to events
//         </Link>
//       </footer>
//     </main>
//   );
// }





// -------------------------------------------------------------------------------------------------


// import React, { useEffect } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import ImageCarousel from "../../Booking/Book/ImageCarousel";
// import "./eventDetails.scss";

// export default function EventDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const event = location.state?.event;

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   if (!event) {
//     navigate("/", { replace: true });
//     return null;
//   }

//   const title = event.title || event.name || "Untitled Event";
//   const tagline = event.tagline || "";
//   const shortNote = event.shortNote || "";
//   const overview = event.overview || "";
//   const heroImages = Array.isArray(event.img) ? event.img : (Array.isArray(event.heroImages) ? event.heroImages : []);
//   const date = event.date || null;
//   const duration = event.duration || (event.meta && event.meta.duration) || "—";

//   const why = event.whyOrganizing?.points ?? (event.why ?? []);
//   const whyHeading = event.whyOrganizing?.heading ?? "Why We're Organizing";

//   const exhibitors = event.benefitsForExhibitors?.items ?? (event.benefitsExhibitors ?? []);
//   const exhibitorsHeading = event.benefitsForExhibitors?.heading ?? "Benefits for Exhibitors";

//   const visitors = event.benefitsForVisitors?.items ?? (event.benefitsVisitors ?? []);
//   const visitorsHeading = event.benefitsForVisitors?.heading ?? "Benefits for Visitors";

//   const logistics = event.logistics ?? {};
//   const ctas = event.ctas ?? {};

//   return (
//     <main className="event-details page">
//       {/* Hero */}
//       <header className="event-hero">
//         <ImageCarousel images={heroImages.length ? heroImages : [""]} height={420} autoplay autoplayDelay={4500} />

//         <div className="hero-overlay">
//           <div className="hero-container">
//             <div className="hero-badge">
//               <span className="badge-date">{date ? new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "TBA"}</span>
//               <span className="badge-type">{event.type || "Conference"}</span>
//             </div>

//             <div className="hero-text">
//               <h1 className="event-title">{title}</h1>
//               {tagline && <p className="tagline">{tagline}</p>}

//               <div className="meta">
//                 {date && <div className="meta-item"><strong>Date</strong><span>{new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}</span></div>}
//                 <div className="meta-item"><strong>Duration</strong><span>{duration}</span></div>
//                 {logistics?.venue && <div className="meta-item"><strong>Venue</strong><span>{logistics.venue}</span></div>}
//               </div>

//               <div className="hero-cta">
//                 {ctas.registerUrl ? (
//                   <a className="btn primary" href={ctas.registerUrl} rel="noopener noreferrer">Register Now</a>
//                 ) : (
//                   <Link className="btn primary" to="/register">Register</Link>
//                 )}

//                 {ctas.bookBoothUrl ? (
//                   <a className="btn ghost" href={ctas.bookBoothUrl} rel="noopener noreferrer">Book a Booth</a>
//                 ) : (
//                   <Link className="btn ghost" to="/contact">Contact</Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main content container */}
//       <div className="container content">
//         {/* Overview */}
//         {(shortNote || overview) && (
//           <section className="event-section overview card">
//             <h2 className="section-title">Overview</h2>
//             {shortNote && <p className="lead">{shortNote}</p>}
//             {overview && <p className="copy">{overview}</p>}
//           </section>
//         )}

//         {/* Two-column: Why + Logistics (left), Benefits (right) */}
//         <div className="grid two-col">
//           <div className="left-col">
//             {/* Why Organizing */}
//             {Array.isArray(why) && why.length > 0 && (
//               <section className="event-section why card">
//                 <h2 className="section-title">{whyHeading}</h2>
//                 <div className="grid-cards">
//                   {why.map((p, i) => (
//                     <article className="why-card" key={i}>
//                       <div className="why-index">{i + 1}</div>
//                       <div className="why-body">
//                         <h4>{p.title || p.key || `Point ${i + 1}`}</h4>
//                         <p>{p.desc || p.details || ""}</p>
//                       </div>
//                     </article>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Logistics */}
//             {(logistics?.dates || logistics?.venue || logistics?.contact) && (
//               <section className="event-section logistics card">
//                 <h2 className="section-title">Logistics & Contact</h2>
//                 <ul className="logistics-list">
//                   {logistics.dates && <li><strong>Dates:</strong> <span>{logistics.dates}</span></li>}
//                   {logistics.venue && <li><strong>Venue:</strong> <span>{logistics.venue}</span></li>}
//                   {(logistics.contact?.email || logistics.contact?.phone) && (
//                     <li><strong>Contact:</strong> <span>{`${logistics.contact?.email ?? ""}${logistics.contact?.email && logistics.contact?.phone ? " • " : ""}${logistics.contact?.phone ?? ""}`}</span></li>
//                   )}
//                 </ul>
//                 {logistics.mapLink && (
//                   <a className="btn outline small" href={logistics.mapLink} target="_blank" rel="noopener noreferrer">View on map</a>
//                 )}
//               </section>
//             )}
//           </div>

//           <aside className="right-col">
//             {/* Benefits */}
//             {(Array.isArray(exhibitors) && exhibitors.length > 0) && (
//               <section className="event-section benefits card">
//                 <h2 className="section-title">{exhibitorsHeading}</h2>
//                 <div className="cards">
//                   {exhibitors.map((b, i) => (
//                     <div className="benefit-card" key={i}>
//                       <h4>{b.key || b.title || `Benefit ${i + 1}`}</h4>
//                       <p>{b.details || b.desc || ""}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {(Array.isArray(visitors) && visitors.length > 0) && (
//               <section className="event-section benefits card">
//                 <h2 className="section-title">{visitorsHeading}</h2>
//                 <div className="cards">
//                   {visitors.map((b, i) => (
//                     <div className="benefit-card" key={i}>
//                       <h4>{b.key || b.title || `Benefit ${i + 1}`}</h4>
//                       <p>{b.details || b.desc || ""}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}
//           </aside>
//         </div>

//         {/* Back CTA */}
//         <footer className="event-footer">
//           <Link to="/" className="btn ghost">← Back to events</Link>
//         </footer>
//       </div>
//     </main>
//   );
// }

// ----------------------------------------------------------------------------------------------------------
// 2nd


import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel.jsx";
import "./eventDetails.scss";
import EventInfoCards from "./EventInfoCards.jsx";
import EventInfoCards1 from "./EventInfoCards1.jsx";
import Organizing from "./Organizing.jsx";
import ExpoRegistration from "../Registration/ExpoRegistration.jsx";
import BookingForm from "../Registration/BookingForm.jsx";
import BenefitsForVisitors from "./BenefitsForVisitors.jsx";
import BenefitsForExhibitors from "./BenefitsForExhibitors.jsx";

export default function EventDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!event) {
    navigate("/", { replace: true });
    return null;
  }

  const title = event.title || event.name || "Untitled Event";
  const tagline = event.tagline || "";
  const shortNote = event.shortNote || "";
  const overview = event.overview || "";
  const heroImages = Array.isArray(event.img) ? event.img : (Array.isArray(event.heroImages) ? event.heroImages : []);
  const date = event.date || null;
  const duration = event.duration || (event.meta && event.meta.duration) || "—";

  const why = event.whyOrganizing?.points ?? (event.why ?? []);
  const whyHeading = event.whyOrganizing?.heading ?? "Why We're Organizing";

  const exhibitors = event.benefitsForExhibitors?.items ?? (event.benefitsExhibitors ?? []);
  const exhibitorsHeading = event.benefitsForExhibitors?.heading ?? "Benefits for Exhibitors";

  const visitors = event.benefitsForVisitors?.items ?? (event.benefitsVisitors ?? []);
  const visitorsHeading = event.benefitsForVisitors?.heading ?? "Benefits for Visitors";

  const logistics = event.logistics ?? {};
  const ctas = event.ctas ?? {};

  return (
    <main className="event-details page">
      {/* Hero */}
      <header className="event-hero">
        <ImageCarousel images={heroImages.length ? heroImages : [""]} height={420} autoplay autoplayDelay={4500} />

        <div className="hero-overlay">
          <div className="hero-container">
            <div className="hero-badge">
              <span className="badge-date">{date ? new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "TBA"}</span>
              <span className="badge-type">{event.type || "Conference"}</span>
            </div>

            <div className="hero-text">
              <h1 className="event-title">{title}</h1>
              {tagline && <p className="tagline">{tagline}</p>}

              <div className="meta">
                {date && <div className="meta-item"><strong>Date</strong><span>{new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}</span></div>}
                <div className="meta-item"><strong>Duration</strong><span>{duration}</span></div>
                {logistics?.venue && <div className="meta-item"><strong>Venue</strong><span>{logistics.venue}</span></div>}
              </div>

              <div className="hero-cta">
                {ctas.registerUrl ? (
                  <a className="btn primary" href={ctas.registerUrl} rel="noopener noreferrer">Register Now</a>
                ) : (
                  <Link className="btn primary" to="/register">Register</Link>
                )}

                {ctas.bookBoothUrl ? (
                  <a className="btn ghost" href={ctas.bookBoothUrl} rel="noopener noreferrer">Book a Booth</a>
                ) : (
                  <Link className="btn ghost" to="/contact">Contact</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content container */}
      <div className="container content">
        {/* Overview */}
        {(shortNote || overview) && (
          <section className="event-section overview card">
            <h2 className="section-title">Overview</h2>
            {shortNote && <p className="lead">{shortNote}</p>}
            {overview && <p className="copy">{overview}</p>}
          </section>
        )}

       <div className="grid">
        <div className="left-col">
          {Array.isArray(why) && why.length > 0 && (
            <section>

            </section>
          )}
        </div>
       </div>
<BookingForm />

       <Organizing />
       <BenefitsForVisitors />
       <BenefitsForExhibitors />
{/* <EventInfoCards /> */}
{/* <ExpoRegistration /> */}

       



        {/* Back CTA */}
        <footer className="event-footer">
          <Link to="/" className="btn ghost">← Back to events</Link>
        </footer>
      </div>
    </main>
  );
}
