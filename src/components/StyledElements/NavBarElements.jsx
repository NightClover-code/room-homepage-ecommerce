import styled from 'styled-components';
//importing colors
import colors from '../Colors';
//creating styled elements
export const NavBarContainer = styled.div`
  position: absolute;
  margin: 70px 75px;
  display: flex;
  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
  }
`;
export const NavLogoContainer = styled.div`
  width: 100px;
`;
export const NavLogo = styled.img`
  width: 100%;
  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: calc(10px + 5vw) auto;
  }
`;
export const NavListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    /* display: none; */
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    min-height: 100px;
    transform: translateY(-100%);
    transition: transform 0.4s ease-in-out;
  }
`;
export const NavList = styled.ul`
  display: flex;
  margin: 0 40px;
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }
`;
export const ListItem = styled.li`
  position: relative;
  list-style: none;
  padding: 0 20px;
  font-size: 15px;
  color: ${colors.white};
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(0);
    height: 2px;
    background-color: ${colors.white};
    transition: all 0.25s;
    width: 80%;
  }
  &:hover {
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
  @media screen and (max-width: 1000px) {
    color: ${colors.very_dark_gray};
    &::after {
      left: 50%;
      bottom: -5px;
      background-color: ${colors.very_dark_gray};
      width: 70%;
    }
    padding: 0 calc(5px + 2vw);
  }
  @media screen and (max-width: 430px) {
    color: ${colors.very_dark_gray};
    &::after {
      left: 50%;
      bottom: -5px;
      background-color: ${colors.very_dark_gray};
      width: 70%;
    }
    padding: 10px calc(5px + 2vw);
  }
`;
export const NavMenu = styled.div``;
export const NavMenuLogo = styled.img`
  display: none;
  @media screen and (max-width: 1000px) {
    display: inline-block;
    position: absolute;
    left: calc(10px + 5vw);
    top: calc(10px + 5vw);
    cursor: pointer;
  }
`;
export const NavClose = styled.div`
  cursor: pointer;
  position: absolute;
  left: 5%;
  visibility: hidden;
  @media screen and (min-width: 1000px) {
    visibility: hidden !important;
  }
`;
export const NavCloseLogo = styled.img``;
