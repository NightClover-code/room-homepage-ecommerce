import styled from 'styled-components';
//importing colors
import colors from '../Colors';
//creating styled elements
export const HeroSection = styled.div`
  position: relative;
  grid-area: hero;
  opacity: 0;
`;
export const TextContentContainer = styled.div`
  position: relative;
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(50%);
  opacity: 0;
`;
export const TextContent = styled.div`
  width: 70%;
  transform: translateY(50%);
  opacity: 0;
  @media screen and (max-width: 900px) {
    width: 85%;
    padding: 70px 0;
  }
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
  padding-bottom: calc(10px + 1vw);
  @media screen and (max-width: 900px) {
    padding-bottom: calc(20px + 2vw);
  }
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
  line-height: 3;
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
  height: calc(10% + 1vw);
  @media screen and (max-width: 900px) {
    right: 0;
    top: 0;
    left: auto;
    bottom: auto;
    transform: translateY(-100%);
    height: calc(5% + 2vh);
    width: 30%;
  }
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
