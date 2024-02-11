import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const location = useLocation();

  const logOutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  // Check if the current route is one of the restricted routes
  const isRestrictedPage = ['/', '/login', '/register'].includes(location.pathname);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ textDecoration: "none" }}>
          Cyber Note
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* Conditionally render the search bar */}
            {!isRestrictedPage && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav className="ml-auto">
            {userInfo ? (
              <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/mynotes">My Notes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOutHandler}><FontAwesomeIcon icon={faSignOutAlt} /> Log out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Item>
                <Nav.Link as={Link} to="/login">
                  <FontAwesomeIcon icon={faUser} /> Login
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
