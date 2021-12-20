import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { CandidateAccountStateInterface, CandidateAccountInfo } from './state';

const actions: ActionTree<CandidateAccountStateInterface, StateInterface> = {
  newCandidateAccount(context, newAccount: CandidateAccountInfo) {
    // call your server API
      context.commit('addAccount', newAccount);

  },
  editCandidateAccount(context, updateAccount: CandidateAccountInfo) {
    // call your server API
    context.commit('updateAccount', updateAccount);
  },
  deleteCandidateAccount(context, targetAccount: CandidateAccountInfo) {
    // call your server API
    context.commit('removeAccount', targetAccount);
  },
};

export default actions;
