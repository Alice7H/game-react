import { Sides } from '../../commons/Sides';
import * as Style from './styles';

type Props = {
  side: Sides
  x: number
  y: number
  backgroundImage: string
  name: string,
}

export const Character = ({name, side, x, y, backgroundImage}: Props ) => {
  const size = 30;
  const positionX = x * size;
  const positionY = y * size;

  return(
    <Style.Container
      left={positionX}
      top={positionY}
      size={size}
      backgroundImage={backgroundImage}
      side={side}
    >
      <Style.Ballon>{name}</Style.Ballon>
    </Style.Container>
  );
}