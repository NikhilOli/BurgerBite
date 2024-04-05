import React from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className="bg-bg-color py-4">
            <div className="container mx-auto flex justify-between items-center px-10">
                <div className="flex items-center">
                    <span className="text-primary-color text-2xl font-bold">BurgerBite</span>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-secondary-color hover:text-hover-color transition duration-300">Home</Link>
                    <Link to="foods" className="text-secondary-color hover:text-hover-color transition duration-300">Foods</Link>
                    <Link to="cart" className="text-secondary-color inline-flex items-center hover:text-hover-color transition duration-300"><span>Cart</span> <span className='relative mr-6'><CiShoppingCart size={30} /> <span className='text-xs bg-hover-color px-2 py-1 rounded-full text-white absolute -top-2 -right-3'>2</span> </span></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
