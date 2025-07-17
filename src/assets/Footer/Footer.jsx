// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './Footer.css'; // Import external CSS

export default function Footer() {
  return (
    <footer className="footer" id='contact'>
      <h2 className="footer-title">Let’s Connect</h2>
      <div className="footer-icons">
        <a
          href="https://github.com/AswinKrishnan2125/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aswin-krishnan-r-91845126a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/aswin_krishnan_26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="footer-note">
        © {new Date().getFullYear()} Aswin Krishnan R 
      </p>
    </footer>
  );
}
