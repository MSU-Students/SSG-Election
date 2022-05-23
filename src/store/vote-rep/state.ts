import { VoteRep } from 'src/interfaces/vote-rep.interface';
import { VoteRepDto } from 'src/services/rest-api';

export interface VoteRepStateInterface {
  allVoteRep: VoteRepDto[];
  rep1?: VoteRepDto;
  rep2?: VoteRepDto;
  newVoteRep?: VoteRep;
}

function state(): VoteRepStateInterface {
  return {
    allVoteRep: [],
  };
}

export default state;
