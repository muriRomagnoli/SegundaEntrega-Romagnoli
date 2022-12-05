import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import brandLogo from './assets/brandGG.png'
import './Navbar.css'


const NavBar = () => {

  return (
    <Navbar className='Nav' expand="lg">
      <Container>
        <Link to='/' id="brandLink"><Navbar.Brand><img src={brandLogo} alt={'brand'} id='brand' /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'><Button label={'Inicio'} background={'rgb(206, 66, 46)'} /></Link>
            <Link to={`/category/component`}><Button label={'Componentes'} background={'rgb(206, 66, 46)'} /></Link>
            <NavDropdown title="Equipos" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={`/category/notebook`}>Notebook</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={`/category/console`}>PS5/XBOX</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={`/category/pc`}>PC</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;