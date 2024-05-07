import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.png";
import mail_icon from "../../assets/images/mail-icon.png";
import phone_icon from "../../assets/images/phone-icon.png";
import location_icon from "../../assets/images/location-icon.png";
import white_arrow from "../../assets/images/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fbcd06a9-a868-424d-853c-5244080c8887");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          Feel free to reach out to us with any questions or concerns you may
          have. We are here to help. Your feedback, comments, suggestions, and
          inquiries are important to us. We will respond to your message as soon
          as possible.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@aba.dev
          </li>
          <li>
            <img src={phone_icon} alt="" /> 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" /> 77 8th Ave, New York, NY 10011
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
            <img src={white_arrow} alt="white arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
