import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
  grid-template-areas:
    'hero hero hero hero content content content'
    'hero hero hero hero content content content'
    'about_dark about_dark about_content about_content about_content about_light about_light'
    'about_dark about_dark about_content about_content about_content about_light about_light';
`;
