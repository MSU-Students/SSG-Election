import { MutationTree } from 'vuex';
import { VoteTemp, VoteTempStateInterface } from './state';

const mutation: MutationTree<VoteTempStateInterface> = {
  setNewVoteTemp(state, payload: VoteTemp) {
    const exist = state.allVoteTemp.find(
      (rep) =>
        rep.first_name == payload.first_name &&
        rep.last_name == payload.last_name
    );
    if (!exist && state.allVoteTemp.length < state.limit) {
      state.allVoteTemp.push(payload);
    }
  },
  updateVoteTemp(state, payload: VoteTemp) {
    const index = state.allVoteTemp.findIndex((s) => s.id === payload.id);
    if (index >= 0) {
      state.allVoteTemp.splice(index, 1, payload);
    }
  },
  deleteVoteTemp(state, payload: VoteTemp) {
    const index = state.allVoteTemp.findIndex((s) => s.id === payload.id);
    if (index >= 0) {
      state.allVoteTemp.splice(index, 1);
    }
  },
  clear(state) {
    state.allVoteTemp = [];
  },
};

export default mutation;
