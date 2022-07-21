import './CartWidget.css'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';


const CartWidget = () => {
  return (
    <div className='divCart'>
        {/* <img className='CartWidget' src='images/shopping-cart.svg' alt='cartWidget'/> */}
        <AiOutlineShoppingCart className='CartWidget' />
        10
    </div>
  )
}

export default CartWidget