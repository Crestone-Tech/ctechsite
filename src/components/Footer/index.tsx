import "./footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src="/logoStroked.png" />
        </div>
        {/* TODO: add link to repo to Icon */}
        <div>
          <p>Designed & Built by Crestone Technology <GitHubIcon /> </p>
          <p>Copyright 2024</p>
        </div>
      </footer>
    </>
  );
}
