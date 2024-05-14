import { Link } from "react-router-dom";
import "./InlineContact.css";

const InlineContact = () => {
  return (
    <>
      <div className="inline-contact">
        <h3>
          If you have any inquiries, please feel free to contact us. We are
          available 24/7.
        </h3>

        <Link to="/contact-us" className="contact-us">
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default InlineContact;
