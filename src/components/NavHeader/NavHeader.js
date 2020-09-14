import React from 'react';
import './NavHeader.sass';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';

const NavHeader = () => {
    return (
        <Navbar className="navbar-container" fixed="top" collapseOnSelect expand="lg" variant="light">
            <DirectionsSubwayIcon fontSize="large" />
            <Navbar.Brand className="mr-auto">
                LBF
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="t">All</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Jackets</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link target="_blank" rel="noopener noreferrer" href="https://new.mta.info/lost-and-found/subway-bus-and-staten-island-railway/contact-lost-and-found">Contact MTA</Nav.Link>
                    <Nav.Link target="_blank" rel="noopener noreferrer" href="https://new.mta.info/lost-and-found/subway-bus-and-staten-island-railway/step-by-step">Guide</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavHeader