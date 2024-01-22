import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>HUU ARE YOU</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
             <CardItem
              src='images/huuareyou.png'
              text='HUU ARE YOU.'
           
              path='./products'
            />
            <CardItem
              src='images/huuhkajataidalla.jpg'
              text='HUU ARE WE.'
      
              path='/services'
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
} 

export default Cards; 
