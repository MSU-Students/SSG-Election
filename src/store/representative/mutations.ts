import { Representative } from 'src/interfaces/representative.interface';
import { MutationTree } from 'vuex';
import { RepresentativeStateInterface } from './state';

const mutation: MutationTree<RepresentativeStateInterface> = {
  setNewRepresentative(state, payload) {
    const check = state.allRepresentative.findIndex((s) => {
      s.student === payload.student;
    });
    if (!check) {
      state.newRepresentative = payload;
    } else {
    }
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
