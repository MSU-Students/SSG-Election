import { PrimeMinister } from 'src/interfaces/prime-minister.interface';
import { MutationTree } from 'vuex';
import { PrimeMinisterStateInterface } from './state';

const mutation: MutationTree<PrimeMinisterStateInterface> = {
  setNewPrimeMinister(state, payload: PrimeMinister) {
    state.newPrimeMinister = payload;
  },
  updatePrimeMinister(state, payload: PrimeMinister) {
    state.newPrimeMinister = payload;
  },
  deletePrimeMinister(state, payload: any) {
    state.allPrimeMinister.push(payload);
  },

  getAllPrimeMinister(state, payload) {
    state.allPrimeMinister = [];
    state.allPrimeMinister.push(...payload);
  },

  getOnePrimeMinister(state, payload) {
    state.allPrimeMinister = payload;
  },
};

export default mutation;
