import { Candidate } from 'src/interfaces/candidate.interface';
import { CandidateDto } from 'src/services/rest-api';

export interface CandidateStateInterface {
  allCandidate: CandidateDto[];
  newCandidate?: Candidate;
}

function state(): CandidateStateInterface {
  return {
    allCandidate: [],
  };
}

export default state;
