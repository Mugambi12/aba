import React from "react";
import "./BlogSinglePost.css";

const BlogSinglePost = () => {
  return (
    <div className="blog-single-post">
      <div className="blog-single-post-wrapper">
        <img
          className="blog-single-post-img"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Single post image"
        />
        <h1 className="blog-single-post-title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          similique perferendis ducimus consequatur corrupti nesciunt.
          <div className="blog-single-post-edit">
            <i className="blog-single-post-icon far fa-edit"></i>
            <i className="blog-single-post-icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="blog-single-post-info">
          <span>
            Author:
            <b className="blog-single-post-author">
              <a className="link" href="#">
                Safak
              </a>
            </b>
          </span>
          <span className="blog-single-post-date">
            <span>Published</span> 1 day ago
          </span>
        </div>
        <p className="blog-single-post-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          magni nostrum sit ratione rerum nesciunt blanditiis ipsum
          reprehenderit suscipit aut quod animi dolore earum, est consequuntur
          nobis maxime, aliquam exercitationem eum fugiat provident. Ipsam
          accusamus, magnam autem provident, at placeat labore sequi debitis
          quisquam earum est, ut ad atque quasi molestiae voluptatem ab
          veritatis soluta? Ut ipsam deserunt suscipit nobis tempora aperiam et
          expedita hic veritatis voluptas, repellendus a sequi ipsum officiis
          maxime! Accusamus assumenda perspiciatis, iste dolor quam repudiandae
          velit saepe omnis debitis, animi nisi at blanditiis harum non officiis
          incidunt quas tempore eos unde? Facilis a ut, amet officia aliquid
          voluptatum similique, eligendi cumque quia corrupti repudiandae aut
          sed reprehenderit? Laboriosam omnis quia, aut obcaecati repellendus
          beatae exercitationem officiis natus quos sapiente laborum corporis?
          Molestias quo optio, animi accusantium consequuntur saepe incidunt
          inventore quae reprehenderit libero fuga voluptatem molestiae veniam
          sint sed, pariatur adipisci a atque. Maxime numquam illo modi, facilis
          doloremque neque. Amet recusandae molestiae magnam eaque tempora
          dignissimos pariatur nam quidem sint dolore ad reprehenderit, id ipsam
          inventore unde qui similique deleniti aliquam nostrum. Eum tempore
          necessitatibus accusantium perspiciatis exercitationem vel odio
          asperiores omnis sint dicta. Ipsam tempore id aliquam temporibus sequi
          minus, dolorum facilis libero.
        </p>
      </div>
    </div>
  );
};

export default BlogSinglePost;
