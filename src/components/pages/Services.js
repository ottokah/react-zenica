import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Services.css';

export default function Services() {
  return (
    <div className="services-container">
      <h1 className='services'>Our Services</h1>
      <p className='services-description'>
        Testi
      </p>
      
      <div className='service-list'>
        <div className='service-item'>
          <h2>ERGREGERGERAGREGAREGERGA</h2>
          <p>REGAERGAERAGREGERAG</p>
        </div>
        <div className='service-item'>
          <h2>RGEAAREGAERGERGA</h2>
          <p>DERGAAERGAERGAERG.</p>
        </div>
        <div className='service-item'>
          <h2>SERGGREGERGREGERG</h2>
          <p>RTHRHTRHRTHRTH</p>
        </div>
        {/* Add more services as needed */}
      </div>
      
      <Footer />
    </div>
  );
}
