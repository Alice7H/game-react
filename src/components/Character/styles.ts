import styled from 'styled-components';
import { Sides } from '../../commons/Sides';

export const Container = styled.div<{
  size: number,
  left: number,
  top: number,
  backgroundImage: string,
  side: Sides
}>`
width: 30px;
height: 30px;
position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  width: ${props => props.size}px;
  background-image: url('${props => props.backgroundImage}');
  background-position: 0px ${props => props.side}px;
`
export const Ballon = styled.p `
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 15px;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 2px;
  position: absolute;
  left: -20px;
  top: -45px;
`