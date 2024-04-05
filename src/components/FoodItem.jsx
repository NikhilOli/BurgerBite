import React from 'react'
import pizzaImage from '../assets/pizza.png';
export const burgers = [
  {
    id: 1,
    title: 'Classic Cheeseburger',
    description: 'Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles.',
    price: '$9.99',
    image: 'https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg', // Replace with actual image path
  },
  {
    id: 2,
    title: 'Bacon BBQ Burger',
    description: 'Delicious burger topped with crispy bacon, tangy BBQ sauce, and cheddar cheese.',
    price: '$10.99',
    image: 'https://t3.ftcdn.net/jpg/02/44/61/14/360_F_244611436_4WKrV3YAOBo0LKe9S7hoXv55aDmgwvwr.jpg', // Replace with actual image path
  },
  {
    id: 3,
    title: 'Chicken Cheese Burger',
    description: 'Delicious burger topped with crispy bacon, tangy BBQ sauce, and cheddar cheese.',
    price: '$9.99',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/023/010/420/small/the-delicious-burger-in-the-black-background-with-ai-generated-free-photo.jpg'
  },
  {
    id: 4,
    title: 'Chicken Cheese Pizza',
    description: 'Delicious pizza topped with crispy bacon, tangy BBQ sauce, and cheddar cheese.',
    price: '$11.99',
    image: pizzaImage
  },

];

const FoodItem = ({ title, description, price, image }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col items-center">
    <img className="w-[250px] h-56 rounded-lg" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <div className='flex justify-between items-center mt-4'>
        <p className="text-gray-900 text-lg mt-2">{price}</p>
      <button className='bg-primary-color text-sm text-black px-6 py-3 rounded-full hover:bg-hover-color hover:text-white transition duration-300'>Order Now</button>
      </div>
    </div>
  </div>
);

export default FoodItem
export const HomeFoodItem = ({ title, description, price, image }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col items-center">
    <img className="w-[250px] h-56 rounded-lg" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <p className="text-gray-900 text-lg mt-2">{price}</p>
    </div>
  </div>
);
