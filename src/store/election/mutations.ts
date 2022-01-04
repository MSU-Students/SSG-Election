import { MutationTree } from "vuex";
import { ElectionStateInterface, ElectionInfo } from "./state";

const mutation: MutationTree<ElectionStateInterface> = {
  addNewAccount(state, payload: ElectionInfo) {
    state.allAccount.push(payload);
  },
  deleteAccount(state, payload: ElectionInfo) {
    const index = state.allAccount.findIndex(
      (s) => s.electionID === payload.electionID
    );
    if (index >= 0) {
      state.allAccount.splice(index, 1);
    }
  },
};

export default mutation;
