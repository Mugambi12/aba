import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">ABA</div>
      <ul className="nav-menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li className="nav-contact">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
