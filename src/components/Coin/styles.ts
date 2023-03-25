import styled from 'styled-components';

export const Container = styled.div<{
  left: number,
  top: number
}>`
  background-image: url('./assets/coin.png');
  background-size: cover;
  width: 30px;
  height: 30px;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`