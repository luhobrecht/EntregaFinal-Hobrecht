import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { BrandIcon } from "../BrandIcon/BrandIcon"
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {


  return (
    <Navbar collapseOnSelect expand="lg" className="p-4 sticky-top">
      <Container>
        <Link className='' to='/'>
          <BrandIcon />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav "  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto custom-nav">
              <NavLink to='/' className='all text-decoration-none me-4' id='navbar-items'>Ver todo</NavLink>
              <NavLink to='/category/series' className='series text-decoration-none me-4' id='navbar-items'>Series</NavLink>
              <NavLink to='/category/films' className='movies text-decoration-none me-4' id='navbar-items'>Películas</NavLink>
              <NavLink to='/category/videogames' className='videogames text-decoration-none me-4'  id='navbar-items'>Videojuegos</NavLink>
            <Link to="contact" className="contact text-decoration-none me-4" id='navbar-items' >Contacto</Link>
            <Link to="about-us"className="about-us text-decoration-none me-4" id='navbar-items' >Sobre Nosotros</Link>
          </Nav>
          <Nav>
            <Link to='/cart' className="text-decoration-none">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};
