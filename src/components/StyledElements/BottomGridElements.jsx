import styled from 'styled-components';
//importing colors
import colors from '../Colors';
//creating styled elements
export const AboutDark = styled.div`
  grid-area: about_dark;
`;
export const AboutLight = styled.div`
  grid-area: about_light;
`;
export const AboutContentContainer = styled.div`
  grid-area: about_content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AboutContent = styled.div`
  width: 85%;
`;
export const TitleBottom = styled.h2`
  padding: 20px 0;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
`;
export const DescriptionBottom = styled.div`
  font-size: 15px;
  line-height: 1.7;
  color: ${colors.dark_gray};
  padding-bottom: 50px;
`;
export const ImageLight = styled.img`
  width: 100%;
`;
export const ImageDark = styled.img`
  width: 100%;
`;
