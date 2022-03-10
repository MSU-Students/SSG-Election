import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { ElectionStateInterface, ElectionInfo } from "./state";

const actions: ActionTree<ElectionStateInterface, StateInterface> = {
  addElection(context, payload: ElectionInfo) {
    context.commit("addNewElection", payload);
  },
};

export default actions;
