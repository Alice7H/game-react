import { useCallback, useState } from 'react';
import { generateValidPosition } from '../commons/randomPosition';
import { Reward } from "../types/Reward";

export const useReward = () => {
  const [reward, setReward] = useState<Reward>({x: 2, y: 2, value: 10});

   const changeRewardPosition = useCallback(() => {
    const {x: posX, y: posY} = generateValidPosition(reward);
    setReward({x: posX, y: posY, value: reward.value});
  }, [reward]);

  return {reward, changeRewardPosition}
}