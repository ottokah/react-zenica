import React from 'react';
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="social-icons">
        <a
          className="social-icon-link instagram"
          href="https://www.instagram.com/zenicanveteraanit/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          className="social-icon-link youtube"
          href="https://www.youtube.com/@ZenicanVeteraanit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
        >
          <i className="fab fa-youtube" />
        </a>
        <a
          className="social-icon-link twitter"
          href="https://twitter.com/ZenicanV"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter" />
        </a>
      </div>
    </div>
  );
};

export default Info;
