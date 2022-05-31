import { Position } from './../../interfaces/position.interface';
import { PositionDto } from "src/services/rest-api";

export interface PositionStateInterface {
  allPosition: PositionDto[];
  newPosition?: Position;
}

function state(): PositionStateInterface {
  return {
    allPosition: [],
  };
}

export default state;
