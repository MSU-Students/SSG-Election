import { MutationTree } from "vuex";
import { ElectionStateInterface, ElectionInfo } from "./state";

const mutation: MutationTree<ElectionStateInterface> = {
  addNewElection(state, payload: ElectionInfo) {
    state.allElection.push(payload);
  },
};

export default mutation;
