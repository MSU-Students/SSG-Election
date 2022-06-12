import { RepresentativeDto } from './../../services/rest-api/api';
import { VoteSsg } from 'src/interfaces/vote-ssg.interface';
import { VoteSsgDto } from 'src/services/rest-api';

export interface ISsgVote {
  voteId: number;
  repPlace: string; //rep1 | rep2
}
export interface IRepresentativeVote {
  representative: RepresentativeDto,
  votes: ISsgVote[]
}
export interface VoteSsgStateInterface {
  allVoteSsg: VoteSsgDto[];
  prime?: VoteSsgDto;
  secretary?: VoteSsgDto;
  newVoteSsg?: VoteSsg;
  summary:IRepresentativeVote[];
}

function state(): VoteSsgStateInterface {
  return {
    allVoteSsg: [],
    summary: []
  };
}

export default state;
