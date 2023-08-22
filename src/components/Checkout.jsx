import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Typography, Button } from '@material-tailwind/react';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido ={
            cliente: data,
            apps: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc)=> {
            setPedidoId(doc.id);
            vaciarCarrito();
        })
    }

    if (pedidoId) {
        return(
            <div>
                <Typography variant="h3">Gracias por tu compra!</Typography>
                <Typography variant="h5">Tu número de pedido es:{pedidoId}</Typography>
            </div>
        )
    }

  return (
    <div className="flex w-72 flex-col gap-10 mx-10">
    <Typography className="" variant="h3">Finalizar compra</Typography>
    <form onSubmit={handleSubmit(comprar)}>
    <div className="relative h-11 w-full min-w-[200px]">

        <input placeholder="Ingresa tu nombre"
        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" {...register("nombre")} />
        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
             Ingresa tu nombre
        </label>
    </div>
    <div className="relative h-10 w-full min-w-[200px]">
    <input className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder="Ingresa tu E-mail" {...register("email")} />
    </div>
    <div className="relative h-10 w-full min-w-[200px]">  
        <input className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder="Ingresa tu teléfono" {...register("telefono")} />
    </div>
    <div className='pt-8'>
    <Button className="" color='green' type="submit">Comprar</Button>
    </div>
    </form>
    </div>

  )
}

export default Checkout