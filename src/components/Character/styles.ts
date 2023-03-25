import styled from 'styled-components';
import { Sides } from '../../commons/Sides';

export const Container = styled.div<{
  left: number,
  top: number,
  size: number,
  backgroundImage: string,
  side: Sides
}>
`
  position: absolute;
  height: 30px;
  left: ${props=> props.left}px;
  top: ${props => props.top}px;
  width: ${props => props.size}px;
  background-image: url('${props => props.backgroundImage}');
  background-position: 0px ${props => props.side}px;
`

export const Ballon = styled.p `
  background-color: #ffffff25;
  border: 1px solid #ffffff;
  border-radius: 15px;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 3px;
  position: absolute;
  left: -20px;
  top: -32px;
`