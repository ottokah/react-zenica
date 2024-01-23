import React, { useState, useEffect } from 'react';
import styles from './Huuyou.css';

const Huuyou = () => {
  const imageSrc = '/images/huuhkaja.jpg'; 
  const words = ['HUU', 'ARE', 'YOU.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showFullPhrase, setShowFullPhrase] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (showFullPhrase) {
        // After showing full phrase, restart the cycle
        setShowFullPhrase(false);
        setCurrentWordIndex(0);
      } else if (currentWordIndex < words.length - 1) {
        // Show next word
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        // Last word was shown, now show the full phrase
        setShowFullPhrase(true);
      }
    }, 1000); // Change word every second, show full phrase for 4 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentWordIndex, showFullPhrase]);

  return (
    <div className="hero-container">
      <img src={imageSrc} alt="Descriptive text for the image" className="hero-image" />
      <div className="textOverlay">
        {!showFullPhrase && <span className="word">{words[currentWordIndex]}</span>}
        {showFullPhrase && <div className="fullPhrase">HUU ARE YOU.</div>}
      </div>
    </div>
  );
};

export default Huuyou;
