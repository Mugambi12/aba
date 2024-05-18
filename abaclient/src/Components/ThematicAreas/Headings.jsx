import "./Headings.css";

const Headings = ({ BgImg, title, focus }) => {
  return (
    <>
      <div className="thematic-areas-headings">
        <div className="thematic-area-headings-title">{title}</div>
        <div className="thematic-areas-headings-container">
          <div className="thematic-areas-overlay"></div>
          <img src={BgImg} alt={title} className="thematic-areas-bg-img" />
          <div className="thematic-areas-subtitle">{focus}</div>
        </div>
      </div>
    </>
  );
};

export default Headings;
