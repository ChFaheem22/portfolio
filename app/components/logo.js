import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className="portfolio-logo">
      <div className="social-icons">
        <a href="https://github.com/ChFaheem22" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/faheem-95772830b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.instagram.com/___faheem._?igsh=MXZyOHQ2NXc3MHJ3cw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Logo;
