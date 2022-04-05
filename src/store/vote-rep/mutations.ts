import { VoteRep } from 'src/interfaces/vote-rep.interface';
import { MutationTree } from 'vuex';
import { VoteRepStateInterface } from './state';

const mutation: MutationTree<VoteRepStateInterface> = {
  setNewVoteRep(state, payload: VoteRep) {
    state.newVoteRep = payload;
  },
  updateVoteRep(state, payload: VoteRep) {
    state.newVoteRep = payload;
  },
  deleteVoteRep(state, payload: any) {
    state.allVoteRep.push(payload);
  },

  getAllVoteRep(state, payload) {
    state.allVoteRep = [];
    state.allVoteRep.push(...payload);
  },

  getOneVoteRep(state, payload) {
    state.allVoteRep = payload;
  },
};

export default mutation;
