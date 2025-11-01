import React, { useState } from 'react';
// ExpoRegistration.jsx
// Default-exported React component. Tailwind CSS classes used for styling.
// This frontend expects a backend with two endpoints:
// 1) POST /api/create-checkout-session  -> accepts { role, data } and returns { url }
//    (the backend should create a Stripe Checkout Session and return session.url)
// 2) POST /api/webhook (optional) -> Stripe webhook to fulfill orders after payment
// Below the component you'll find a Node/Express example (commented) that shows how to
// implement /api/create-checkout-session using the official Stripe library.

export default function ExpoRegistration() {
  const [role, setRole] = useState('visitor');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    stallSize: '3x3',
    quantity: 1,
  });
  const prices = {
    visitor: 100, // INR or your currency unit
    exhibitor: 5000,
    '3x3': 5000,
    '6x3': 9000,
  };

  const computedPrice = () => {
    if (role === 'visitor') return prices.visitor * form.quantity;
    // exhibitor price can depend on stall size and quantity
    const base = prices[form.stallSize] || prices.exhibitor;
    return base * form.quantity;
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        role,
        data: { ...form, price: computedPrice() },
      };

      // Create a Checkout Session on your backend. Backend returns { url }
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to create checkout session');
      const json = await res.json();
      if (json.url) {
        // Redirect to Stripe Checkout
        window.location.href = json.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      console.error(err);
      alert('Payment initialization failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Expo Registration</h1>

      <div className="mb-6 flex gap-2">
        <button
          className={`px-4 py-2 rounded ${role === 'visitor' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setRole('visitor')}
        >
          Visitor Pass
        </button>
        <button
          className={`px-4 py-2 rounded ${role === 'exhibitor' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setRole('exhibitor')}
        >
          Exhibitor Entry
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 rounded shadow">
        <div>
          <label className="block text-sm font-medium">Full name</label>
          <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input required name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Organisation / Company</label>
          <input name="organisation" value={form.organisation} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
        </div>

        {role === 'exhibitor' && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Stall size</label>
              <select name="stallSize" value={form.stallSize} onChange={handleChange} className="mt-1 w-full p-2 border rounded">
                <option value="3x3">3 x 3</option>
                <option value="6x3">6 x 3</option>
                <option value="custom">Custom (contact)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Quantity (stalls / tickets)</label>
              <input name="quantity" type="number" min={1} value={form.quantity} onChange={handleChange} className="mt-1 w-32 p-2 border rounded" />
            </div>

            <div className="text-sm text-gray-600">Note: For custom sizes contact the organiser at organiser@example.com</div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <div className="text-sm text-gray-500">Total amount</div>
            <div className="text-lg font-semibold">₹{computedPrice()}</div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 rounded bg-green-600 text-white disabled:opacity-60"
          >
            {loading ? 'Please wait...' : `Pay & Confirm`}
          </button>
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        This demo uses a server-driven Stripe Checkout flow. The frontend only collects basic info
        and asks your backend to create a Checkout Session (securely using your Stripe secret key).
      </div>
    </div>
  );
}

/* --- Example backend (Node/Express) ---

// Install: npm install express stripe body-parser
// Create a file server.js and run with node server.js

const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // set your secret key in env

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { role, data } = req.body;
    // Determine price and line items server-side (do not trust client price)
    let amount = 10000; // amount in smallest currency unit e.g. paise for INR
    if (role === 'visitor') {
      amount = 100 * 100; // 100.00
    } else {
      // determine based on stall size
      if (data.stallSize === '3x3') amount = 5000 * 100;
      else if (data.stallSize === '6x3') amount = 9000 * 100;
      else amount = 10000 * 100; // fallback
      amount = amount * (data.quantity || 1);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: role === 'visitor' ? 'Visitor Pass' : 'Exhibitor Stall',
              description: `Registration for ${data.name} (${data.email})`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://your-site.com/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://your-site.com/cancel',
      metadata: {
        role,
        organiserData: JSON.stringify(data),
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));

// Notes:
// - Use Stripe webhooks to mark registrations confirmed after a successful payment.
// - Validate and sanitize incoming data.
// - Use HTTPS in production and store secrets in environment variables.
*/
