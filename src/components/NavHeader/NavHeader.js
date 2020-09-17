import React from 'react';
import './NavHeader.sass';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';
import { LinkContainer } from 'react-router-bootstrap';

const NavHeader = (props) => {
    const categories = props.categories;
    const contactUrl = "https://new.mta.info/lost-and-found/subway-bus-and-staten-island-railway/contact-lost-and-found"
    const guideUrl = "https://new.mta.info/lost-and-found/subway-bus-and-staten-island-railway/step-by-step"

    return (
        <Navbar className="navbar-container poppins-font" fixed="top" collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <LinkContainer to="/">
                <div className="logo-container">
                    <DirectionsSubwayIcon fontSize="large" />
                    <span className="mr-auto">LBF</span>
                </div>
            </LinkContainer>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href={'/'}>Home</Nav.Link>
                </Nav>
                <Nav className="mr-auto mg-bot">
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        {categories.map((category, i) =>
                            <LinkContainer to={"/" + category.Category.replace(/[()]/g, '')} key={i}>
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