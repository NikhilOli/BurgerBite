import React, { useState, useEffect } from 'react';
import { HomeFoodItem } from '../components/FoodItem';
import { burgers } from '../components/FoodItem';

const Home = () => {

  return (
    <>
      <div className='bg-hero-bg bg-cover bg-center h-[300px] bg-hover-color mt-6 flex items-center justify-center'>
        <div className='text-center text-secondary-color'>
          <h1 className='text-5xl font-bold mb-4'>Welcome to BurgerBite</h1>
          <p className='text-lg mb-8'>Serving the most delicious burgers in town</p>
          <button className='bg-primary-color text-black px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300'>Order Now</button>
        </div>
      </div>
      <div className="container mx-auto mt-8 mb-5">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Special Burgers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto" style={{ maxWidth: '1200px' }}>
          {burgers.map(burger => (
            <HomeFoodItem key={burger.id} {...burger} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
