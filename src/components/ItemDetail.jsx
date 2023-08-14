import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";


const ItemDetail = ( {item}) => {

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
          <Typography color="gray" className="mb-8" font-normal>{item.desc}</Typography>
          <Typography color="gray" className="">Categoria: {item.categoria}</Typography>
          <Typography variant="h3">${item.price}</Typography>

        </CardBody>
    </Card>
  )
}

export default ItemDetail