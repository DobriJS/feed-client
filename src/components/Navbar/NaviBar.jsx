import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const NaviBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          FEED
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
          {userInfo ? (
            <Nav>
              <Nav.Link as={Link} to='/profile'>
                Profile
              </Nav.Link>
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to='/register'>
                Register
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
