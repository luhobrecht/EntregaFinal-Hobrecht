import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { BrandIcon } from "../BrandIcon/BrandIcon"
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg='#89FCB3'>
      <Container>
        <Navbar.Brand href="#home">
          <BrandIcon />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Catálogo" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#hats">Gorras</NavDropdown.Item>
                <NavDropdown.Item href="#shirts">Camisetas</NavDropdown.Item>
                <NavDropdown.Item href="#hoodies">Hoodies</NavDropdown.Item>
                <NavDropdown.Item href="#accesories">Accesorios</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <Nav.Link href="#about-us">Sobre Nosotros</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#cart-widget">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
