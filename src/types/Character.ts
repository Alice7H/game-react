import { Sides } from '../commons/Sides';

export type Character= {
  name: string,
  x:  number,
  y:  number,
  backgroundImage: string,
  side: Sides,
  velocity: number,
}
