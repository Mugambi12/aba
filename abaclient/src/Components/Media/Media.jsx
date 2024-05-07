import React from "react";
import "./Media.css";
import video1 from "../../assets/video1.mp4";

const Media = () => {
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
    <div>
      <div className="media-container">
        <div className="blog-section">
          <h1 className="blog-header">Latest News</h1>

          <div className="latest-blog">
            <div className="blog-post">
              <h2>Blog Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ea asperiores ab quia aperiam...
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="older-blogs">
            <h2 className="blog-header">Previous Blogs</h2>
            <div className="blog-list">
              {blogs.map((blog, index) => (
                <article key={index} className="blog-post">
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                  <a href="#" className="read-more">
                    Read More
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="social-media-section">
          <div className="youtube-section">
            <h1 className="social-media-header">YouTube Feeds</h1>
            <div className="youtube-video">
              <video src={video1} autoPlay loop muted />
            </div>
          </div>

          <div className="twitter-section">
            <h1 className="social-media-header">Twitter Feeds</h1>
            <a
              className="twitter-timeline"
              data-width="300"
              data-height="400"
              data-theme="light"
              data-chrome="noheader nofooter"
              href="https://twitter.com/ABA?ref_src=twsrc%5Etfw"
            >
              Latest 5 Tweets by ABA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
