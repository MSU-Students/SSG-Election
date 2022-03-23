import { Voter } from 'src/interfaces/voter.interface';
import { MutationTree } from 'vuex';
import { VoterStateInterface } from './state';

const mutation: MutationTree<VoterStateInterface> = {
  setNewVoter(state, payload: Voter) {
    state.newVoter = payload;
  },
  updateVoter(state, payload: Voter) {
    state.newVoter = payload;
  },
  deleteVoter(state, payload: any) {
    state.allVoter.push(payload);
  },

  getAllVoter(state, payload) {
    state.allVoter = [];
    state.allVoter.push(...payload);
  },

  getOneVoter(state, payload) {
    state.allVoter = payload;
  },
};

export default mutation;
