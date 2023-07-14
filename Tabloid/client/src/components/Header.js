import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { logout } from '../modules/authManager';

export default function Header({ isLoggedIn }) {
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">
          Tabloid
        </NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={false} navbar>
          <Nav className="mr-auto" navbar>
            {isLoggedIn && (
              <NavItem>
                <NavLink tag={RRNavLink} to="/">
                  Home
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <Nav navbar>
            {isLoggedIn ? (
              <>
                <NavItem>
                  <NavLink onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    Logout
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/userprofiles">
                    User Profile
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
