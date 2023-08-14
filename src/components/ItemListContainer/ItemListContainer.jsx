import React, { useEffect, useState } from 'react';
import pedirPoductos from '../pedirProductos';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [apps , setApps] = useState([]);
    const [seccion, setSeccion] = useState("Aplicaciones")
    const category = useParams().categoria;
    

    useEffect(()=> {
        pedirPoductos()
        .then((res)=> {
            if(category){
              setApps(res.filter((prod) => prod.categoria === category))
              setSeccion(category)
            } else {
              setApps(res)
              setSeccion("Aplicaciones")
            }
           })
    },[category]);

  return (
    <div>
        <ItemList apps={apps} seccion={seccion}/>
    </div>
  )
}

export default ItemListContainer;