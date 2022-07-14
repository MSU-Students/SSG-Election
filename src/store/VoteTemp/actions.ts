import { uid } from 'quasar';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteTemp, VoteTempStateInterface } from './state';

const actions: ActionTree<VoteTempStateInterface, StateInterface> = {
  addVoteTemp(context, payload: VoteTemp) {
    const uuid = uid();
    context.commit('setNewVoteTemp', { ...payload, id: uuid });
  },

  editVoteTemp(context, payload: VoteTemp) {
    context.commit('updateVoteTemp', payload);
  },

  deleteVoteTemp(context, payload: VoteTemp) {
    context.commit('deleteVoteTemp', payload);
  },
  clear(context) {
    context.commit('clear');
  },
};

export default actions;
