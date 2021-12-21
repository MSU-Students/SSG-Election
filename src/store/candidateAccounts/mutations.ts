import { MutationTree } from "vuex";
import { CandidateAccountStateInterface, CandidateAccountInfo } from "./state";

const mutation: MutationTree<CandidateAccountStateInterface> = {
  addNewCandidateAccount(state, payload: CandidateAccountInfo) {
    state.allCandidateAccount.push(payload);
  },
  setCandidateAccount(state, payload: CandidateAccountInfo) {
    const index = state.allCandidateAccount.findIndex(
      (s) => s.candidateID === payload.candidateID
    );
    if (index >= 0) {
      state.allCandidateAccount.splice(index, 1, payload);
    }
  },
  deleteCandidateAccount(state, payload: CandidateAccountInfo) {
    const index = state.allCandidateAccount.findIndex(
      (s) => s.candidateID === payload.candidateID
    );
    if (index >= 0) {
      state.allCandidateAccount.splice(index, 1);
    }
  },
};

export default mutation;
