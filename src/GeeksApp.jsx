import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function GeeksApp() {
  let greeting = 'Acá va el catálogo de productos'
  return (
    <div className="app container">
      <NavBar />
      <ItemListContainer greeting={greeting}/>
    </div>
  )
}

export default GeeksApp
