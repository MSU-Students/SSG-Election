import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { TempTallyStateInterface } from './state';

const getters: GetterTree<TempTallyStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
