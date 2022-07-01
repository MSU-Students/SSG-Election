import { Representative } from 'src/interfaces/representative.interface';
import { MutationTree } from 'vuex';
import { RepresentativeStateInterface } from './state';

const mutation: MutationTree<RepresentativeStateInterface> = {
  setNewRepresentative(state, payload) {
    state.newRepresentative = payload;
  },
  updateRepresentative(state, payload) {
    state.newRepresentative = payload;
  },
  deleteRepresentative(state, payload: any) {
    state.allRepresentative.push(payload);
  },

  getAllRepresentative(state, payload) {
    state.allRepresentative = [];
    state.allRepresentative.push(...payload);
  },

  getOneRepresentative(state, payload) {
    state.allRepresentative = payload;
  },
};

export default mutation;
