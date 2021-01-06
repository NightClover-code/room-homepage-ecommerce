import styled from 'styled-components';
//importing colors
import colors from '../Colors';
//creating styled elements
export const NavBarContainer = styled.div`
  position: absolute;
  margin: 70px 75px;
  display: flex;
  @media screen and (max-width: 900px) {
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
  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: calc(10px + 5vw) auto;
  }
`;
export const NavList = styled.ul`
  display: flex;
  margin: 0 40px;
  @media screen and (max-width: 900px) {
    display: none;
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
    width: 80%;
    height: 2px;
    background-color: ${colors.white};
    transition: all 0.25s;
  }
  &:hover {
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
`;
