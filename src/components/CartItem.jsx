import React from 'react'
import {useSelector} from 'react-redux'


const CartItem = ({ title, description, price, image }) =>{ 
  const cartItems = useSelector((state) => state.foodCart);
  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);
  return(
  <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col items-center">
    <img className="w-[250px] h-56 rounded-lg" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <div className='flex justify-between items-center mt-4'>
        <p className="text-gray-900 text-lg mt-2">{price}</p>
        <p className="text-gray-900 text-lg mt-2">{totalQuantity}</p>
      <button className='bg-primary-color text-sm text-black px-6 py-3 rounded-full hover:bg-hover-color hover:text-white transition duration-300'>Order Now</button>
      </div>
    </div>
  </div>
)
};

export default CartItem