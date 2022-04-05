import { VoteSsg } from 'src/interfaces/vote-ssg.interface';
import { VoteSsgDto } from 'src/services/rest-api';

export interface VoteSsgStateInterface {
  allVoteSsg: VoteSsgDto[];
  newVoteSsg?: VoteSsg;
}

function state(): VoteSsgStateInterface {
  return {
    allVoteSsg: [],
  };
}

export default state;
