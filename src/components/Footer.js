import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

   
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              
            <img src="/images/maskilogomusta.png" alt="HUU ARE YOU" />
            </Link>
          </div>
          <small class='website-rights'>Zenican veteraanit RY © 2024</small>
          <small class='website-rights'>HUU ARE YOU.</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/zenicanveteraanit/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/@ZenicanVeteraanit'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/ZenicanV'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;