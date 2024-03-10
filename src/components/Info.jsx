import React from 'react';
import "./Info.css"; // Ensure this CSS file also includes styles for the new placeholders

const Info = () => {
  return (
    <div className="info-container">
    

     
      <div className="instagram-placeholder">
        <div className="profile-top">
          <div className="profile-picture"></div>
      
          <div className="username-placeholder"></div>
        </div>
        <div className="posts-grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="post-placeholder"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;

