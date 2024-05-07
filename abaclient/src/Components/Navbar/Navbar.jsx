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
          <a href="">Our Story</a>
        </li>
        <li>
          <a href="">Programs</a>
        </li>
        <li>
          <a href="">Thematic Areas</a>
        </li>
        <li>
          <a href="">Media & Resources</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li className="nav-contact">
          <a href="">Join Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
