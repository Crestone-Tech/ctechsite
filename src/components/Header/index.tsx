import Nav from "../Nav";
import "./header.css";
export default function Header() {
  return (
    <header>
      <div>
        <a href="#">
          <img src="/home_icon.jpg" alt="Crestone Technology icon" />
        </a>
      </div>
      <Nav />
    </header>
  );
}
