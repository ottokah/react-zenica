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
              text='Zenica'
           
              path='/services'
            />
            <CardItem
              src='images/huuhkajataidalla.jpg'
              text='huu'
      
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/maskilogomusta.png'
              text='huu'
             
              path='/services'
            />
            <CardItem
              src='images/HUUAREYOU6.png'
              text='huu'
             
              path='/products'
            />
            <CardItem
              src='images/huuareyou.png'
              text='huu'
              
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
