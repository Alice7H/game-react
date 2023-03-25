import { useEffect, useState } from 'react';
import * as Style from './App.style';
import { useCharacter } from '../../hooks/useCharacter';
import { Character } from '../../components/Character';
import { Coin } from '../../components/Coin';
import { Score } from '../../components/Score';
import { Keys } from '../../commons/Keys';
import coinSound from '../../audios/coin.mp3';
import { useReward } from '../../hooks/useReward';

export default function App() {
  const char = useCharacter('Mariana');
  const { x, y } = char.character;
  const {reward, changeRewardPosition} = useReward();
  const [loadingPosition, setLoadingPosition] = useState<boolean>(true);
 const [score, setScore] = useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  },[handleKeyDown]);

  useEffect(() => {
    setLoadingPosition(true);
    const interval = setTimeout(()=> {
      changeRewardPosition();
      setLoadingPosition(false);
    }, 2000);
    return () => clearTimeout(interval);
  },[changeRewardPosition])

  useEffect(() => {
    const handleCollectCoin = () => {
      if(reward.x === x && reward.y === y){
        updateScore();
        new Audio(coinSound).play();
      }
    }
    const updateScore = () => {
      changeRewardPosition();
      setScore(prev => prev + reward.value);
    }
    handleCollectCoin();
  },[changeRewardPosition, reward, x, y]);

  return (
    <Style.Container>
      <Style.Map>
        <Character {...char.character} />
        {
          loadingPosition && <Coin {...reward}/>
        }
      </Style.Map>
      <Score total={score} />
    </Style.Container>
  );
}