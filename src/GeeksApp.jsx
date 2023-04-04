import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function GeeksApp() {
  let greeting = 'Acá va el catálogo de productos'
  return (
    <div className="App container">
      <NavBar />
      <ItemListContainer greeting={greeting}/>
    </div>
  )
}

export default GeeksApp
