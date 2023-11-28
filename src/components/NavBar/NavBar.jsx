import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar-top">
      <nav className="navbar-contain">
        <Link to="/" className="navbar-button">Home</Link>
        <Link to="/new-player-form" className="navbar-button">New Player</Link>
      </nav>
    </div>
  );
}
