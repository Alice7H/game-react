import { useEffect } from 'react';
import { Character } from '../../components/Character';
import { Keys } from '../../commons/Keys';
import { useCharacter } from '../../hooks/useCharacter';
import * as Style from './App.style';

function App() {
  const char = useCharacter('Mariana');
  const { name, side, x, y, backgroundImage, velocity } = char.character;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch(event.key) {
        case 'a':
        case Keys.left:
          char.moveLeft(); break;
        case 'd':
        case Keys.right:
          char.moveRight(); break;
        case 'w':
        case Keys.up:
          char.moveUp(); break;
        case 's':
        case Keys.down:
          char.moveDown(); break;
        default:
          break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <Style.Container>
      <Style.Map>
        <Character
          name={name}
          backgroundImage={backgroundImage}
          x={x}
          y={y}
          side={side}
          velocity={velocity}
        />
      </Style.Map>
    </Style.Container>
  );
}

export default App;
