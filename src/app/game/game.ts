import { Player } from "../roster/player/player";

export interface Game {
  players: Array<Player>;
  subRate: number;
  playersPerSub: number;
}
