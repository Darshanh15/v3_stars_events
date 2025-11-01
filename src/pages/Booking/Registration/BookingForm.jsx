import React, { useMemo, useState } from "react";
import "./BookingForm.scss";

/**
 * BookingForm
 * Props (all optional; INR defaults):
 *  - currency: "₹"
 *  - pricing: {
 *      visitor: 199,
 *      exhibitor: {
 *        "3x3": 8000,
 *        "6x3": 14000,
 *        customContact: true // shows "Contact us" instead of a price
 *      }
 *    }
 *  - onSubmit: (payload) => void
 */
export default function BookingForm({
  currency = "₹",
  pricing = {
    visitor: 199,
    exhibitor: { "3x3": 8000, "6x3": 14000, customContact: true },
  },
  onSubmit,
}) {
  const [mode, setMode] = useState("visitor"); // 'visitor' | 'exhibitor'

  // shared fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");

  // exhibitor-only
  const [stallSize, setStallSize] = useState("3x3"); // 3x3 | 6x3 | custom
  const [quantity, setQuantity] = useState(1);

  // visitor-only
  const [tickets, setTickets] = useState(1);

  const stallPrices = pricing.exhibitor || {};
  const isCustom = stallSize === "custom";

  const linePrice = useMemo(() => {
    if (mode === "visitor") {
      return (pricing.visitor || 0) * (Number(tickets) || 0);
    } else {
      if (stallSize === "3x3") return (stallPrices["3x3"] || 0) * (Number(quantity) || 0);
      if (stallSize === "6x3") return (stallPrices["6x3"] || 0) * (Number(quantity) || 0);
      // custom: price is negotiated / contact
      return 0;
    }
  }, [mode, tickets, stallSize, quantity, pricing, stallPrices]);

  const total = linePrice; // extend here if you add taxes/fees/discounts

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill name, email and phone.");
      return;
    }
    if (mode === "exhibitor" && !org.trim()) {
      alert("Please enter Organisation / Company for Exhibitor Entry.");
      return;
    }
    // build payload
    const payload = {
      mode,
      contact: { fullName, email, phone, organisation: org },
      items:
        mode === "visitor"
          ? [{ type: "Visitor Pass", unitPrice: pricing.visitor || 0, qty: Number(tickets) || 0 }]
          : [
              {
                type: "Exhibitor Entry",
                stallSize: isCustom ? "Custom" : stallSize,
                unitPrice:
                  stallSize === "3x3"
                    ? stallPrices["3x3"] || 0
                    : stallSize === "6x3"
                    ? stallPrices["6x3"] || 0
                    : 0,
                qty: Number(quantity) || 0,
              },
            ],
      total,
      currency,
      meta: { customPricing: mode === "exhibitor" && isCustom },
    };

    if (onSubmit) onSubmit(payload);
    else {
      // placeholder: connect your gateway here (Razorpay/Stripe)
      console.log("Booking payload:", payload);
      alert("Booking ready. Check console for payload.");
    }
  };

  return (
    <form className="booking-form card" onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="toggle">
          <button
            type="button"
            className={`toggle-btn ${mode === "visitor" ? "active" : ""}`}
            onClick={() => setMode("visitor")}
            aria-pressed={mode === "visitor"}
          >
            Visitor Pass
          </button>
          <button
            type="button"
            className={`toggle-btn ${mode === "exhibitor" ? "active" : ""}`}
            onClick={() => setMode("exhibitor")}
            aria-pressed={mode === "exhibitor"}
          >
            Exhibitor Entry
          </button>
        </div>
      </div>

      {/* Contact fields (shared) */}
      <div className="grid two">
        <label className="field">
          <span>Full name</span>
          <input
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="grid two">
        <label className="field">
          <span>Phone</span>
          <input
            type="tel"
            placeholder="+91 9XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span>Organisation / Company</span>
          <input
            type="text"
            placeholder="Company / Institution"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            required={mode === "exhibitor"}
          />
        </label>
      </div>

      {/* Mode-specific controls */}
      {mode === "visitor" ? (
        <div className="panel card-lite">
          <div className="row">
            <div className="label">Ticket price</div>
            <div className="value">
              {currency} {(pricing.visitor || 0).toLocaleString("en-IN")}
            </div>
          </div>

          <div className="row">
            <label className="field qty">
              <span>Quantity (tickets)</span>
              <input
                type="number"
                min="1"
                value={tickets}
                onChange={(e) => setTickets(Math.max(1, Number(e.target.value)))}
              />
            </label>
          </div>
        </div>
      ) : (
        <div className="panel card-lite">
          <div className="row">
            <span className="label">Stall size</span>
            <div className="sizes">
              <label className={`chip ${stallSize === "3x3" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="stall"
                  value="3x3"
                  checked={stallSize === "3x3"}
                  onChange={() => setStallSize("3x3")}
                />
                3 × 3
                <em>
                  {currency} {(stallPrices["3x3"] || 0).toLocaleString("en-IN")}
                </em>
              </label>

              <label className={`chip ${stallSize === "6x3" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="stall"
                  value="6x3"
                  checked={stallSize === "6x3"}
                  onChange={() => setStallSize("6x3")}
                />
                6 × 3
                <em>
                  {currency} {(stallPrices["6x3"] || 0).toLocaleString("en-IN")}
                </em>
              </label>

              <label className={`chip ${stallSize === "custom" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="stall"
                  value="custom"
                  checked={stallSize === "custom"}
                  onChange={() => setStallSize("custom")}
                />
                Custom
                <em>{pricing.exhibitor?.customContact ? "Contact" : "—"}</em>
              </label>
            </div>
          </div>

          <div className="row">
            <label className="field qty">
              <span>Quantity (stalls / tickets)</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                disabled={isCustom}
              />
            </label>
          </div>

          {isCustom && (
            <p className="note">
              Custom stall sizes are priced on request. Submit the form and we’ll contact you.
            </p>
          )}
        </div>
      )}

      {/* Summary */}
      <div className="summary card-lite">
        <div className="sum-row">
          <span>Subtotal</span>
          <strong>
            {currency} {total.toLocaleString("en-IN")}
          </strong>
        </div>

        {/* Example tax (uncomment if needed)
        <div className="sum-row">
          <span>GST (18%)</span>
          <strong>{currency} {(total * 0.18).toLocaleString("en-IN")}</strong>
        </div>
        <div className="sum-row total">
          <span>Total amount</span>
          <strong>{currency} {(total * 1.18).toLocaleString("en-IN")}</strong>
        </div>
        */}

        <div className="sum-row total">
          <span>Total amount</span>
          <strong>
            {currency} {total.toLocaleString("en-IN")}
          </strong>
        </div>
      </div>

      <div className="actions">
        <button type="submit" className="btn primary" disabled={mode === "exhibitor" && isCustom && pricing.exhibitor?.customContact}>
          {mode === "visitor" ? "Proceed to Payment" : isCustom ? "Request Quote" : "Proceed to Payment"}
        </button>
        <button type="button" className="btn ghost" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Cancel
        </button>
      </div>
    </form>
  );
}
