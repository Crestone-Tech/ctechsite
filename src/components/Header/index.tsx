import Nav from "../Nav";
import mainLogo from "../../assets/images/mainLogo.jpg";
import logoStroked from "../../assets/images/logoStroked.png";
import "../Nav/nav.css";
import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img
            src={mainLogo}
            alt="Crestone Technology logo"
            className="main-logo"
          />
          <a href="/" className="home-icon">
            <img src={logoStroked} alt="Crestone Technology icon" />
          </a>
          <div className="navbar-overlay">
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
}
