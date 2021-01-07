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
  const onMenuHandler = () => {
    setIsClosed(false);
  };
  const onCloseHandler = () => {
    setIsClosed(true);
  };
  return (
    <NavBarContainer>
      <NavMenu onClick={onMenuHandler}>
        <NavMenuLogo src="./images/icon-hamburger.svg" />
      </NavMenu>
      <NavLogoContainer>
        <NavLogo src="./images/logo.svg" />
      </NavLogoContainer>
      <NavListContainer className={`${isClosed === false ? 'translate' : ''}`}>
        <NavClose
          onClick={onCloseHandler}
          className={`${isClosed === false ? 'show__close' : ''}`}
        >
          <NavCloseLogo src="./images/icon-close.svg " />
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
