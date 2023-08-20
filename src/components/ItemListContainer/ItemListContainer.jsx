import React, { useEffect, useState } from 'react';
import pedirPoductos from '../pedirProductos';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase/config"

const ItemListContainer = () => {

    const [apps , setApps] = useState([]);
    const [seccion, setSeccion] = useState("Aplicaciones")
    const category = useParams().categoria;

    useEffect(()=>{
      const productRef = collection(db, "app_datafire");
      console.log(category)

      const qry = category ? query(productRef, where("categoria", "==", category)) : productRef;

      getDocs(qry)
        .then((resp)=>{

          setApps(
         

          resp.docs.map((doc)=>{
            return {...doc.data(), id: doc.id}
          })
          )
        })
    },[category])
    
  
    

  return (
    <div>
        <ItemList apps={apps} seccion={seccion}/>
    </div>
  )
}

export default ItemListContainer;