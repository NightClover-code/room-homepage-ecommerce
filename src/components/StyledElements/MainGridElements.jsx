import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* grid-template-rows: 500px; */
`;
