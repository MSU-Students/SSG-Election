import { MutationTree } from 'vuex';
import { CandidateAccountStateInterface, CandidateAccountInfo} from './state';

const mutation: MutationTree<CandidateAccountStateInterface> = {
  addAccount (state, newAccount:CandidateAccountInfo) {
    state.account.push(newAccount);
  },
  updateAccount (state, updateAccount:CandidateAccountInfo) {
    const index = state.account.findIndex((s) => {
      return s.username == updateAccount.username;
    })
    if (index >= 0) {
      state.account.splice(index, 1, updateAccount);
    }
  },
  removeAccount (state, targetAccount:CandidateAccountInfo) {
    const index = state.account.findIndex((s) => {
      return s.username == targetAccount.username;
    })
    if (index >= 0) {
      state.account.splice(index, 1);
    }
  }
};

export default mutation;
