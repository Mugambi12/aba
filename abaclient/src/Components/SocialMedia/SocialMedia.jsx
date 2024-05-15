import "./SocialMedia.css";
import video1 from "../../assets/video/video1.mp4";

const SocialMedia = () => {
  const blogs = [
    {
      title: "Blog Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac lorem ultricies venenatis. Sed id nunc ut ligula lacinia lacinia.",
    },
    {
      title: "Blog Title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac lorem ultricies venenatis. Sed id nunc ut ligula lacinia lacinia.",
    },
    {
      title: "Blog Title 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac lorem ultricies venenatis. Sed id nunc ut ligula lacinia lacinia.",
    },
  ];

  return (
    <>
      <div className="media-container">
        <div className="blog-section">
          <h1 className="blog-header">Latest News</h1>

          <div className="latest-blog">
            <div className="blog-post">
              <h2 className="blog-title">Blog Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ea asperiores ab quia aperiam...
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div className="older-blogs">
            <h2 className="blog-title">Previous Blogs</h2>
            <div className="blog-list">
              {blogs.map((blog, index) => (
                <article key={index} className="blog-post">
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                  <a href="">Read More</a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="social-media-section">
          <div className="youtube-section">
            <h1 className="social-media-header">YouTube Feeds</h1>
            <p>Watch our latest videos</p>
            <div className="youtube-video">
              <video src={video1} autoPlay loop muted />
            </div>
          </div>

          <div className="twitter-section">
            <h1 className="social-media-header">Twitter Feeds</h1>
            <p>Latest Tweets by ABA</p>
            <div className="tweets">
              <a
                className="twitter-timeline"
                data-width="300"
                data-height="400"
                data-theme="light"
                data-chrome="noheader nofooter"
                href="https://twitter.com/ABA?ref_src=twsrc%5Etfw"
              ></a>
              <video src={video1}></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
