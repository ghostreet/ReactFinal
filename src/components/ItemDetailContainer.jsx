import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { pedirItemPorId } from './ItemListContainer/data/pedirData';

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;
  console.log(id)

  useEffect(()=> {
    pedirItemPorId(Number(id))
      .then((res)=> {
          setItem(res)
      });
  },[id])
  return (

    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  )

}

export default ItemDetailContainer