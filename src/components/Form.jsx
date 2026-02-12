import React, { useState, useEffect } from "react";

function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    // Show modal on component mount
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappMessage = `*New Inquiry from RA Constructor Website*
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918374897487?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div id="popupModal" className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>×</span>

        <h2>Get in Touch</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn cancel-btn" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

