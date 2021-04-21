import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            Egyenleg
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Rólunk</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Tevékenységek</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="sevices">Szolgáltatások</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Regisztráció</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Belépés</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

