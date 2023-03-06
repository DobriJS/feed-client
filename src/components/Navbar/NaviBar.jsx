import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NaviBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          FEED
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link as={Link} to='/contacts'>
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
