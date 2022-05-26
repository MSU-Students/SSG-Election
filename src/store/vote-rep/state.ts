import { VoteRep } from 'src/interfaces/vote-rep.interface';
import { CandidateDto, VoteRepDto } from 'src/services/rest-api';
export interface IRepVote {
  voteId: number;
  repPlace: string; //rep1 | rep2
}
export interface ICandidateVote {
  candidate: CandidateDto,
  votes: IRepVote[]
}
export interface VoteRepStateInterface {
  allVoteRep: VoteRepDto[];
  rep1?: VoteRepDto;
  rep2?: VoteRepDto;
  newVoteRep?: VoteRep;
  summary:ICandidateVote[];
}

function state(): VoteRepStateInterface {
  return {
    allVoteRep: [],
    summary: []
  };
}

export default state;
