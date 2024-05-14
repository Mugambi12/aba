import React from "react";
import "./CEOMessage.css";
import signature from "../../assets/images/signature.png";

const CEOMessage = () => {
  const ceoProfileImageUrl =
    "https://images.pexels.com/photos/12192379/pexels-photo-12192379.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <section className="our-story">
      <div className="message-container">
        <img className="ceo-image" src={ceoProfileImageUrl} alt="CEO" />
        <div className="ceo-message">
          <h5 className="title">Message From CEO</h5>
          <p className="message">
            ABA, a biodiversity alliance based in Africa, collaborates with
            clients to solve the most challenging problems they face in their
            businesses and the world. We achieve this by harnessing the
            diversity of our people and their perspectives.
          </p>

          <img className="signature" src={signature} alt="CEO Signature" />
          <h5 className="ceo-name">Renal Scott</h5>
          <h6 className="ceo-subname">SA Office</h6>
        </div>
      </div>

      <div className="company-overview">
        <div className="overview">
          <h3 className="title">Company Overview</h3>
          <hr className="underline-short" />
        </div>

        <div className="overview-details">
          <h5 className="overview-details-title">Earning the Right</h5>
          <p className="overview-summery">
            As a biodiversity alliance based in Africa, ABA assists companies,
            foundations, and individuals in making a meaningful impact. Our
            approach addresses core issues by breaking down barriers,
            recognizing that complex challenges such as economic security, human
            rights, or climate sustainability require multifaceted solutions. We
            tailor a unique blend of advocacy, collaboration, investment,
            philanthropy, policy development, and innovative business practices
            to facilitate progress.
          </p>
          <blockquote className="blockquote">
            <h5 className="blockquote-text">
              But how do we achieve this? We believe in earning the right,
              walking the talk, and playing the game &hellip;
            </h5>
          </blockquote>
          <p className="overview-summery column-lg-2">
            ABA is dedicated to empowering individuals with creative ideas. Our
            platform enables millions — from local artists and entrepreneurs to
            global business leaders — to share their stories and establish a
            compelling online presence. The Cambridge office is home to our Risk
            Management Practice, where we ensure the safe operation of complex
            critical systems, foster safety leadership, manage risk in
            high-hazard industries, and provide comprehensive risk assessments.
            Our expertise spans various sectors, including upstream and
            downstream oil and gas, rail and road transportation, construction,
            and gas utilities and distribution. With offices in Cambridge, UK,
            and Milan, Italy, we operate globally across Europe, the Middle
            East, Asia, Africa, and South America.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
