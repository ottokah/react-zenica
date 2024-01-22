import React from 'react';
import './googleform.css';

const GoogleForm = () => {
  // Replace the src attribute with the link from your Google Form embed code
  const formSrc = "https://docs.google.com/forms/d/e/1FAIpQLSeJQQmFQOty2vZNFfFPfi6aJnCHInnUM25S4ieyqJMGgCeMzA/viewform?embedded=true";
  const formWidth = "640"; // Set the width as desired
  const formHeight = "520"; // Set the height as desired

  return (
    <div className="google-form-container">
      <iframe src={formSrc} width={formWidth} height={formHeight} frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </div>
  );
};

export default GoogleForm;
