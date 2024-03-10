import React, { useState } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll'; // Import the Link component from react-scroll

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ScrollLink to='homeA' className='navbar-logo' onClick={closeMobileMenu} smooth={true} duration={500}>
            <img src="/images/maskilogomusta.png" alt="HUU ARE YOU" />
          </ScrollLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
            <li className='nav-item'>
              <ScrollLink to='formA' className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500}>
                HUU ARE YOU.
              </ScrollLink>
            </li>
            {/* Add additional nav-items here */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
