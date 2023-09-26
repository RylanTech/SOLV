import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

function Home() {
  document.body.style = 'background: white';
  return (
    <>
      <div>
        <Navbar className="nav-color" expand="lg">
          <Container>
            <Navbar.Brand href="/">
            </Navbar.Brand>
            <h1 className="title">SOLV</h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <a className="nav-link" target="blank" href="https://google.com">Sign up</a>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </>
  )
}
export default Home