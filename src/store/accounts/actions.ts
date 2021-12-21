import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { AccountStateInterface, AccountInfo } from "./state";

const actions: ActionTree<AccountStateInterface, StateInterface> = {
  addAccount(context, payload: AccountInfo) {
    context.commit("addNewAccount", payload);
  },

  editAccount(context, payload: AccountInfo) {
    context.commit("setAccount", payload);
  },

  deleteAccount(context, payload: AccountInfo) {
    context.commit("deleteAccount", payload);
  },
};

export default actions;
