import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function GeeksApp() {
  let greeting = 'Acá va el catálogo de productos'
  return (
    <Router className="app container">
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer greeting={greeting}/> } />
      <Route path='/category/:cid' element={<ItemListContainer /> } />
      <Route path='/item/:pid' element={<ItemDetailContainer />} />
      <Route path='*' element={ <Navigate to='/' /> }/>
      </Routes>
      <Footer />
      {/* <ItemCount /> */}
    </Router>
  )
}

export default GeeksApp
