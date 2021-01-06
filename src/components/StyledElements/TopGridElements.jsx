import styled from 'styled-components';
//importing colors
import colors from '../Colors';
//creating styled elements
export const HeroSection = styled.div`
  grid-area: hero;
`;
export const TextContentContainer = styled.div`
  position: relative;
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextContent = styled.div`
  width: 70%;
`;
export const TitleTop = styled.h1`
  font-size: calc(30px + 1vw);
  font-weight: 600;
  margin-bottom: 30px;
  color: ${colors.black};
`;
export const DescriptionTop = styled.div`
  font-size: 15px;
  line-height: 1.7;
  color: ${colors.dark_gray};
  padding-bottom: 50px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ShopNow = styled.span`
  text-transform: uppercase;
  letter-spacing: 15px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.4;
  }
`;
export const IconArrow = styled.img``;
export const Slider = styled.div`
  display: flex;
  background-color: ${colors.black};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.5%;
  height: 15%;
`;
export const SliderLeft = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  width: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.very_dark_gray};
  }
`;
export const SliderRight = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  width: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.very_dark_gray};
  }
`;
export const IconAngleLeft = styled.img``;
export const IconAngleRight = styled.img``;
