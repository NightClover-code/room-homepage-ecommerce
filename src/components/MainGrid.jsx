import React from 'react';
//importing data
import data from '../util';
//importing styled elements
import { GridContainer } from './StyledElements/MainGridElements';
import {
  HeroSection,
  TextContent,
  TextContentContainer,
  TitleTop,
  DescriptionTop,
  Image,
  ShopNow,
  IconArrow,
  Slider,
  SliderLeft,
  SliderRight,
  IconAngleLeft,
  IconAngleRight,
} from './StyledElements/TopGridElements';
import {
  AboutDark,
  AboutContent,
  AboutLight,
  TitleBottom,
  DescriptionBottom,
  ImageDark,
  ImageLight,
  AboutContentContainer,
} from './StyledElements/BottomGridElements';
const MainGrid = () => {
  return (
    <GridContainer>
      <HeroSection>
        <Image src="./images/desktop-image-hero-1.jpg" alt="" />
      </HeroSection>
      <TextContentContainer>
        <TextContent>
          <TitleTop>{data[0].title}</TitleTop>
          <DescriptionTop>{data[0].description}</DescriptionTop>
          <ShopNow>
            Shop now <IconArrow src="./images/icon-arrow.svg" />
          </ShopNow>
          <Slider>
            <SliderLeft>
              <IconAngleLeft src="./images/icon-angle-left.svg" />
            </SliderLeft>
            <SliderRight>
              <IconAngleRight src="./images/icon-angle-right.svg" />
            </SliderRight>
          </Slider>
        </TextContent>
      </TextContentContainer>
      <AboutDark>
        <ImageDark src="./images/image-about-dark.jpg" alt="dark-about-image" />
      </AboutDark>
      <AboutContentContainer>
        <AboutContent>
          <TitleBottom>About our furniture</TitleBottom>
          <DescriptionBottom>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </DescriptionBottom>
        </AboutContent>
      </AboutContentContainer>
      <AboutLight>
        <ImageLight
          src="./images/image-about-light.jpg"
          alt="light-about-image"
        />
      </AboutLight>
    </GridContainer>
  );
};

export default MainGrid;
