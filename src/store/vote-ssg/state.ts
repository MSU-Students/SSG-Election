import { VoteSsg } from 'src/interfaces/vote-ssg.interface';
import { VoteSsgDto } from 'src/services/rest-api';

export interface VoteSsgStateInterface {
  allVoteSsg: VoteSsgDto[];
  prime?: VoteSsgDto;
  secretary?: VoteSsgDto;
  newVoteSsg?: VoteSsg;
}

function state(): VoteSsgStateInterface {
  return {
    allVoteSsg: [],
  };
}

export default state;
