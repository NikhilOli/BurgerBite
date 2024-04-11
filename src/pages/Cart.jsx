import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
// import { remove } from '../store/cartSlice';


const Cart = () => {
    const cartItems = useSelector((state) => state.foodCart);
    return (
        <div>
            <div className="container mx-auto mt-8 mb-5">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Special Burgers and Pizzas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto" style={{ maxWidth: '1200px' }}>
                    {cartItems ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto" style={{ maxWidth: '1200px' }}>
                            {cartItems.map(burger => (
                                <CartItem key={burger.id} {...burger} />
                            ))}
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart