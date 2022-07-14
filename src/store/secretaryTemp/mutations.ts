import { MutationTree } from 'vuex';
import { SectTemp, SectTempStateInterface } from './state';

const mutation: MutationTree<SectTempStateInterface> = {
  setNewSectTemp(state, payload: SectTemp) {
    const exist = state.allSectTemp.find(
      (rep) =>
        rep.first_name == payload.first_name &&
        rep.last_name == payload.last_name
    );
    if (!exist && state.allSectTemp.length < state.limit) {
      state.allSectTemp.push(payload);
    }
  },
  updateSectTemp(state, payload: SectTemp) {
    const index = state.allSectTemp.findIndex((s) => s.id === payload.id);
    if (index >= 0) {
      state.allSectTemp.splice(index, 1, payload);
    }
  },
  deleteSectTemp(state, payload: SectTemp) {
    const index = state.allSectTemp.findIndex((s) => s.id === payload.id);
    if (index >= 0) {
      state.allSectTemp.splice(index, 1);
    }
  },
  clear(state) {
    state.allSectTemp = [];
  },
};

export default mutation;
