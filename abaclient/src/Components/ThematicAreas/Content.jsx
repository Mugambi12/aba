import "./Content.css";

const Content = ({ activities }) => {
  return (
    <>
      <div className="thematic-areas-content-container">
        <div className="thematic-areas-content-content">{activities}</div>
      </div>
    </>
  );
};

export default Content;
