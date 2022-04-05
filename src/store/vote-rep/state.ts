import { VoteRep } from 'src/interfaces/vote-rep.interface';
import { VoteRepDto } from 'src/services/rest-api';

export interface VoteRepStateInterface {
  allVoteRep: VoteRepDto[];
  newVoteRep?: VoteRep;
}

function state(): VoteRepStateInterface {
  return {
    allVoteRep: [],
  };
}

export default state;
