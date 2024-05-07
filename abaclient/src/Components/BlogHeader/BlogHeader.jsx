import React from "react";
import "./BlogHeader.css";

const BlogHeader = () => {
  return (
    <div className="blog-header">
      <div className="blog-header-titles">
        <span className="blog-header-subtitle">Recent Posts</span>
        <span className="blog-header-title">BLOG</span>
      </div>
      <img
        className="blog-header-image"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
};

export default BlogHeader;
