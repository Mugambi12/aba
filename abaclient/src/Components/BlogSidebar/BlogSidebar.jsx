import "./BlogSidebar.css";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar-item">
        <span className="blog-sidebar-title">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/19822373/pexels-photo-19822373/free-photo-of-a-heron-among-leaves.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="blog-sidebar-item">
        <span className="blog-sidebar-title">CATEGORIES</span>
        <ul className="blog-sidebar-list">
          <li className="blog-sidebar-list-item">Life</li>
          <li className="blog-sidebar-list-item">Music</li>
          <li className="blog-sidebar-list-item">Sport</li>
          <li className="blog-sidebar-list-item">Style</li>
          <li className="blog-sidebar-list-item">Tech</li>
          <li className="blog-sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="blog-sidebar-item">
        <span className="blog-sidebar-title">FOLLOW US</span>
        <div className="blog-sidebar-social">
          <img
            src="https://w7.pngwing.com/pngs/175/452/png-transparent-facebook-logo-facebook-icon-logo-facebook-icon-blue-text-rectangle-thumbnail.png"
            alt="facebook logo"
            className="blog-sidebar-icon"
          />
          <img
            src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png"
            alt="Instagram logo"
            className="blog-sidebar-icon"
          />
          <img
            src="https://w7.pngwing.com/pngs/708/311/png-transparent-icon-logo-twitter-logo-twitter-logo-blue-social-media-area-thumbnail.png"
            alt="Twitter logo"
            className="blog-sidebar-icon"
          />
          <img
            src="https://w7.pngwing.com/pngs/936/468/png-transparent-youtube-logo-youtube-logo-computer-icons-subscribe-angle-rectangle-airplane-thumbnail.png"
            alt="YouTube logo"
            className="blog-sidebar-icon"
          />
          <img
            src="https://w7.pngwing.com/pngs/293/896/png-transparent-whats-app-logo-whatsapp-facebook-instant-messaging-icon-whatsapp-logo-text-logo-grass-thumbnail.png"
            alt="whatsapp logo"
            className="blog-sidebar-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
