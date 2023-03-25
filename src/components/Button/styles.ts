import styled from 'styled-components';

export const Button = styled.button`
  color: #ffffff;
  background-color: #3E1900;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  box-shadow: 0px 3px 0px 4px #632801;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color:#3E1900a9;
  }
  &:active {
    box-shadow: 0 3px #3E1900;
    transform: translateY(4px);
  }
`