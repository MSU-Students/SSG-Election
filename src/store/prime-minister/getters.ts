import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PrimeMinisterStateInterface } from './state';

const getters: GetterTree<PrimeMinisterStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
