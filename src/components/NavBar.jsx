import React from 'react';
//importing styled elements
import {
  NavLogoContainer,
  NavBarContainer,
  NavLogo,
  NavList,
  ListItem,
  NavMenu,
  NavMenuLogo,
  NavListContainer,
  NavClose,
  NavCloseLogo,
} from './StyledElements/NavBarElements';
const NavBar = ({ isClosed, setIsClosed }) => {
  //user clicks on menu icon
  const onMenuHandler = () => {
    setIsClosed(false);
  };
  //user clicks on closed icon
  const onCloseHandler = () => {
    setIsClosed(true);
  };
  return (
    <NavBarContainer>
      <NavMenu onClick={onMenuHandler}>
        <NavMenuLogo src="./images/icon-hamburger.svg" alt="hamburger-icon" />
      </NavMenu>
      <NavLogoContainer>
        <NavLogo src="./images/logo.svg" alt="logo" />
      </NavLogoContainer>
      <NavListContainer className={`${isClosed === false ? 'translate' : ''}`}>
        <NavClose
          onClick={onCloseHandler}
          //showing / hiding the closed icon based on isClosed state
          className={`${isClosed === false ? 'show__close' : ''}`}
        >
          <NavCloseLogo src="./images/icon-close.svg " alt="close-icon" />
        </NavClose>
        <NavList>
          <ListItem>home</ListItem>
          <ListItem>shop</ListItem>
          <ListItem>about</ListItem>
          <ListItem>contact</ListItem>
        </NavList>
      </NavListContainer>
    </NavBarContainer>
  );
};

export default NavBar;
