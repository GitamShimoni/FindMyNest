import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact-list">
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              123 Main Street, Nestvile
            </li>
            <li>
              <FaPhone className="footer-icon" />
              +1 123-456-7890
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              info@findmynest.com
            </li>
          </ul>
        </div>
        <div className="footer-section-middle">
            <img id='nest-footer-icon' src="https://cdn-icons-png.flaticon.com/512/427/427594.png" alt="Nest Logo" />
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/findmynest" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="footer-icon" />
            </a>
            <a href="https://www.twitter.com/findmynest" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/findmynest" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-credit">
        <p>&copy; {new Date().getFullYear()} FindMyNest. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer