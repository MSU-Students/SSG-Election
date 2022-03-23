import { TempTally } from 'src/interfaces/temp-tally.interface';
import { MutationTree } from 'vuex';
import { TempTallyStateInterface } from './state';

const mutation: MutationTree<TempTallyStateInterface> = {
  setNewTempTally(state, payload: TempTally) {
    state.newTempTally = payload;
  },
  updateTempTally(state, payload: TempTally) {
    state.newTempTally = payload;
  },
  deleteTempTally(state, payload: any) {
    state.allTempTally.push(payload);
  },

  getAllTempTally(state, payload) {
    state.allTempTally = [];
    state.allTempTally.push(...payload);
  },

  getOneTempTally(state, payload) {
    state.allTempTally = payload;
  },
};

export default mutation;
