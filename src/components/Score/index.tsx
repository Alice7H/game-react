import * as Style from './style';
type Props = {
  total: number;
}

export const Score = ({total}: Props) => {
  return (
    <Style.Container>
      <Style.Title>Pontos:</Style.Title>
        <Style.Points><Style.Cash />{total}</Style.Points>
      <Style.Description>Ajude a Mariana coletar as moedas</Style.Description>
    </Style.Container>
  );
}