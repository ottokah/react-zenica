import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

 
  // Function to handle when the Kuuntele button is clicked
  const handleKuunteleClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=cFpTJSRcDBw'; 
  };

  return (
    <div className='hero-container'>
      <img src='/images/huuhkajatie.jpg' alt='Huuhkajatie' />
      <div className='hero-btns'>
        

       
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={handleKuunteleClick} // Set the onClick handler
        >
          Kuuntele <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
