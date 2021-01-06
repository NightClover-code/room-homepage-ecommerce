import React from 'react';
//importing styled elements
import {
  NavLogoContainer,
  NavBarContainer,
  NavLogo,
  NavList,
  ListItem,
} from './StyledElements/NavBarElements';
const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLogoContainer>
        <NavLogo src="./images/logo.svg" />
      </NavLogoContainer>
      <NavList>
        <ListItem>home</ListItem>
        <ListItem>shop</ListItem>
        <ListItem>about</ListItem>
        <ListItem>contact</ListItem>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
