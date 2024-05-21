import "./NewsArticle.css";

const NewsArticle = ({ title, date, categories, content }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-info">
        <div className="blog-post-categories">
          {categories.map((category, index) => (
            <span key={index} className="blog-post-category">
              <a className="link" href="#!">
                {category}
              </a>
            </span>
          ))}
        </div>
        <span className="blog-post-title">
          <a href="#!" className="link">
            {title}
          </a>
        </span>
        <hr />
        <span className="blog-post-date">{date}</span>
      </div>
      <div className="blog-post-content">
        {content.map((item, index) => {
          if (item.type === "subtitle") {
            return (
              <p key={index} className="blog-post-subtitle">
                {item.value}
              </p>
            );
          } else if (item.type === "text") {
            return (
              <p key={index} className="blog-post-text">
                {item.value}
              </p>
            );
          } else if (item.type === "image") {
            return (
              <>
                <img
                  key={index}
                  className="blog-post-intext-img"
                  src={item.value}
                  alt={item.caption}
                />
                <p className="image-caption">{item.caption}</p>
              </>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default NewsArticle;
