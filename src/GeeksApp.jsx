import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar'
import { Contact } from './components/Contact/Contact'
import { AboutUs } from './components/AboutUs/AboutUs'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import { CartContextProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CheckOut } from './components/CheckOut/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function GeeksApp() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer /> } />
          <Route path='/category/:cid' element={<ItemListContainer /> } />
          <Route path='/item/:pid' element={<ItemDetailContainer />} />
          <Route path='*' element={ <Navigate to='/' /> }/>
          <Route path='/cart' element={ <CartContainer />} />
          <Route path='/checkout' element={ <CheckOut />} />
          <Route path='/contact' element={<Contact /> } />
          <Route path='/about-us' element={<AboutUs /> } />
        </Routes>
        <Footer />
      </Router>
    </CartContextProvider>
  )
};

export default GeeksApp

