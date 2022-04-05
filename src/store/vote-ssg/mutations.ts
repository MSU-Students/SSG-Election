import { VoteSsg } from 'src/interfaces/vote-ssg.interface';
import { MutationTree } from 'vuex';
import { VoteSsgStateInterface } from './state';

const mutation: MutationTree<VoteSsgStateInterface> = {
  setNewVoteSsg(state, payload: VoteSsg) {
    state.newVoteSsg = payload;
  },
  updateVoteSsg(state, payload: VoteSsg) {
    state.newVoteSsg = payload;
  },
  deleteVoteSsg(state, payload: any) {
    state.allVoteSsg.push(payload);
  },

  getAllVoteSsg(state, payload) {
    state.allVoteSsg = [];
    state.allVoteSsg.push(...payload);
  },

  getOneVoteSsg(state, payload) {
    state.allVoteSsg = payload;
  },
};

export default mutation;
