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

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            Egyenleg
          </NavLogo>
          <MobileIcon  onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Rólunk</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Szolgáltatások</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Regisztráció</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Egyéb</NavLinks>
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

