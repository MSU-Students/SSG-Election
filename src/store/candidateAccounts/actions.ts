import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { CandidateAccountStateInterface, CandidateAccountInfo } from "./state";

const actions: ActionTree<CandidateAccountStateInterface, StateInterface> = {
  addCandidateAccount(context, payload: CandidateAccountInfo) {
    context.commit("addNewCandidateAccount", payload);
  },

  editCandidateAccount(context, payload: CandidateAccountInfo) {
    context.commit("setCandidateAccount", payload);
  },

  deleteCandidateAccount(context, payload: CandidateAccountInfo) {
    context.commit("deleteCandidateAccount", payload);
  },
};

export default actions;
