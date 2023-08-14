import React, { useState } from 'react'

const Counter =({stock, handleRestar, handleSumar, hanldeAdd})=> {
   
  return (
  <div> 

      <div>
        <button onClick={handleRestar}>-</button>
        <p>{stock}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button onClick={hanldeAdd}>Agregar al carrito</button>
  </div>
  )
} 
  
  export default Counter