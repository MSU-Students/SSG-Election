import { MutationTree } from 'vuex';
import { TempRepStateInterface, TempRep } from './state';

const mutation: MutationTree<TempRepStateInterface> = {
  setNewTempRep(state, payload: TempRep) {
    state.allTempRep.push(payload);
  },
  updateTempRep(state, payload: TempRep) {
    const index = state.allTempRep.findIndex((s) => s.temp_tally_id === payload.temp_tally_id);
    if (index >= 0) {
      state.allTempRep.splice(index, 1, payload);
    }
  },
  deleteTempRep(state, payload: TempRep) {
    const index = state.allTempRep.findIndex((s) => s.temp_tally_id === payload.temp_tally_id);
    if (index >= 0) {
      state.allTempRep.splice(index, 1);
    }
  },
};

export default mutation;
