import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  grid-template-areas:
    'hero hero hero hero content content content'
    'hero hero hero hero content content content'
    'about_dark about_dark about_content about_content about_content about_light about_light';
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 800px));
    grid-template-rows: auto;
    grid-template-areas:
      'hero'
      'content'
      'about_dark'
      'about_content'
      'about_light';
  }
`;
