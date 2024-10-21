import { Nav, Navbar } from "react-bootstrap";
import { navbar } from "./styles";
import "./Header.css";

import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <Navbar as="header" className="px-4" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" style={navbar}>
        João Pedro
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav style={{ overflow: "hidden" }}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projetos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contato
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
