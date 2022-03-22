import { Election } from "src/interfaces/election.interface";
import { ElectionDto } from "src/services/rest-api";

export interface ElectionStateInterface {
  allElection: ElectionDto[];
  newElection?: Election;
}

function state(): ElectionStateInterface {
  return {
    allElection: [],
  };
}

export default state;
