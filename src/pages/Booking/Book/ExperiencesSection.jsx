// import React from "react";
// import "./experiencesSection.scss";

// /**
//  * Replace `data` with real data from props or API.
//  */
// const data = [
//   {
//     id: 1,
//     title: "Play Arena Combo Activity Package at Bangalore",
//     img: "/assets/play-arena.jpg",
//     duration: "8H",
//     rating: 4,
//     ratingCount: 4637,
//     originalPrice: 3334.0,
//     price: 2500.0,
//   },
//   {
//     id: 2,
//     title: "Wine Tour in Bangalore",
//     img: "/assets/wine-tour.jpg",
//     duration: "4H",
//     rating: 4,
//     ratingCount: 4635,
//     originalPrice: 1674.4,
//     price: 1199.0,
//   },
//   {
//     id: 3,
//     title: "Param Science Centre Tickets, Bangalore",
//     img: "/assets/param-science.jpg",
//     duration: "2H",
//     rating: 4,
//     ratingCount: 29,
//     originalPrice: 299.0,
//     price: 235.0,
//   },
//   {
//     id: 4,
//     title: "Play Arena Combo Activity Package at Bangalore",
//     img: "/assets/play-arena.jpg",
//     duration: "8H",
//     rating: 4,
//     ratingCount: 4637,
//     originalPrice: 3334.0,
//     price: 2500.0,
//   },
// ];

// function Stars({ value = 0, max = 5 }) {
//   const full = Math.floor(value);
//   const items = Array.from({ length: max }, (_, i) => i < full);
//   return (
//     <span className="stars" aria-hidden>
//       {items.map((isFull, idx) => (
//         <svg
//           key={idx}
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill={isFull ? "currentColor" : "none"}
//           stroke="currentColor"
//           strokeWidth="1.2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className={`star ${isFull ? "star--full" : "star--empty"}`}
//           aria-hidden
//         >
//           <path d="M12 17.3L6.16 20l1.12-6.54L2 9.6l6.63-.96L12 3l3.37 5.64L22 9.6l-5.28 3.86L17.84 20z" />
//         </svg>
//       ))}
//     </span>
//   );
// }

// export default function ExperiencesSection({ experiences = data }) {
//   return (
//     <section className="experiences" aria-labelledby="experiences-title">
//       <div className="experiences-inner">
//         <div className="experiences-head">
//           <h2 id="experiences-title">Bangalore In City Experiences</h2>
//           <a href="/explore" className="explore-link" aria-label="Explore all experiences">
//             Explore All (14)
//           </a>
//         </div>

//         <div className="cards" role="list">
//           {experiences.map((ex) => (
//             <article className="card" key={ex.id} role="listitem" tabIndex={0}>
//               <div className="card-media" aria-hidden>
//                 <img src={ex.img} alt={ex.title} loading="lazy" />
//                 <div className="badge" aria-hidden>
//                   <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
//                     <path d="M12 1v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                   </svg>
//                   <span>{ex.duration}</span>
//                 </div>
//               </div>

//               <div className="card-body">
//                 <div className="rating-row">
//                   <Stars value={ex.rating} />
//                   <span className="rating-count">{ex.ratingCount.toLocaleString()} Ratings</span>
//                 </div>

//                 <h3 className="card-title">{ex.title}</h3>

//                 <div className="price-row" aria-hidden>
//                   <div className="price-old">₹ {ex.originalPrice.toFixed(2)}</div>
//                   <div className="price-new">₹ {ex.price.toFixed(2)} <span className="muted">per adult</span></div>
//                 </div>

//                 <div className="card-cta">
//                   <button className="btn book" aria-label={`Book ${ex.title}`}>Book Now</button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useState, useMemo } from "react";
// import "./experiencesSection.scss";

