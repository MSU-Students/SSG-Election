import { Election } from 'src/interfaces/election.interface';
import { MutationTree } from 'vuex';
import { ElectionStateInterface } from './state';

const mutation: MutationTree<ElectionStateInterface> = {
  setNewElection(state, payload: Election) {
    state.newElection = payload;
  },
  updateElection(state, payload) {
    state.newElection = payload;
  },
  deleteElection(state, payload: any) {
    state.allElection.push(payload);
  },

  getAllElection(state, payload) {
    state.allElection = [];
    state.allElection.push(...payload);
  },

  getOneElection(state, payload) {
    state.allElection = payload;
  },
};

export default mutation;
