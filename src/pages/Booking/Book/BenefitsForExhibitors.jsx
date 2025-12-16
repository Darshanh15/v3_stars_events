import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./benefitsForExhibitors.scss";

export default function BenefitsForExhibitors() {
  const location = useLocation();
  const navigate = useNavigate();

  // always declare hooks first
  const event = location.state?.event;
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!event) navigate("/", { replace: true });
  }, [event, navigate]);

  if (!event) return null;

  const exhibitors = event.benefitsForExhibitors?.items ?? [];
  const exhibitorsHeading =
    event.benefitsForExhibitors?.heading ?? "Benefits for Exhibitors";

  return (
    <section className="bfe">
      <div className="bfe__wrap">
        <h2 className="bfe__title">{exhibitorsHeading}</h2>

        <div className="bfe__list" role="list">
          {exhibitors.map((b, i) => {
            const isOpen = openIndex === i;
            const id = `bfe-item-${i}`;
            return (
              <article
                key={i}
                className={`bfe__item ${isOpen ? "is-open" : ""}`}
                role="listitem"
              >
                <button
                  className="bfe__header"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="bfe__index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="bfe__key">{b.key}</span>
                  <span className="bfe__icon" aria-hidden>
                    <span className="plus"></span>
                  </span>
                </button>

                <div
                  id={`${id}-panel`}
                  className="bfe__panel"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className="bfe__details">{b.details}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