// const data = [
//   {
//     id: 1,
//     title: "Play Arena Combo Activity Package at Bangalore",
//     img: "/assets/play-arena.jpg",
//     duration: "8H",
//     rating: 4,
//     ratingCount: 4637,
//     originalPrice: 3334.0,
//     price: 2500.0,
//     date: "2025-11-10",
//   },
//   {
//     id: 2,
//     title: "Wine Tour in Bangalore",
//     img: "/assets/wine-tour.jpg",
//     duration: "4H",
//     rating: 4,
//     ratingCount: 4635,
//     originalPrice: 1674.4,
//     price: 1199.0,
//     date: "2025-11-05",
//   },
//   {
//     id: 3,
//     title: "Param Science Centre Tickets, Bangalore",
//     img: "/assets/param-science.jpg",
//     duration: "2H",
//     rating: 4,
//     ratingCount: 29,
//     originalPrice: 299.0,
//     price: 235.0,
//     date: "2025-12-15",
//   },
//    {
//     id: 4,
//     title: "Param Science Centre Tickets, Bangalore",
//     img: "/assets/param-science.jpg",
//     duration: "2H",
//     rating: 4,
//     ratingCount: 29,
//     originalPrice: 299.0,
//     price: 235.0,
//     date: "2025-12-16",
//   },
// ];

// function Stars({ value = 0, max = 5 }) {
//   const full = Math.floor(value);
//   const items = Array.from({ length: max }, (_, i) => i < full);
//   return (
//     <span className="stars" aria-hidden>
//       {items.map((isFull, idx) => (
//         <svg
//           key={idx}
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill={isFull ? "currentColor" : "none"}
//           stroke="currentColor"
//           strokeWidth="1.2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className={`star ${isFull ? "star--full" : "star--empty"}`}
//         >
//           <path d="M12 17.3L6.16 20l1.12-6.54L2 9.6l6.63-.96L12 3l3.37 5.64L22 9.6l-5.28 3.86L17.84 20z" />
//         </svg>
//       ))}
//     </span>
//   );
// }

// export default function ExperiencesSection({ experiences = data }) {
//   const [selectedMonth, setSelectedMonth] = useState("all");

//   // Sort by date (earliest first)
//   const sortedExperiences = useMemo(() => {
//     const sorted = [...experiences].sort(
//       (a, b) => new Date(a.date) - new Date(b.date)
//     );

//     if (selectedMonth === "all") return sorted;
//     return sorted.filter((ex) => {
//       const month = new Date(ex.date).getMonth() + 1;
//       return month === parseInt(selectedMonth);
//     });
//   }, [experiences, selectedMonth]);

//   return (
//     <section className="experiences" aria-labelledby="experiences-title">
//       <div className="experiences-inner">
//         <div className="experiences-head">
//           <h2 id="experiences-title">Upcoming Bangalore Experiences</h2>

//           <div className="filter-box">
//             <label htmlFor="month" className="filter-label">
//               Filter by month:
//             </label>
//             <select
//               id="month"
//               className="filter-select"
//               value={selectedMonth}
//               onChange={(e) => setSelectedMonth(e.target.value)}
//             >
//               <option value="all">All</option>
//               <option value="11">November</option>
//               <option value="12">December</option>
//             </select>
//           </div>
//         </div>

//         <div className="cards" role="list">
//           {sortedExperiences.map((ex) => (
//             <article className="card" key={ex.id} role="listitem" tabIndex={0}>
//               <div className="card-media" aria-hidden>
//                 <img src={ex.img} alt={ex.title} loading="lazy" />
//                 <div className="badge">
//                   <span>{ex.duration}</span>
//                 </div>
//                 <div className="date-tag">
//                   {new Date(ex.date).toLocaleDateString("en-IN", {
//                     day: "2-digit",
//                     month: "short",
//                     year: "numeric",
//                   })}
//                 </div>
//               </div>

//               <div className="card-body">
//                 <div className="rating-row">
//                   <Stars value={ex.rating} />
//                   <span className="rating-count">
//                     {ex.ratingCount.toLocaleString()} Ratings
//                   </span>
//                 </div>

//                 <h3 className="card-title">{ex.title}</h3>

//                 <div className="price-row">
//                   <div className="price-old">₹ {ex.originalPrice.toFixed(2)}</div>
//                   <div className="price-new">
//                     ₹ {ex.price.toFixed(2)}{" "}
//                     <span className="muted">per adult</span>
//                   </div>
//                 </div>

