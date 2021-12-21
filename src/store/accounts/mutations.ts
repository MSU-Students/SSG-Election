import { MutationTree } from "vuex";
import { AccountStateInterface, AccountInfo } from "./state";

const mutation: MutationTree<AccountStateInterface> = {
  addNewAccount(state, payload: AccountInfo) {
    state.allAccount.push(payload);
  },
  setAccount(state, payload: AccountInfo) {
    const index = state.allAccount.findIndex(
      (s) => s.userID === payload.userID
    );
    if (index >= 0) {
      state.allAccount.splice(index, 1, payload);
    }
  },
  deleteAccount(state, payload: AccountInfo) {
    const index = state.allAccount.findIndex(
      (s) => s.userID === payload.userID
    );
    if (index >= 0) {
      state.allAccount.splice(index, 1);
    }
  },
};

export default mutation;
