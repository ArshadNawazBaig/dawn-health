import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from '../Button';
import { NavItem, RecLink } from './styles';
import Logo from './../../assets/logo/logo.png';

export const Header = (props) => {
  const { active } = props;
  const navLinks = [
    { id: 1, to: '/', title: 'Home' },
    { id: 2, to: '/about', title: 'About' },
    { id: 3, to: '/team', title: 'Team' },
    { id: 4, to: '/career', title: 'Career' },
  ];
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" />
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
  );
};
