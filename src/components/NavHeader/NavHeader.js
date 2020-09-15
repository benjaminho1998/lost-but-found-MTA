import React from 'react';
import './NavHeader.sass';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavHeader = (props) => {
    const categories = props.categories;
    const contactUrl = "https://new.mta.info/lost-and-found/subway-bus-and-staten-island-railway/contact-lost-and-found"
    const guideUrl = "https://new.mta.info/lost-and-found/subway-bus-and-staten-island-railway/step-by-step"

    return (
        <Navbar className="navbar-container" fixed="top" collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div>
                <DirectionsSubwayIcon fontSize="large" />
                <Navbar.Brand className="mr-auto">LBF</Navbar.Brand>
            </div>
            <Navbar.Collapse>
                <Nav className="mr-auto mg-bot">
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="t">All</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {categories.map((category, i) =>
                            <LinkContainer to={"/" + category.Category} key={i}>
                                <NavDropdown.Item>
                                    {category.Category}
                                </NavDropdown.Item>
                            </LinkContainer>
                        )}
                    </NavDropdown>
                </Nav>
                <div className="drop-white">
                    <Nav>
                        <Nav.Link target="_blank" rel="noopener noreferrer" href={contactUrl}>Contact MTA</Nav.Link>
                        <Nav.Link target="_blank" rel="noopener noreferrer" href={guideUrl}>Guide</Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavHeader