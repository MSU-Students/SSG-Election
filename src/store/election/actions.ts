import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { ElectionStateInterface, ElectionInfo } from "./state";

const actions: ActionTree<ElectionStateInterface, StateInterface> = {
  addAccount(context, payload: ElectionInfo) {
    context.commit("addNewAccount", payload);
  },

  deleteAccount(context, payload: ElectionInfo) {
    context.commit("deleteAccount", payload);
  },
};

export default actions;
