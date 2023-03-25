import * as Style from './styles';
import { Reward } from '../../types/Reward';

export const Coin = ({x, y}: Reward) => {
  const size = 30;

  return (
    <Style.Container left={x * size} top={y * size}>
    </Style.Container>
  );
}