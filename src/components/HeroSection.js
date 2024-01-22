import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const handleKuunteleClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=cFpTJSRcDBw'; 
  };

  return (
    <div className='hero-container'>
      <video className="hero-video" src='/images/video-1.mp4' autoPlay loop muted />
      
      <img 
        className="hero-mobile-image" 
        src="/images/huuhkajatie.jpg" // replace with your mobile image path
        alt="Mobile Display" 
      />
      
    </div>
  );
}

export default HeroSection;
