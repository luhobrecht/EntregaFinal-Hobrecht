import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { BrandIcon } from "../BrandIcon/BrandIcon"
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg='#89FCB3'>
      <Container>
        <Link className='brand-icon' to='/'>
          <BrandIcon />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto custom-nav">
              <NavDropdown title="Catálogo" id="collasible-nav-dropdown" className='dropdown'>
                <NavLink to='/' className='all'>Ver todo</NavLink>
                <NavLink to='/category/series' className='series'>Series</NavLink>
                <NavLink to='/category/films' className='movies'>Películas</NavLink>
                <NavLink to='/category/videogames' className='videogames'>Videojuegos</NavLink>
              </NavDropdown>
              <Link to="contact" className="contact" >Contacto</Link>
              <Link to="about-us"className="about-us" >Sobre Nosotros</Link>
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
}
