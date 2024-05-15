import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-card">
        <div className="contact-info-body">
          <h5 className="address-title">Melbourne Office</h5>
          <p className="address">
            121 King Street,
            <br />
            Melbourne 1200,
            <br />
            Australia
          </p>
        </div>
      </div>

      <div className="contact-info-card">
        <div className="contact-info-body">
          <h5 className="address-title">Sydney Office</h5>
          <p className="address">
            62 Collins Street West,
            <br />
            Sydney 3000,
            <br />
            Australia
          </p>
        </div>
      </div>

      <div className="contact-info-card">
        <div className="contact-info-body">
          <h5 className="social-icons-title">Socials</h5>
          <div className="social-icons">
            <a className="social-icon" href="#!">
              <span className="fab fa-linkedin-in"></span>
            </a>
            <a className="social-icon" href="#!">
              <span className="fab fa-facebook-f"></span>
            </a>
            <a className="social-icon" href="#!">
              <span className="fab fa-twitter"></span>
            </a>
            <a className="social-icon" href="#!">
              <span className="fab fa-instagram"></span>
            </a>
            <a className="social-icon" href="#!">
              <span className="fab fa-youtube"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
