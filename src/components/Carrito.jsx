import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = ()=>{
        vaciarCarrito();
    }
  return (
    <div>
        <h1>Carrito</h1>

    {
        carrito.map((prod)=>(
            <div key={prod.id}>
                 <h2>{prod.name}</h2>
                 <p>Precio unidad: ${prod.price}</p>
                 <p>Precio total: ${prod.price * prod.cantidad}</p>
                 <p>Cant: {prod.cantidad}</p>

            </div>
           
        ))
    }

    { 
    carrito.length > 0 ?
    <>
        <h2>Precio total: ${precioTotal()}</h2>
        <button onClick={handleVaciar}>Limpiar</button>
        <Link to="/checkout"> Finalizar compra</Link>

    </> :
    <h2>El carrito esá vacio -_- </h2>
    }
        
    </div>
  )
}

export default Carrito