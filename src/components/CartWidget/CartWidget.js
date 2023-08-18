import React, { useContext } from 'react'
import CartIcon from '../CartWidget/assets/CartIcon'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <div className="flex justify-center">
       <CartIcon/>{cantidadEnCarrito()}
  </div>
  )
}

export default CartWidget