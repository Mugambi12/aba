import "./Headings.css";

const Headings = ({ backgroundImage, title, focus }) => {
  return (
    <>
      <div className="thematic-areas-headings">
        <div className="thematic-area-headings-title">{title}</div>
        <div className="thematic-areas-headings-container">
          <div className="thematic-areas-overlay"></div>
          <img
            src={backgroundImage}
            alt={title}
            className="thematic-areas-bg-img"
          />
          <div className="thematic-areas-subtitle">{focus}</div>
        </div>
      </div>
    </>
  );
};

export default Headings;
