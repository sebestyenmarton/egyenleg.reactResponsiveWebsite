import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle} >
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} >Rólunk</SidebarLink>
          <SidebarLink to="discover" onClick={toggle} >Tevékenységek</SidebarLink>
          <SidebarLink to="sevices" onClick={toggle} >Szolgáltatások</SidebarLink>
          <SidebarLink to="signup" onClick={toggle} >Regisztráció</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" >Belépés</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
//rafce <- ezzel a rövidítéssel egyből beírhatom a react kereteit 