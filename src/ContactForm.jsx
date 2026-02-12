import React, { useState } from "react";
import roomImg from "./assets/Portfolio/room.jpeg";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    whatsapp: true,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.city) {
      setError("Please fill all required fields");
      return;
    }

    setLoading(true);

    // Construct WhatsApp message
    const message = `Hello! I would like to get a free quote.
    
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*City:* ${form.city}
*WhatsApp Updates:* ${form.whatsapp ? "Yes" : "No"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918374897487?text=${encodedMessage}`;

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      setForm({ name: "", email: "", phone: "", city: "", whatsapp: true });
      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  return (
    <>
      {/* SCROLL OFFSET ANCHOR (FIXED HEADER SUPPORT) */}
      <div id="contact" style={{ position: "relative", top: "-90px" }}></div>

      <section className="contact-section">
        <div className="contact-container-full">
          <div className="contact-visual">
            <img src={roomImg} alt="Interior Design" />
          </div>

          <div className="form-wrapper">
            <h2 className="form-title">Designs for Every Budget</h2>
            <p className="form-subtitle">
              Get your dream home today. Let our experts help you
            </p>

            <form onSubmit={handleSubmit} className="premium-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <div className="phone-input-group">
                <div className="country-selector">
                  <img src="https://flagcdn.com/w20/in.png" alt="IN" />
                  <span>▾</span>
                </div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="whatsapp-toggle">
                <input
                  type="checkbox"
                  name="whatsapp"
                  id="whatsapp"
                  checked={form.whatsapp}
                  onChange={handleChange}
                />
                <label htmlFor="whatsapp">Send me updates on WhatsApp</label>
              </div>

              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select City</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
              </select>

              {error && <p className="form-error">{error}</p>}

              <button className="submit-btn" disabled={loading}>
                {loading ? <span className="spinner"></span> : "GET FREE QUOTE"}
              </button>

              <p className="policy-text">
                By submitting this form, you agree to the <a href="#">privacy policy</a> & <a href="#">terms and conditions</a>
              </p>

              {success && (
                <div className="form-success">
                  ✔ Message Sent Successfully
                </div>
              )}
            </form>
          </div>
        </div>

        <style>{`
          .contact-section {
            padding: 60px 0;
            background: #ffffff;
            display: flex;
            justify-content: center;
          }

          .contact-container-full {
            display: flex;
            max-width: 1100px;
            width: 95%;
            min-height: 600px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          }

          .contact-visual {
            flex: 1.2;
            overflow: hidden;
          }

          .contact-visual img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .form-wrapper {
            flex: 1;
            background: #4a3b4a; /* Dark purple/mauve theme */
            padding: 50px 40px;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .form-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 12px;
            text-align: center;
          }

          .form-subtitle {
            font-size: 16px;
            color: #d1d5db;
            margin-bottom: 30px;
            text-align: center;
            line-height: 1.4;
          }

          .premium-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .premium-form input,
          .premium-form select {
            width: 100%;
            padding: 14px 16px;
            border-radius: 8px;
            border: none;
            font-size: 15px;
            background: #fff;
            color: #333;
          }

          .phone-input-group {
            display: flex;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
          }

          .country-selector {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 0 12px;
            border-right: 1px solid #ddd;
            background: #f8fafc;
            color: #333;
            cursor: pointer;
          }

          .country-selector img {
            width: 20px;
            height: auto;
          }

          .whatsapp-toggle {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: #fff;
          }

          .whatsapp-toggle input {
            width: auto;
            accent-color: #ef4444;
          }

          .submit-btn {
            width: 100%;
            padding: 16px;
            background: #ef5a5a; /* Coral red */
            color: #fff;
            border: none;
            border-radius: 30px;
            font-weight: 700;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px;
            transition: background 0.3s;
          }

          .submit-btn:hover {
            background: #e14d4d;
          }

          .policy-text {
            font-size: 12px;
            color: #ccc;
            margin-top: 15px;
            text-align: left;
            line-height: 1.5;
          }

          .policy-text a {
            color: #ef5a5a;
            text-decoration: none;
          }

          .form-error {
            color: #ff8080;
            font-size: 14px;
            margin: 0;
          }

          .form-success {
            margin-top: 12px;
            color: #bbf7d0;
            font-weight: 600;
            text-align: center;
          }

          .spinner {
            width: 18px;
            height: 18px;
            border: 3px solid #fff;
            border-top: 3px solid transparent;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            display: inline-block;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          @media (max-width: 900px) {
            .contact-container-full {
              flex-direction: column;
              max-width: 500px;
            }
            .contact-visual {
              height: 300px;
            }
          }
        `}</style>
      </section>
    </>
  );
}

