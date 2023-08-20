import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { pedirItemPorId } from './ItemListContainer/data/pedirData';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;
  

  useEffect(()=> {

    const docRef = doc(db, "app_datafire", id)
    getDoc(docRef)
      .then((resp)=>{
        setItem(
          {...resp.data(), id: resp.id}
        );
      }
      )

 
  },[id])
  return (

    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  )

}

export default ItemDetailContainer