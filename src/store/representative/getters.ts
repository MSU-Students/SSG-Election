import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { RepresentativeStateInterface } from './state';

const getters: GetterTree<RepresentativeStateInterface, StateInterface> = {
  primePosition(state) {
    return state.allRepresentative.filter((i) =>
      /^Prime Minister$/i.test(i.position || '')
    );
  },
  secretaryPosition(state) {
    return state.allRepresentative.filter((i) =>
      /^Executive Secretary$/i.test(i.position || '')
    );
  },
};

export default getters;
