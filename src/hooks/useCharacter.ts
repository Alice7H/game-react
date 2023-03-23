import {useState} from 'react';
import { Character } from '../types/Character';
import { Sides } from '../commons/Sides';
import { mapSpots } from '../data/mapSpot';


export const useCharacter = (name : string) => {
  const initialCharacter = {
    id: 0,
    name: name,
    velocity: 30,
    x: 5,
    y: 6,
    backgroundImage: './assets/char.png',
    side: Sides.down,
  }
  const [character, setCharacter] = useState<Character>(initialCharacter);

  const moveLeft = () =>{
    setCharacter(prev=>({
    ...prev,
      x: canMove(prev.x - 1, prev.y) ? prev.x - 1 : prev.x,
      side: Sides.left
    }))
  }

  const moveRight = () => {
      setCharacter(prev=>({
        ...prev,
        x: canMove(prev.x + 1, prev.y) ? prev.x + 1 : prev.x,
        side: Sides.right
      }))
  }
  const moveUp = () => {
    setCharacter(prev=>({
      ...prev,
      y: canMove(prev.x, prev.y - 1) ? prev.y - 1 : prev.y,
      side: Sides.up
    }))
  }

  const moveDown = () => {
    setCharacter(prev=>({
      ...prev,
      y: canMove(prev.x, prev.y + 1) ? prev.y + 1 : prev.y,
      side: Sides.down
    }))
 }

  const canMove = (x: number, y: number) => {
    if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined){
      if(mapSpots[y][x] === 1) return true;
    }
    return false;
  }

  return {
    character,
    moveLeft,
    moveRight,
    moveUp,
    moveDown
  };
}