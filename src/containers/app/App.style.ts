import styled from 'styled-components';

export const Container = styled.div `
  background-color: #24282F;
  min-height: 100vh;
  color: #FFFFFF;

  display: flex;
  justify-content: flex-start;
`;

export const Map = styled.div `
  width: 480px;
  height: 480px;
  background-image: url('./assets/map.png');
  background-position: left top;
  background-size: 100%;
  background-repeat: no-repeat;
`