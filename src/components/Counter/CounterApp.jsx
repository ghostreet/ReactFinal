import { Button } from '@material-tailwind/react'
import React from 'react'

const CounterApp = ( {cantidad, handleRestar, handleSumar, handleAdd} )=> {

  return (
    <div>   
        <div>
          <button onClick={handleRestar}>-</button>
          <p>{cantidad}</p>
          <button onClick={handleSumar}>+</button>    
        </div>
          <Button onClick={handleAdd}>Agregar al carrito</Button>
    </div>
    )


}  
  export default CounterApp