//                 <div className="card-cta">
//                   <button className="btn book">Book Now</button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState, useMemo } from "react";
// import "./experiencesSection.scss";
// import ImageCarousel from "./ImageCarousel";

// import img from '../../../assets/images/img.jpeg'
// import img1 from '../../../assets/images/img1.jpeg'
// import img2 from '../../../assets/images/img2.jpeg'
// import img3 from '../../../assets/images/img3.jpeg'
// import img4 from '../../../assets/images/img4.jpeg'

// const data = [
//   {
//     id: 1,
//     title: "Play Arena Combo Activity Package at Bangalore",
//     img: [img, img1, img2, img3, img4],
//     duration: "8H",
//     rating: 4,
//     ratingCount: 4637,
//     originalPrice: 3334.0,
//     price: 2500.0,
//     date: "2025-12-16",
//   },
//     {
//     id: 1,
//     title: "Play Arena Combo Activity Package at Bangalore",
//     img: [img, img1, img2, img3, img4],
//     duration: "8H",
//     rating: 4,
//     ratingCount: 4637,
//     originalPrice: 3334.0,
//     price: 2500.0,
//     date: "2026-02-16",
//   },
//   {
//     id: 2,
//     title: "Wine Tour in Bangalore",
//     img: [img, img1, img2, img3, img4],
//     duration: "4H",
//     rating: 4,
//     ratingCount: 4635,
//     originalPrice: 1674.4,
//     price: 1199.0,
//     date: "2025-11-10",
//   },
//   {
//     id: 3,
//     title: "Param Science Centre Tickets, Bangalore",
//     img: [img, img1, img2, img3, img4],
//     duration: "2H",
//     rating: 4,
//     ratingCount: 29,
//     originalPrice: 299.0,
//     price: 235.0,
//     date: "2025-12-05",
//   },
// ];

// function Stars({ value = 0, max = 5 }) {
//   const full = Math.floor(value);
//   const items = Array.from({ length: max }, (_, i) => i < full);
//   return (
//     <span className="stars" aria-hidden>
//       {items.map((isFull, idx) => (
//         <svg
//           key={idx}
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill={isFull ? "currentColor" : "none"}
//           stroke="currentColor"
//           strokeWidth="1.2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className={`star ${isFull ? "star--full" : "star--empty"}`}
//         >
//           <path d="M12 17.3L6.16 20l1.12-6.54L2 9.6l6.63-.96L12 3l3.37 5.64L22 9.6l-5.28 3.86L17.84 20z" />
//         </svg>
//       ))}
//     </span>
//   );
// }

// export default function ExperiencesSection({ experiences = data }) {
//   const [selectedMonth, setSelectedMonth] = useState("all");

//   // Automatically extract unique months from data
//   const months = useMemo(() => {
//     const monthSet = new Set();
//     experiences.forEach((ex) => {
//       const d = new Date(ex.date);
//       const key = `${d.getFullYear()}-${d.getMonth()}`; // e.g. "2025-11"
//       monthSet.add(key);
//     });

//     // Convert to readable month names and sort chronologically
//     const sorted = Array.from(monthSet)
//       .map((m) => {
//         const [year, month] = m.split("-");
//         const name = new Date(year, month).toLocaleString("en-US", {
//           month: "long",
//           year: "numeric",
//         });
//         return { key: m, name };
//       })
//       .sort((a, b) => new Date(a.name) - new Date(b.name));

//     return sorted;
//   }, [experiences]);

//   // Sort by date (earliest first) + filter by selected month
//   const filteredExperiences = useMemo(() => {
//     const sorted = [...experiences].sort(
//       (a, b) => new Date(a.date) - new Date(b.date)
//     );

//     if (selectedMonth === "all") return sorted;

//     const [y, m] = selectedMonth.split("-");
//     return sorted.filter(
//       (ex) =>
//         new Date(ex.date).getFullYear() === parseInt(y) &&
//         new Date(ex.date).getMonth() === parseInt(m)
//     );
//   }, [experiences, selectedMonth]);

//   return (
//     <section className="experiences" aria-labelledby="experiences-title">
//       <div className="experiences-inner">
        

