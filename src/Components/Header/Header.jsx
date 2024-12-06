import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <header>
              <Navbar expand="xl" className="custom-navbar">
                  <Container>
                    <Navbar.Brand href="#home" className="custom-navbar-brand">
                      📚 Lern-App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto custom-nav">
                        <Nav.Link href="#home" className='custom-nav-link'>
                          Home  
                        </Nav.Link>
                        <Nav.Link href="#link" className='custom-nav-link'>
                          Lernen Starten
                        </Nav.Link>
                        <NavDropdown title="Notizen" id="basic-nav-dropdown" className="custom-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">
                            Alle Notizen
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Variablen
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            Neue Variable erstellen
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Neue Notiz
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
              </Navbar>
            </header>
        );
    }
}

export default Header;