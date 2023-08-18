import React from 'react'

const CounterApp = ( {cantidad, handleRestar, handleSumar, handleAdd} )=> {

  return (
    <div>   
        <div>
          <button onClick={handleRestar}>-</button>
          <p>{cantidad}</p>
          <button onClick={handleSumar}>+</button>    
        </div>
          <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
    )


}  
  export default CounterApp