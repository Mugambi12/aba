import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "fbcd06a9-a868-424d-853c-5244080c8887");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully.");
      event.target.reset();
    } else {
      console.log("Error:", data);
      setResult(`Error: ${data.message}`);
    }
  };

  const googleMapsEmbedURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.7326080184637!2d28.033935314534276!3d-26.2041022042959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9509e47c5f9d8f%3A0x2b0c1ea59a7f9b3!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1620978666128!5m2!1sen!2sus";

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h3>
          Send Us a Message
          <i className="fas fa-envelope icon"></i>
        </h3>
        <p>
          Have any questions or concerns? Feel free to reach out! We're here to
          assist you and will get back to you promptly.
        </p>
        <div className="map-container">
          <iframe
            title="Google Maps"
            src={googleMapsEmbedURL}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-form">
        <h3>
          Write to us
          <i className="fas fa-pencil-alt icon"></i>
        </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Send Message
            <i className="fas fa-paper-plane icon"></i>
          </button>
        </form>
        <span className="form-result">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
