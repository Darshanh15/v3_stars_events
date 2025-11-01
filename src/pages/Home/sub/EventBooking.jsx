// import React, { useState, useEffect } from "react";
// import "./eventBooking.scss";

// /**
//  * EventBooking component
//  * - No external libs required
//  * - Replace sample events/images with your assets as needed
//  */

// const SAMPLE_EVENTS = [
//   {
//     id: "e1",
//     title: "Sunset Photography Workshop",
//     date: "2025-11-08",
//     duration: "2h",
//     price: 999,
//     spots: 12,
//     tag: "Workshop",
//     desc: "Hands-on outdoor class, basics of lighting & composition. Bring camera."
//   },
//   {
//     id: "e2",
//     title: "Gourmet Cooking: Pasta Night",
//     date: "2025-11-12",
//     duration: "3h",
//     price: 1299,
//     spots: 8,
//     tag: "Food",
//     desc: "Learn classic and modern pasta techniques. Ingredients included."
//   },
//   {
//     id: "e3",
//     title: "Intro to UX Design",
//     date: "2025-11-18",
//     duration: "4h",
//     price: 1499,
//     spots: 20,
//     tag: "Class",
//     desc: "Interactive session: prototyping, heuristics & user testing basics."
//   }
// ];

// function formatINR(n) {
//   return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
// }

// export default function EventBooking() {
//   const [events] = useState(SAMPLE_EVENTS);
//   const [selectedEvent, setSelectedEvent] = useState(events[0]);
//   const [selectedDate, setSelectedDate] = useState(selectedEvent.date);
//   const [slots, setSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [attendees, setAttendees] = useState(1);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [bookings, setBookings] = useState([]);

//   // load saved bookings from localStorage
//   useEffect(() => {
//     const raw = localStorage.getItem("ev_bookings");
//     if (raw) setBookings(JSON.parse(raw));
//   }, []);

//   useEffect(() => {
//     // generate sample time slots for selected date
//     const baseSlots = ["10:00 AM", "12:30 PM", "03:00 PM", "05:30 PM", "07:30 PM"];
//     // mark first available based on attendees or spots
//     setSlots(baseSlots.map((t, idx) => ({ time: t, id: `${selectedDate}-${idx}`, available: true })));
//     setSelectedSlot(null);
//   }, [selectedDate, selectedEvent]);

//   const pickEvent = (ev) => {
//     setSelectedEvent(ev);
//     setSelectedDate(ev.date);
//     setSelectedSlot(null);
//     setAttendees(1);
//   };

//   const handleBook = () => {
//     // simple validation
//     if (!selectedSlot) return alert("Please select a time slot.");
//     if (!name.trim()) return alert("Please enter your name.");
//     if (!phone.trim()) return alert("Please enter phone number.");
//     // Create booking
//     const booking = {
//       id: `bk-${Date.now()}`,
//       eventId: selectedEvent.id,
//       eventTitle: selectedEvent.title,
//       date: selectedDate,
//       slot: selectedSlot.time,
//       attendees,
//       name,
//       phone,
//       email,
//       pricePerPerson: selectedEvent.price,
//       total: selectedEvent.price * attendees,
//       createdAt: new Date().toISOString()
//     };
//     const next = [booking, ...bookings];
//     setBookings(next);
//     localStorage.setItem("ev_bookings", JSON.stringify(next));
//     setModalOpen(true);
//   };

//   const closeModal = () => setModalOpen(false);

//   return (
//     <section className="ev-wrap">
//       <div className="ev-container">
//         {/* Left: Event cards */}
//         <aside className="ev-list" aria-label="Events list">
//           <h3>Upcoming Events</h3>
//           <div className="cards">
//             {events.map((ev) => (
//               <article
//                 key={ev.id}
//                 className={`ev-card ${selectedEvent.id === ev.id ? "active" : ""}`}
//                 onClick={() => pickEvent(ev)}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => e.key === "Enter" && pickEvent(ev)}
//               >
//                 <div className="thumb">
//                   {/* simple SVG placeholder */}
//                   <svg viewBox="0 0 120 80" role="img" aria-hidden>
//                     <rect width="120" height="80" rx="10" fill="#eef6ff" />
//                     <text x="60" y="45" textAnchor="middle" fontSize="12" fill="#0b5bff">{ev.tag}</text>
//                   </svg>
//                 </div>
//                 <div className="meta">
//                   <h4>{ev.title}</h4>
//                   <p className="desc">{ev.desc}</p>
//                   <div className="meta-row">
//                     <span className="chip">{ev.duration}</span>
//                     <span className="price">{formatINR(ev.price)}</span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </aside>

//         {/* Right: Booking panel */}
//         <div className="ev-book">
//           <div className="book-card">
//             <div className="book-head">
//               <h2>{selectedEvent.title}</h2>
//               <div className="tagline">{selectedEvent.tag} • {selectedEvent.spots} spots</div>
//             </div>

//             <div className="book-grid">
//               <label>
//                 Select Date
//                 <input
//                   type="date"
//                   value={selectedDate}
//                   min={new Date().toISOString().slice(0,10)}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                 />
//               </label>

