import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="cart" className="text-secondary-color hover:text-hover-color transition duration-300">Cart</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
