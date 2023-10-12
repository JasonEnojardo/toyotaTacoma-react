import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, Dropdown, Image, Row } from 'react-bootstrap';
import { BsPersonCircle } from "react-icons/bs";

const Tacoma = () => (
  <>
    {/* Top Menu */}
    <Navbar expand="lg">
      <Container className="pl-0">
      <Navbar.Brand href="#">
          <Image src="toyotaTopLeftLogo.png" width="200" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item className="nav-link dropdown dropdown-toggle text-black me-3">Vehicles</Nav.Item>
          <Nav.Item className="nav-link dropdown dropdown-toggle text-black me-3">Shopping Tools</Nav.Item>
          <Nav.Item className="nav-link dropdown dropdown-toggle text-black me-3">Owners</Nav.Item>
          <Nav.Item className="nav-link dropdown text-black me-3">Search Inventory</Nav.Item>
          <Dropdown align="end">
            <Dropdown.Toggle id="navbarDropdown" as="div" bsPrefix="custom-dropdown">
              <Nav.Link href="#" className="text-black pe-0">
                <BsPersonCircle size={32}/>
              </Nav.Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>My Toyota</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>

    {/* Tacoma Image */}
    <Container fluid className="p-0">
      <Row className="justify-content-center position-relative">
        <Image src="tacoma.avif" fluid alt="2023 Toyota Tacoma Lunar Rock" />

        {/* Text to be displayed over the image */}
        <div className="top-centered-text text-white">
          <h1 style={{ fontWeight: 'bold', fontSize: '4rem', paddingTop: '20px' }}>2023 Tacoma</h1>
          <p style={{ fontSize: '1.5rem' }}>Unmatched. Unequaled. Unstoppable.</p>
        </div>

        {/* New overlay text (bottom-left) */}
        <div className="bottom-left-text text-white">
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem', paddingLeft: '200px' }}>2023 Tacoma</h2>
          <p style={{ fontSize: '2rem', paddingLeft: '200px' }}>Starting MSRP $28,600*</p>
        </div>
      </Row>
    </Container>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Tacoma />);
