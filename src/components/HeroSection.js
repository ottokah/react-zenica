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
      <img className="hero-video" src='/images/huuhkajataidalla.jpg'  />
      
      <img 
        className="hero-mobile-image" 
        src="/images/huuhkajatie.jpg" // replace with your mobile image path
        alt="Mobile Display" 
      />
      
    </div>
  );
}

export default HeroSection;
