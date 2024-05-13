import "./Sidebar.css";

const Sidebar = () => {
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
          <i className="fab fa-linkedin-in blog-sidebar-icon"></i>
          <i className="fab fa-facebook-f blog-sidebar-icon"></i>
          <i className="fab fa-twitter blog-sidebar-icon"></i>
          <i className="fab fa-instagram blog-sidebar-icon"></i>
          <i className="fab fa-youtube blog-sidebar-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
