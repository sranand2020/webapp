import { Link } from "react-router-dom";
import logo from "../assets/nature-logo.jpg";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src={logo}
        alt="Logo"
        width={48}
        height={48}
        className="rounded-circle"
      />
    </Link>
  );
};

export default Logo;
