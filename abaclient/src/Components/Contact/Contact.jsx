import React, { useState } from "react";
import "./Contact.css";
import msgIcon from "../../assets/images/msg-icon.png";
import mailIcon from "../../assets/images/mail-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import locationIcon from "../../assets/images/location-icon.png";
import whiteArrow from "../../assets/images/white-arrow.png";

const Contact = () => {
  // State to track form submission result
  const [result, setResult] = useState("");

  // Form submission handler
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

    // Handle response and provide feedback to the user
    if (data.success) {
      setResult("Form submitted successfully.");
      event.target.reset();
    } else {
      console.log("Error:", data);
      setResult(`Error: ${data.message}`);
    }
  };

  return (
    <div className="contact-section">
      {/* Contact information */}
      <div className="contact-info">
        <h3>
          Send Us a Message
          <img src={msgIcon} alt="Message icon" className="icon" />
        </h3>
        <p>
          Feel free to reach out to us with any questions or concerns you may
          have. We are here to help and will respond to your message as soon as
          possible.
        </p>
        <ul className="contact-details">
          <li>
            <img src={mailIcon} alt="Mail icon" />
            <span>Contact@aba.dev</span>
          </li>
          <li>
            <img src={phoneIcon} alt="Phone icon" />
            <span>123-456-7890</span>
          </li>
          <li>
            <img src={locationIcon} alt="Location icon" />
            <span>77 8th Ave, New York, NY 10011</span>
          </li>
        </ul>
      </div>

      {/* Contact form */}
      <div className="contact-form">
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
            <img src={whiteArrow} alt="Arrow icon" className="icon" />
          </button>
        </form>
        <span className="form-result">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
