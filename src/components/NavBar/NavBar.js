import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap space-x-1 bg-mantis p-6">
      <div className="flex items-center flex-shrink-0 text-white">
        <Link className="logo" to="./"> <span className="font-semibold text-xl tracking-wide" >Appteca</span></Link>
      </div>   
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4">
              <Link className='menu-link' to="/aplicaciones">Aplicaciones </Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ml-4">
              <Link className='menu-link' to='/aplicaciones/Apps Móviles'>Apps Móviles </Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ml-4">
              <Link className='menu-link' to="/aplicaciones/Apps Pc Notebook">Apps Pc/notebook </Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4">
              <Link className='menu-link' to="/aplicaciones/Últimas Agregadas">Últimas agregadas </Link>
            </li>
           
          </div>
      <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-mantis hover:bg-white mt-4 lg:mt-0">{<CartWidget/>}</a>
      </div>
  </div>
</nav>
     
      
  )
}

export default NavBar

