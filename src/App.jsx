import './input.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppMoviles from './components/pages/AppMoviles';
import PcNotebooks from './components/pages/PcNotebooks';
import RecienSalidas from './components/pages/RecienSalidas';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Counter from  './components/Counter/Counter';
function App() {

  return (
    <div>
     <BrowserRouter>

     <NavBar/>
     <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/aplicaciones' element={<ItemListContainer/>}/>
        <Route path='/aplicaciones/:categoria' element={<ItemListContainer/>}/>
              
     </Routes>

     
     
     <Counter initial={1} stock={7} onAdd={(quantity)=> console.log("Cantidad agregada",quantity)}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
