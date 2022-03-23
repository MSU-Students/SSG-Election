import { Candidate } from 'src/interfaces/candidate.interface';
import { MutationTree } from 'vuex';
import { CandidateStateInterface } from './state';

const mutation: MutationTree<CandidateStateInterface> = {
  setNewCandidate(state, payload: Candidate) {
    state.newCandidate= payload;
  },
  updateCandidate(state, payload: Candidate) {
    state.newCandidate = payload;
  },
  deleteCandidate(state, payload: any) {
    state.allCandidate.push(payload);
  },

  getAllCandidate(state, payload) {
    state.allCandidate = [];
    state.allCandidate.push(...payload);
  },

  getOneCandidate(state, payload) {
    state.allCandidate = payload;
  },
};

export default mutation;
