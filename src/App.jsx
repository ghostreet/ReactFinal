import './input.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {


  return (
    <div>
     <CartProvider>
     <BrowserRouter>

     <NavBar/>
     <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/aplicaciones' element={<ItemListContainer/>}/>
        <Route path='/aplicaciones/:categoria' element={<ItemListContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/checkout' element={<Checkout/>}/>

              
     </Routes>
     </BrowserRouter>
     </CartProvider> 
    </div>
  );
}

export default App;
