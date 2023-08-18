import React, { useContext, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import CounterApp from './Counter/CounterApp';
import { CartContext } from './context/CartContext';



const ItemDetail = ( {item} ) => {

  const { carrito, addCarrito } =useContext(CartContext)

  const [cantidad, setCantidad] =useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }



  return (
    <Card className="w-full max-w-[48rem] flex-row mt-3">
      
    <CardHeader
      shadow={false}
      floated={false}
      className="m-0 w-2/5 shrink-0 rounded-r-none">
      <img src={item.img} alt={item.name}/>
    </CardHeader>

        <CardBody>
          <Typography variant="h4" color="gray" className="mb-4">{item.name} </Typography>
          <Typography color="gray" className="mb-8" >{item.desc}</Typography>
          <Typography color="gray" className="">Categoria: {item.categoria}</Typography>
          <Typography variant="h3">${item.price}</Typography>
          <CounterApp cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAdd={()=>{addCarrito(item, cantidad)}}/>

        </CardBody>
    </Card>
  )
}

export default ItemDetail