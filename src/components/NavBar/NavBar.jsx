import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { BrandIcon } from "../BrandIcon/BrandIcon"
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {


  return (
    <Navbar collapseOnSelect expand="lg" className="p-4 sticky-top">
        <Link className='ms-2' to='/'>
          <BrandIcon />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around">
          <Nav className="ms-5 nav nav-pills">
            <NavLink to='/' className='nav-link all text-decoration-none me-4' id='navbar-items'>Ver todo</NavLink>
            <NavLink to='/category/series' className='series nav-link text-decoration-none me-4' id='navbar-items'>Series</NavLink>
            <NavLink to='/category/films' className='movies nav-link text-decoration-none me-4' id='navbar-items'>Películas</NavLink>
            <NavLink to='/category/videogames' className='nav-link videogames text-decoration-none me-4'  id='navbar-items'>Videojuegos</NavLink>
            <NavLink to="/contact" className="contact nav-link text-decoration-none me-4" id='navbar-items' >Contacto</NavLink>
            <NavLink to="/about-us"className="about-us nav-link text-decoration-none me-4" id='navbar-items'>Sobre Nosotros</NavLink>
          </Nav>
        </Navbar.Collapse>
            <Link to='/cart' className="text-decoration-none cart">
              <CartWidget />
            </Link>
    </Navbar>
  )
};
