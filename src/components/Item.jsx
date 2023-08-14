import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Item = ( {apps} ) => {
  return (
    <Card className="mt-12 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
      <img className="h-56 w-full object-cover object-center" src={apps.img} alt={apps.id}/>
      </CardHeader>
      <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
              {apps.name}
          </Typography>
          <Typography variant="h6">
              Versión {apps.ver}
          </Typography>
          <Typography variant="h6">
              ${apps.price}
          </Typography>
          <CardFooter className="pt-0">
          <Link className='leer-mas' to={`/item/${apps.id}`}>
            <Button fullWidth className='mt-3'>Leer Más</Button>
            </Link>
        </CardFooter>

      </CardBody>
               
    </Card>
  )
}

export default Item;