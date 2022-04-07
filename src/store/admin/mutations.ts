import { Admin } from 'src/interfaces/admin.interface';
import { MutationTree } from 'vuex';
import { AdminStateInterface } from './state';

const mutation: MutationTree<AdminStateInterface> = {
  setNewAdmin(state, payload: Admin) {
    state.newAdmin= payload;
  },
  updateAdmin(state, payload: Admin) {
    state.newAdmin = payload;
  },
  deleteAdmin(state, payload: any) {
    state.allAdmin.push(payload);
  },

  getAllAdmin(state, payload) {
    state.allAdmin = [];
    state.allAdmin.push(...payload);
  },

  getOneAdmin(state, payload) {
    state.allAdmin = payload;
  },
};

export default mutation;
