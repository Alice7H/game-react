import  * as Style from './styles';

type Props = {
  onClick: ()=> void;
}

export const Button = ({onClick}: Props) => {
  return (
    <Style.Button type="button" onClick={onClick}>Start</Style.Button>
  )
}