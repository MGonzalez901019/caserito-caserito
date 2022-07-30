import './CartWidget.css'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';


const CartWidget = () => {

  const cantItems = 0;
  return (
    <div className='divCart'>
        {/* <img className='CartWidget' src='images/shopping-cart.svg' alt='cartWidget'/> */}
        <AiOutlineShoppingCart className='CartWidget' />
        {cantItems}
    </div>
  )
}

export default CartWidget