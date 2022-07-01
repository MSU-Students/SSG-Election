import { MutationTree } from 'vuex';
import { TempRepStateInterface, TempRep } from './state';

const mutation: MutationTree<TempRepStateInterface> = {
  setNewTempRep(state, payload: TempRep) {
    const exist = state.allTempRep.find(
      (rep) =>
        rep.first_name == payload.first_name &&
        rep.last_name == payload.last_name
    );
    if (!exist && state.allTempRep.length < state.limit) {
      state.allTempRep.push(payload);
    }
  },
  updateTempRep(state, payload: TempRep) {
    const index = state.allTempRep.findIndex(
      (s) => s.temp_tally_id === payload.temp_tally_id
    );
    if (index >= 0) {
      state.allTempRep.splice(index, 1, payload);
    }
  },
  deleteTempRep(state, payload: TempRep) {
    const index = state.allTempRep.findIndex(
      (s) => s.temp_tally_id === payload.temp_tally_id
    );
    if (index >= 0) {
      state.allTempRep.splice(index, 1);
    }
  },
  clear(state) {
    state.allTempRep = [];
  },
};

export default mutation;
