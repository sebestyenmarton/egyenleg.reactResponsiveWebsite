import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,


  SidebarRoute, SidebarWrapper,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">Rólunk</SidebarLink>
          <SidebarLink to="discover">Tevékenyságek</SidebarLink>
          <SidebarLink to="sevices">Szolgáltatások</SidebarLink>
          <SidebarLink to="signup">Regisztráció</SidebarLink>
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