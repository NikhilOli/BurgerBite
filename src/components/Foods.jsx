import React, { useEffect } from 'react';
import FoodItem from './FoodItem';
import { foodData } from '../foodData';

const Foods = () => {

    return (
        <div>
            <div className="container mx-auto mt-8 mb-5">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Special Burgers and Pizzas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto" style={{ maxWidth: '1200px' }}>
                    {foodData.map(burger => (
                        <FoodItem key={burger.id} {...burger} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Foods;
