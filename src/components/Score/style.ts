import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #BF712B;
  width: 100px;
  height: 480px;
  border: 6px solid #F4B46D;
  box-shadow: 0 0 5px #3E1900 inset;
  box-sizing: border-box;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #ffffff;
  margin-top: 20px;
`
export const Points = styled.p`
  font-size: 16px;
  padding: 0px 27px;
  margin: 1rem 0px;
`
export const Cash = styled.span`
  background-image: url('./assets/coin.png');
  background-size: cover;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 73px;
  left: 490px;
`
export const Description = styled.p `
  font-size: 16px;
  margin-left: 10px;
`