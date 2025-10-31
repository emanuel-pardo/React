import Nav from 'react-bootstrap/Nav';
import {Link,NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar expand="lg" className="navbar-custom">
            <Navbar.Brand as={NavLink} to="/">
                <img src='/logo.png' alt='logomarca' className='logo-img' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-center">
                    <Nav.Link as={NavLink} to="/">NOSOTROS</Nav.Link>
                    <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/products" >Todos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/products/category/1">Nylon</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/products/category/2">Alta Tenacidad</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/products/category/3">Fibra Cortada</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contacto">CONTACTO</Nav.Link>
                </Nav>
                <div className="cart-area">
                    <CartWidget itemsCount={7} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;