//         <div className="experiences-head">
//   <div className="title-box">
//     <h2 id="experiences-title">Upcoming Bangalore Experiences</h2>
//     <a href="/explore" className="explore-link" aria-label="Explore all experiences">
//       Explore All ({experiences.length})
//     </a>
//   </div>

//   <div className="filter-box">
//     <label htmlFor="month" className="filter-label">
//       Filter by month:
//     </label>
//     <select
//       id="month"
//       className="filter-select"
//       value={selectedMonth}
//       onChange={(e) => setSelectedMonth(e.target.value)}
//     >
//       <option value="all">All</option>
//       {months.map((m) => (
//         <option key={m.key} value={m.key}>
//           {m.name}
//         </option>
//       ))}
//     </select>
//   </div>
// </div>


//         <div className="cards" role="list">
//           {filteredExperiences.map((ex) => (
//             <article className="card" key={ex.id} role="listitem" tabIndex={0}>
//               <div className="card-media" aria-hidden>
//                 {/* <img src={ex.img} alt={ex.title} loading="lazy" /> */}
//                  <ImageCarousel images={ex.images} height={160} />
//                 <div className="badge">
//                   <span>{ex.duration}</span>
//                 </div>
//                 <div className="date-tag">
//                   {new Date(ex.date).toLocaleDateString("en-IN", {
//                     day: "2-digit",
//                     month: "short",
//                     year: "numeric",
//                   })}
//                 </div>
//               </div>

//               <div className="card-body">
//                 <div className="rating-row">
//                   <Stars value={ex.rating} />
//                   <span className="rating-count">
//                     {ex.ratingCount.toLocaleString()} Ratings
//                   </span>
//                 </div>

//                 <h3 className="card-title">{ex.title}</h3>

//                 <div className="price-row">
//                   <div className="price-old">₹ {ex.originalPrice.toFixed(2)}</div>
//                   <div className="price-new">
//                     ₹ {ex.price.toFixed(2)}{" "}
//                     <span className="muted">per adult</span>
//                   </div>
//                 </div>

//                 <div className="card-cta">
//                   <button className="btn book">Book Now</button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// ExperiencesSection.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import ImageCarousel from "./ImageCarousel";
import "./experiencesSection.scss";

// import sampleData from '../../../data/eventData'

import { sampleData } from "../../../data/eventData"; // ✅ correct import
import EventDetails from "./EventDetails";
import EventInfoCards1 from "./EventInfoCards1";
import EventInfoCards from "./EventInfoCards";
import ExpoRegistration from "../Registration/ExpoRegistration";


/* IMPORTANT: make sure these imports exist and paths are correct in your project */
// import img0 from "../../../assets/images/img.jpeg";
// import img1 from "../../../assets/images/img1.jpeg";
// import img2 from "../../../assets/images/img2.jpeg";
// import img3 from "../../../assets/images/img3.jpeg";
// import img4 from "../../../assets/images/img4.jpeg";

/* Sample data using 'img' arrays (you can rename to images if preferred) */
// const sampleData = [
//   {
//     id: 1,
//     title: "Play Arena Combo Activity Package at Bangalore",
//     img: [img0, img1, img2, img3, img4],
//     duration: "8H",
//     rating: 4,
//     ratingCount: 4637,
//     originalPrice: 3334.0,
//     price: 2500.0,
//     date: "2025-12-16",
//   },
//   {
//     id: 2,
//     title: "Play Arena Combo Activity Package at Bangalore (Feb)",
//     img: [img0, img1, img2],
//     duration: "8H",
//     rating: 4,
//     ratingCount: 4637,
//     originalPrice: 3334.0,
//     price: 2500.0,
//     date: "2026-02-16",
//   },
//   {
//     id: 3,
//     title: "Wine Tour in Bangalore",
//     img: [img1, img2, img3],
//     duration: "4H",
//     rating: 4,
//     ratingCount: 4635,
//     originalPrice: 1674.4,
//     price: 1199.0,
//     date: "2025-11-10",
//   },
//   {
//     id: 4,
//     title: "Param Science Centre Tickets, Bangalore",
//     img: [img2, img3, img4],
//     duration: "2H",
//     rating: 4,
//     ratingCount: 29,
//     originalPrice: 299.0,
//     price: 235.0,
//     date: "2025-12-05",
//   },
// ];

