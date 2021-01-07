import React, { useState, useEffect, useRef } from 'react';
//importing data
import data from '../util';
//importing gsap library
import { gsap } from 'gsap';
//importing styled elements
import { GridContainer } from './StyledElements/MainGridElements';
//importing top section styled elements
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
//improting bottom section styled elements
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
//importing components
import NavBar from './NavBar';
const MainGrid = ({ isClosed, setIsClosed }) => {
  //refs
  const heroSectionRef = useRef(null);
  const textContentRef = useRef(null);
  //state
  const [counter, setCounter] = useState(0);
  //using gsap
  const tl = gsap.timeline({ defaults: { ease: 'power3.easeOut' } });
  useEffect(() => {
    tl.to('.text__content', {
      y: '0%',
      duration: 0.75,
      opacity: 1,
    });
    tl.to('.hero__section', {
      x: '0%',
      duration: 0.75,
      opacity: 1,
    });
    tl.to('.text__content__container', {
      y: '0%',
      duration: 0.75,
      opacity: 1,
    });
    tl.to('.about__dark', {
      y: '0%',
      duration: 0.75,
      opacity: 1,
    });
    tl.to('.about__content', {
      y: '0%',
      duration: 0.75,
      opacity: 1,
    });
    tl.to('.about__light', {
      y: '0%',
      duration: 0.75,
      opacity: 1,
    });
  }, [tl]);
  //user clicks on the 'right slider'
  const onSliderRightHandler = () => {
    counter < 2 ? setCounter(counter + 1) : setCounter(0);
  };
  //user clicks on the 'left slider'
  const onSliderLeftHandler = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(2);
  };
  return (
    <GridContainer className="grid">
      <HeroSection className="hero__section" ref={heroSectionRef}>
        <NavBar isClosed={isClosed} setIsClosed={setIsClosed} />
        <Image src={data[counter].source} alt="hero-section-image" />
      </HeroSection>
      <TextContentContainer className="text__content__container">
        <TextContent className="text__content" ref={textContentRef}>
          <TitleTop>{data[counter].title}</TitleTop>
          <DescriptionTop>{data[counter].description}</DescriptionTop>
          <ShopNow>
            Shop now{' '}
            <IconArrow src="./images/icon-arrow.svg" alt="arrow-icon" />
          </ShopNow>
        </TextContent>
        <Slider>
          <SliderLeft onClick={onSliderLeftHandler}>
            <IconAngleLeft
              src="./images/icon-angle-left.svg"
              alt="angle-left-icon"
            />
          </SliderLeft>
          <SliderRight onClick={onSliderRightHandler}>
            <IconAngleRight
              src="./images/icon-angle-right.svg"
              alt="angle-right-icon"
            />
          </SliderRight>
        </Slider>
      </TextContentContainer>
      <AboutDark className="about__dark">
        <ImageDark src="./images/image-about-dark.jpg" alt="dark-about-image" />
      </AboutDark>
      <AboutContentContainer>
        <AboutContent className="about__content">
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
      <AboutLight className="about__light">
        <ImageLight
          src="./images/image-about-light.jpg"
          alt="light-about-image"
        />
      </AboutLight>
    </GridContainer>
  );
};

export default MainGrid;
