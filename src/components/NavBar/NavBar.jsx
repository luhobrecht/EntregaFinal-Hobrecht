import { BrandIcon } from "./BrandIcon"
import { CartWidget } from "./CartWidget"


export const NavBar = () => {
  return (
    <div className='navbar'>
    <BrandIcon />
    <div className="nav-buttons">
    <button className='buttons-navbar'>Gorras</button>
    <button className='buttons-navbar'>Remeras</button>
    <button className='buttons-navbar'>Hoodies</button>
    <button className='buttons-navbar'>Accesorios</button>
    <button className='buttons-navbar'>Contacto</button>
    <button className='buttons-navbar'>Nosotros</button>
    </div>
    <CartWidget />
    </div>
  )
}
