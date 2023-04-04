import { BrandIcon } from "./BrandIcon"
import { CartWidget } from "./CartWidget"


export const NavBar = () => {
  return (
    <div className='navbar'>
    <BrandIcon />
    <div className="nav-buttons">
    <button className='buttons-navbar'>Productos</button>
    <button className='buttons-navbar'>Contacto</button>
    <button className='buttons-navbar'>Nosotros</button>
    </div>
    <CartWidget />
    </div>
  )
}