//               <div>
//                 <label>Available Time Slots</label>
//                 <div className="slots">
//                   {slots.map((s) => (
//                     <button
//                       key={s.id}
//                       className={`slot ${selectedSlot && selectedSlot.id === s.id ? "selected" : ""}`}
//                       onClick={() => setSelectedSlot(s)}
//                     >
//                       {s.time}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <label>
//                 Attendees
//                 <input type="number" min="1" max="10" value={attendees} onChange={(e) => setAttendees(Number(e.target.value))} />
//               </label>

//               <div className="contact">
//                 <label>
//                   Your name
//                   <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
//                 </label>
//                 <label>
//                   Phone
//                   <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98..." />
//                 </label>
//                 <label>
//                   Email (optional)
//                   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
//                 </label>
//               </div>
//             </div>

//             <div className="book-footer">
//               <div className="summary">
//                 <div><strong>{selectedSlot ? selectedSlot.time : "No slot"}</strong> • {selectedDate}</div>
//                 <div>Price: {formatINR(selectedEvent.price)} × {attendees} = <strong>{formatINR(selectedEvent.price * attendees)}</strong></div>
//               </div>
//               <div className="actions">
//                 <button className="btn btn-outline" onClick={() => {
//                   // reset
//                   setSelectedSlot(null); setAttendees(1); setName(""); setPhone(""); setEmail("");
//                 }}>Reset</button>
//                 <button className="btn btn-primary" onClick={handleBook}>Confirm Booking</button>
//               </div>
//             </div>
//           </div>

//           {/* Bookings history (small) */}
//           <div className="history">
//             <h4>Your bookings</h4>
//             {bookings.length === 0 ? <p className="muted">No bookings yet.</p> : (
//               <ul>
//                 {bookings.map(b => (
//                   <li key={b.id}>
//                     <div><strong>{b.eventTitle}</strong></div>
//                     <div className="small">{b.date} • {b.slot} • {b.attendees} pax</div>
//                     <div className="small">{formatINR(b.total)}</div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* confirmation modal */}
//       {modalOpen && (
//         <div className="ev-modal" role="dialog" aria-modal="true">
//           <div className="ev-modal-inner">
//             <h3>Booking confirmed 🎉</h3>
//             <p>Your booking for <strong>{selectedEvent.title}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedSlot.time}</strong> has been saved.</p>
//             <p className="muted">We will contact you at <strong>{phone}</strong> if we need to confirm details.</p>
//             <div className="modal-actions">
//               <button className="btn btn-outline" onClick={() => { closeModal(); }}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



import React, { useState, useEffect } from "react";
import "./eventBooking.scss";

const SAMPLE_EVENTS = [
  { id: "e1", title: "Sunset Photography Workshop", date: "2025-11-08", duration: "2h", price: 999, spots: 12, tag: "Workshop", desc: "Hands-on outdoor class, basics of lighting & composition. Bring camera." },
  { id: "e2", title: "Gourmet Cooking: Pasta Night", date: "2025-11-12", duration: "3h", price: 1299, spots: 8, tag: "Food", desc: "Learn classic and modern pasta techniques. Ingredients included." },
  { id: "e3", title: "Intro to UX Design", date: "2025-11-18", duration: "4h", price: 1499, spots: 20, tag: "Class", desc: "Interactive session: prototyping, heuristics & user testing basics." },
];

function formatINR(n) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

