import { mapSpots } from "../data/mapSpot";
import { Reward } from '../types/Reward';

const generateRandomPosition = () => {
  const mapSize = 16;
  return Math.floor(Math.random() * mapSize);
}

export const generateValidPosition = ({x: oldX, y: oldY}: Reward) => {
 let x=0, y=0, isInvalid= true;
 do {
   x = generateRandomPosition();
   y = generateRandomPosition();
   isInvalid = mapSpots[y][x] !== 1 && mapSpots[y][x] !== mapSpots[oldY][oldX];
 } while(isInvalid);
  return {x, y};
}