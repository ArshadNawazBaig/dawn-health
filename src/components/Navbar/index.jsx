import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from '../Button';
import { NavbarWrapper, NavItem, RecLink } from './styles';
import Logo from './../../assets/logo/logo.png';
import { Navbar } from 'react-bootstrap';

export const Header = (props) => {
  const { active, className } = props;
  const navLinks = [
    { id: 1, to: '/', title: 'Home' },
    { id: 2, to: '/about', title: 'About' },
    { id: 3, to: '/team', title: 'Team' },
    { id: 4, to: '/career', title: 'Career' },
    { id: 5, to: '/faqs', title: "FAQ's" },
  ];
  return (
    <NavbarWrapper>
      <Navbar collapseOnSelect expand="lg" fixed="top" className={className}>
        <Container>
          <Navbar.Brand>
            <RecLink to="/">
              <img src={Logo} className="img-fluid" alt="" />
            </RecLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav me-auto">
            <NavItem className="mx-auto">
              {navLinks.map((navLink) => (
                <RecLink
                  key={navLink.id}
                  to={navLink.to}
                  className={active == navLink.to ? 'active' : ''}
                >
                  {navLink.title}
                </RecLink>
              ))}
            </NavItem>
            <NavItem>
              <Button>Signup</Button>
            </NavItem>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
};