function Stars({ value = 0, max = 5 }) {
  const full = Math.floor(value);
  const items = Array.from({ length: max }, (_, i) => i < full);
  return (
    <span className="stars" aria-hidden>
      {items.map((isFull, idx) => (
        <svg
          key={idx}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={isFull ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`star ${isFull ? "star--full" : "star--empty"}`}
        >
          <path d="M12 17.3L6.16 20l1.12-6.54L2 9.6l6.63-.96L12 3l3.37 5.64L22 9.6l-5.28 3.86L17.84 20z" />
        </svg>
      ))}
    </span>
  );
}

export default function ExperiencesSection({ experiences = sampleData }) {
  const [selectedMonth, setSelectedMonth] = useState("all");

  // derive months automatically
  const months = useMemo(() => {
    const set = new Set();
    experiences.forEach((ex) => {
      const d = new Date(ex.date);
      const key = `${d.getFullYear()}-${d.getMonth()}`; // '2025-11'
      set.add(key);
    });
    return Array.from(set)
      .map((k) => {
        const [y, m] = k.split("-");
        const name = new Date(y, m).toLocaleString("en-US", { month: "long", year: "numeric" });
        return { key: k, name };
      })
      .sort((a, b) => new Date(a.name) - new Date(b.name));
  }, [experiences]);

  // sorted + filtered by month
  const filtered = useMemo(() => {
    const sorted = [...experiences].sort((a, b) => new Date(a.date) - new Date(b.date));
    if (selectedMonth === "all") return sorted;
    const [y, m] = selectedMonth.split("-");
    return sorted.filter(
      (ex) => new Date(ex.date).getFullYear() === parseInt(y, 10) && new Date(ex.date).getMonth() === parseInt(m, 10)
    );
  }, [experiences, selectedMonth]);

  return (
    <section className="experiences" aria-labelledby="experiences-title">
      <div className="experiences-inner">
        <div className="experiences-head">
          <div className="title-box">
            <h2 id="experiences-title">Upcoming Bangalore Experiences</h2>
            <a href="/explore" className="explore-link">Explore All ({experiences.length})</a>
          </div>

          <div className="filter-box">
            <label htmlFor="month" className="filter-label">Filter by month:</label>
            <select id="month" className="filter-select" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="all">All</option>
              {months.map((m) => <option key={m.key} value={m.key}>{m.name}</option>)}
            </select>
          </div>
        </div>

        <div className="cards" role="list">
          {filtered.map((ex) => (
            <article className="card" key={ex.id} role="listitem" tabIndex={0}>
              <div className="card-media" aria-hidden>
                {/* Use autoplay + delay here (ms). change delay as needed */}
                <ImageCarousel images={ex.img} height={180} autoplay autoplayDelay={3500} />
                {/* <div className="badge"><span>{ex.duration}</span></div> */}
                <div className="date-tag">
                  {new Date(ex.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                </div>
              </div>

              <div className="card-body">
                <div className="rating-row">
                  <Stars value={ex.rating} />
                  <span className="rating-count">{ex.ratingCount.toLocaleString()} Ratings</span>
                </div>

                <h3 className="card-title">{ex.title}</h3>

                {/* <div className="price-row">
                  <div className="price-old">₹ {ex.originalPrice.toFixed(2)}</div>
                  <div className="price-new">₹ {ex.price.toFixed(2)} <span className="muted">per adult</span></div>
                </div> */}

                {/* <div className="card-cta">
                  <button className="btn book">Book Now</button>
                </div> */}
                {/* <div className="card-cta">
  <Link to={`/event/${ex.id}`} className="btn book">
    Book Now
  </Link>
</div> */}

<div className="card-cta">
  <Link
    to={`/event/${ex.id}`}
    className="btn book"
    state={{ event: ex }} // 🔥 this passes the event object to the next page
  >
    Book Now
  </Link>
</div>


{/* <Link to={`/event/${ex.id}`} state={{ event: ex }} className="btn book">Book Now</Link> */}


              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
