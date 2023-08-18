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

  const { carrito, setCarrito } =useContext(CartContext)

  const [stock, setStock] =useState(1);

  const handleRestar = () => {
    stock > 1 && setStock(stock - 1)
  }

  const handleSumar = () => {
    stock < item.stock && setStock(stock + 1)
  }

  const handleAdd = () => {
    const appAdd = {...item, stock};

    const newCarrito = [...carrito];
    const registradoEnCarro = newCarrito.find((producto)=> producto.id === appAdd.id);

      if(registradoEnCarro){
        registradoEnCarro.stock += stock;
        setCarrito(newCarrito);
        console.log(newCarrito);
      } else {
        newCarrito.push(appAdd);
        setCarrito(newCarrito);
        console.log(newCarrito);   
        
    } 
   
        
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
          <CounterApp stock={stock} handleSumar={handleSumar} handleRestar={handleRestar} handleAdd={handleAdd}/>

        </CardBody>
    </Card>
  )
}

export default ItemDetail


const [carrito, setCarrito] = useState([]);
  
const addCarro = (item, stock) => {
  const appAdd = {...item, agregado:stock};

  const newCarrito = [...carrito];
  const registradoEnCarro = newCarrito.find((producto)=> producto.id === appAdd.id);

    if(registradoEnCarro){
      registradoEnCarro.stock += stock;
      
    } else {
      newCarrito.push(appAdd);       
  } 
    setCarrito(newCarrito);
      console.log(newCarrito);
}