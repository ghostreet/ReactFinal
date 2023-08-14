import React from 'react'
import Item from './Item'

const ItemList = ( {apps, seccion} ) => {
  return (
    <div className="container mx-auto">  
          <h2 className='main-title'>{seccion}</h2>

      <div className="grid grid-flow-col grid-cols-3 sm:grid-flow-row">
          {
            apps.length > 0 &&
            apps.map((app)=> {
                return(
                    <Item key={app.id} apps={app}/>
                )
            })
          }
      </div>
    </div>
  )
}

export default ItemList;