export default function EventBooking() {
  const [events] = useState(SAMPLE_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [selectedDate, setSelectedDate] = useState(events[0].date);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [attendees, setAttendees] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  // Edit mode state
  const [editing, setEditing] = useState(null); // booking id or null

  useEffect(() => {
    const raw = localStorage.getItem("ev_bookings");
    if (raw) setBookings(JSON.parse(raw));
  }, []);

  useEffect(() => {
    const baseSlots = ["10:00 AM", "12:30 PM", "03:00 PM", "05:30 PM", "07:30 PM"];
    setSlots(baseSlots.map((t, idx) => ({ time: t, id: `${selectedDate}-${idx}`, available: true })));
    setSelectedSlot(null);
  }, [selectedDate, selectedEvent]);

  const pickEvent = (ev) => {
    setSelectedEvent(ev);
    setSelectedDate(ev.date);
    setSelectedSlot(null);
    setAttendees(1);
    // clear form
    setName(""); setPhone(""); setEmail("");
  };

  const openEdit = (booking) => {
    // load booking into form and set editing id
    setEditing(booking.id);
    setSelectedEvent(events.find(e => e.id === booking.eventId) || events[0]);
    setSelectedDate(booking.date);
    setSelectedSlot({ time: booking.slot, id: `${booking.date}-0` });
    setAttendees(booking.attendees);
    setName(booking.name);
    setPhone(booking.phone);
    setEmail(booking.email || "");
    setModalOpen(true);
  };

  const deleteBooking = (id) => {
    if (!window.confirm("Delete this booking?")) return;
    const next = bookings.filter(b => b.id !== id);
    setBookings(next);
    localStorage.setItem("ev_bookings", JSON.stringify(next));
  };

  const handleBook = () => {
    if (!selectedSlot) return alert("Please select a time slot.");
    if (!name.trim()) return alert("Please enter your name.");
    if (!phone.trim()) return alert("Please enter phone number.");

    if (editing) {
      // update existing booking
      const next = bookings.map(b => {
        if (b.id !== editing) return b;
        return {
          ...b,
          eventId: selectedEvent.id,
          eventTitle: selectedEvent.title,
          date: selectedDate,
          slot: selectedSlot.time,
          attendees,
          name,
          phone,
          email,
          total: selectedEvent.price * attendees,
          updatedAt: new Date().toISOString()
        };
      });
      setBookings(next);
      localStorage.setItem("ev_bookings", JSON.stringify(next));
      setModalOpen(true);
      setEditing(null);
      return;
    }

    const booking = {
      id: `bk-${Date.now()}`,
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.title,
      date: selectedDate,
      slot: selectedSlot.time,
      attendees,
      name,
      phone,
      email,
      pricePerPerson: selectedEvent.price,
      total: selectedEvent.price * attendees,
      createdAt: new Date().toISOString()
    };
    const next = [booking, ...bookings];
    setBookings(next);
    localStorage.setItem("ev_bookings", JSON.stringify(next));
    setModalOpen(true);
    // clear form for next booking
    setSelectedSlot(null); setAttendees(1); setName(""); setPhone(""); setEmail("");
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
  };

  return (
    <section className="ev-wrap">
      <div className="ev-container">
        <aside className="ev-list" aria-label="Events list">
          <h3>Upcoming Events</h3>
          <div className="cards">
            {events.map((ev) => (
              <article key={ev.id} className={`ev-card ${selectedEvent.id === ev.id ? "active" : ""}`} onClick={() => pickEvent(ev)} role="button">
                <div className="thumb"><span>{ev.tag}</span></div>
                <div className="meta">
                  <h4>{ev.title}</h4>
                  <p className="desc">{ev.desc}</p>
                  <div className="meta-row">
                    <span className="chip">{ev.duration}</span>
                    <span className="price">{formatINR(ev.price)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>

        <div className="ev-book">
          <div className="book-card">
            <div className="book-head">
              <h2>{selectedEvent.title}</h2>
              <div className="tagline">{selectedEvent.tag} • {selectedEvent.spots} spots</div>
            </div>

            <div className="book-grid">
              <label>
                Select Date
                <input type="date" value={selectedDate} min={new Date().toISOString().slice(0,10)} onChange={(e) => setSelectedDate(e.target.value)} />
              </label>

              <div>
                <label>Available Time Slots</label>
                <div className="slots">
                  {slots.map((s) => (
                    <button key={s.id} className={`slot ${selectedSlot && selectedSlot.id === s.id ? "selected" : ""}`} onClick={() => setSelectedSlot(s)}>{s.time}</button>
                  ))}
                </div>
              </div>

              <label>
                Attendees
                <input type="number" min="1" max="10" value={attendees} onChange={(e) => setAttendees(Number(e.target.value))} />
              </label>

              <div className="contact">
                <label>
                  Your name
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
                </label>
                <label>
                  Phone
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98..." />
                </label>
                <label>
                  Email (optional)
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </label>
              </div>
            </div>

            <div className="book-footer">
              <div className="summary">
                <div><strong>{selectedSlot ? selectedSlot.time : "No slot"}</strong> • {selectedDate}</div>
                <div>Price: {formatINR(selectedEvent.price)} × {attendees} = <strong>{formatINR(selectedEvent.price * attendees)}</strong></div>
              </div>
              <div className="actions">
                <button className="btn btn-outline" onClick={() => { setSelectedSlot(null); setAttendees(1); setName(""); setPhone(""); setEmail(""); }}>Reset</button>
                <button className="btn btn-primary" onClick={handleBook}>{editing ? "Save changes" : "Confirm Booking"}</button>
              </div>
            </div>
          </div>

          <div className="history">
            <h4>Your bookings</h4>
            {bookings.length === 0 ? <p className="muted">No bookings yet.</p> : (
              <ul>
                {bookings.map(b => (
                  <li key={b.id}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <div>
                        <strong>{b.eventTitle}</strong>
                        <div className="small">{b.date} • {b.slot} • {b.attendees} pax</div>
                      </div>
                      <div className="booking-actions">
                        <button className="small-btn" onClick={() => openEdit(b)}>Edit</button>
                        <button className="small-btn danger" onClick={() => deleteBooking(b.id)}>Delete</button>
                      </div>
                    </div>
                    <div className="small">{formatINR(b.total)}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* modal for confirmation or editing */}
      {modalOpen && (
        <div className="ev-modal" role="dialog" aria-modal="true">
          <div className="ev-modal-inner">
            <h3>{editing ? "Booking updated ✅" : "Booking confirmed 🎉"}</h3>
            <p>
              {editing ? "Your booking changes were saved." : `Your booking for ${selectedEvent.title} on ${selectedDate} at ${selectedSlot?.time} has been saved.`}
            </p>
            <div className="modal-actions">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
