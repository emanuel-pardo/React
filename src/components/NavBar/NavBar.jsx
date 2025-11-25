import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";
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
                    <Nav.Link as={NavLink} to="/">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/products" >Todos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/products/category/nylon">Nylon</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/products/category/poliester">Alta Tenacidad</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/products/category/fibracortada">Fibra Cortada</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/contact">Contacto</Nav.Link>
                </Nav>
                <div className="cart-area">
                    <CartWidget/>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;