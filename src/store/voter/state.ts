import { Voter } from 'src/interfaces/voter.interface';
import { VoterDto } from 'src/services/rest-api';

export interface VoterStateInterface {
  allVoter: VoterDto[];
  newVoter?: Voter;
}

function state(): VoterStateInterface {
  return {
    allVoter: [],
  };
}

export default state;
