import { User } from 'src/interfaces/user.interface';
import { MutationTree } from 'vuex';
import { AccountStateInterface } from './state';

const mutation: MutationTree<AccountStateInterface> = {
  setNewAccount(state, payload) {
    state.newAccount = payload;
  },
  updateAccount(state, payload) {
    state.newAccount = payload;
  },
  deleteAccount(state, payload) {
    state.allAccount.push(payload);
  },

  getAllUser(state, payload) {
    state.allAccount = [];
    state.allAccount.push(...payload);
  },

  getOneUser(state, payload) {
    state.allAccount = payload;
  },

  getProfile(state, payload) {
    state.allAccount = payload;
  },
};
export default mutation;
