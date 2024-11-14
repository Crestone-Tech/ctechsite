import Nav from "../Nav";
import mainLogo from "../../assets/images/mainLogo.jpg";
import logoStroked from "../../assets/images/logoStroked.png";
import "../Nav/nav.css";
import "./header.css";

interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  teamRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function Header({
  aboutRef,
  teamRef,
  projectsRef,
  contactRef,
}: HeaderProps) {
  return (
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
          {/* Pass the refs to Nav component */}
          <Nav
            aboutRef={aboutRef}
            teamRef={teamRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
        </div>
      </div>
    </header>
  );
}
