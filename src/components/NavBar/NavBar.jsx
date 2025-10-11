import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar expand="lg" className="navbar-custom">
            <Navbar.Brand href="#nosotros">
                <img src='../logo.png' alt='logomarca' className='logo-img' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-center">
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#todos">Todos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#overlock">Overlock</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#poliamida">Poliamida</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#at">Alta Tenacidad</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#spun">Spun</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <div className="cart-area">
                    <CartWidget itemsCount={7} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;