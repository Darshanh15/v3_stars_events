import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import './Organizing.scss'

export default function Organizing() {
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

//   const title = event.title || event.name || "Untitled Event";
//   const tagline = event.tagline || "";
//   const shortNote = event.shortNote || "";
//   const overview = event.overview || "";
//   const heroImages = Array.isArray(event.img) ? event.img : (Array.isArray(event.heroImages) ? event.heroImages : []);
//   const date = event.date || null;
//   const duration = event.duration || (event.meta && event.meta.duration) || "—";

  const why = event.whyOrganizing?.points ?? (event.why ?? []);
  const whyHeading = event.whyOrganizing?.heading ?? "Why We're Organizing";

//   const exhibitors = event.benefitsForExhibitors?.items ?? (event.benefitsExhibitors ?? []);
//   const exhibitorsHeading = event.benefitsForExhibitors?.heading ?? "Benefits for Exhibitors";

//   const visitors = event.benefitsForVisitors?.items ?? (event.benefitsVisitors ?? []);
//   const visitorsHeading = event.benefitsForVisitors?.heading ?? "Benefits for Visitors";

//   const logistics = event.logistics ?? {};
//   const ctas = event.ctas ?? {};
  return (
    <>
    {/* <div>Organizing</div> */}
    
{/* Two-column: Why + Logistics (left), Benefits (right) */}
        <div className="grid two-col col-sm">
          <div className="left-col col-sm">
            {/* Why Organizing */}
            {Array.isArray(why) && why.length > 0 && (
              <section className="event-section why card">
                <h2 className="section-title">{whyHeading}</h2>
                <div className="grid-cards">
                  {why.map((p, i) => (
                    <article className="why-card" key={i}>
                      <div className="why-index">{i + 1}</div>
                      <div className="why-body">
                        <h4>{p.title || p.key || `Point ${i + 1}`}</h4>
                        <p>{p.desc || p.details || ""}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
            </div>
        </div>
    
    </>
  )
}
