import React from 'react';
// Import the Element component from react-scroll to create scrollable elements
import { Element } from 'react-scroll';
import Info from "../Info";
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Cards from "../Cards";
import Form from "../Form";
import '../Home.css';


function Home() {
  return (
    <>
      {}
      {}
      <Element name="homeA">
        <HeroSection />
      </Element>
      
      <Element name="infoA">
        <Info />
      </Element>

      

      {/* Footer doesn't typically need to be a scrollable section since it's at the bottom */}
      <Footer />
    </>
  );
}

export default Home;
