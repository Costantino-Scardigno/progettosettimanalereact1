import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LogoNetflix from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark ">
      <Container fluid>
        <img className="logo" src={LogoNetflix} alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/" className="text-white" href="#features">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Anime"
              className="text-secondary"
              href="#pricing"
            >
              Anime
            </Nav.Link>
            <Nav.Link className="text-secondary" href="#features">
              Movies
            </Nav.Link>
            <Nav.Link className="text-secondary" href="#features">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-secondary" href="#features">
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-white" href="#deets">
              <FaSearch className="iconsnav" /> KIDS
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={2} href="#memes">
              <FaRegBell className="iconsnav" />
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={2} href="#memes">
              <FaUserCircle className="iconsnav" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
