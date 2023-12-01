import { Navbar, Container, Nav } from "react-bootstrap";
import { useContext } from "react";
import { CountContext } from "./countProvider";

function CookieNav() {
  const context = useContext(CountContext);
  return (
    <>
      <Navbar className="sticky-top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <b>Biscuit Clicker</b>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/biscuit">Biscuit Clicker</Nav.Link>
            <Nav.Link href="/temp">Temp Check</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Cookies: {context?.count}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default CookieNav;
