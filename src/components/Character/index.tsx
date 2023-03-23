import { Sides } from '../../commons/Sides';
import * as Style from './styles';

type Props = {
  side: Sides
  x: number
  y: number
  backgroundImage: string
  velocity: number,
  name: string,
}

export const Character = ({name, velocity, side, x, y, backgroundImage}: Props ) => {
  const size = 30;
  const positionX = x * velocity;
  const positionY = y * velocity;

  return(
    <Style.Container
      backgroundImage={backgroundImage}
      size={size}
      left={positionX}
      top={positionY}
      side={side ?? 0}
    >
      <Style.Ballon>{name}</Style.Ballon>
    </Style.Container>
  );
}