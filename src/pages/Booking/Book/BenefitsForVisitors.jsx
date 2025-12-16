import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./benefitsForVisitors.scss";

export default function BenefitsForVisitors() {
  const location = useLocation();
  const navigate = useNavigate();

  // Always define hooks before any early returns
  const event = location.state?.event;
  const [openIndex, setOpenIndex] = useState(null);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Redirect if no event (side-effect goes in useEffect, not inline)
  useEffect(() => {
    if (!event) {
      navigate("/", { replace: true });
    }
  }, [event, navigate]);

  if (!event) return null; // render guard AFTER hooks

  const visitors = event.benefitsForVisitors?.items ?? [];
  const visitorsHeading =
    event.benefitsForVisitors?.heading ?? "Benefits for Visitors";

  return (
    <section className="bfv">
      <div className="bfv__wrap">
        <h2 className="bfv__title">{visitorsHeading}</h2>

        <div className="bfv__list" role="list">
          {visitors.map((b, i) => {
            const isOpen = openIndex === i;
            const id = `bfv-item-${i}`;
            return (
              <article key={i} className={`bfv__item ${isOpen ? "is-open" : ""}`} role="listitem">
                <button
                  className="bfv__header"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="bfv__index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="bfv__key">{b.key}</span>
                  <span className="bfv__icon" aria-hidden>
                    <span className="plus"></span>
                  </span>
                </button>

                <div
                  id={`${id}-panel`}
                  className="bfv__panel"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className="bfv__details">{b.details}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
