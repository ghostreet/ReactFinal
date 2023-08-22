import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import TrashIcon from './CartWidget/assets/TrashIcon';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = ()=>{
        vaciarCarrito();
    }
  return (
    <Card className="w-full max-w-[25rem] p-10 bg-french">
        <CardHeader className='p-3 bg-caribbean text-white'>
        <Typography className="flex justify-center" variant="h6">Carrito de compras</Typography>
        </CardHeader>
        

    {
        carrito.map((prod)=>(
            <CardBody key={prod.id}>
                 <Typography variant="h5">{prod.name}</Typography>
                 <Typography>Precio unidad: ${prod.price}</Typography>
                 <Typography>Precio total: ${prod.price * prod.cantidad}</Typography>
                 <Typography>Cantidad: {prod.cantidad}</Typography>

            </CardBody>
            
        ))
    }
    <Typography className="flex mx-6" variant="h4">Precio total: ${precioTotal()}</Typography>
    { 
    carrito.length > 0 ?
    <CardFooter className='flex'>
        
        <Button size='md' color='red' className="justify-center" onClick={handleVaciar}>{<TrashIcon/>}</Button>
        <Link to="/checkout"> <Button size='lg' color='green' className="">Finalizar compra</Button></Link>

    </CardFooter> :
    <Typography className="flex mx-6">El carrito está vacio -_- </Typography>
    }
        
    </Card>
  )
}

export default Carrito

