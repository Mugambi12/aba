import "./NewsRoomData.css";

const NewsRoomData = ({ img }) => {
  return (
    <div className="blog-post">
      <img className="blog-post-img" src={img} alt="Blog post image" />
      <div className="blog-post-info">
        <div className="blog-post-categories">
          <span className="blog-post-category">
            <a className="link" href="">
              Music
            </a>
          </span>
          <span className="blog-post-category">
            <a className="link" href="">
              Life
            </a>
          </span>
        </div>
        <span className="blog-post-title">
          <a href="" className="link">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </a>
        </span>
        <hr />
        <span className="blog-post-date">1 hour ago</span>
      </div>
      <p className="blog-post-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default NewsRoomData;
