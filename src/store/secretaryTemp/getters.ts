import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SectTempStateInterface } from './state';

const getters: GetterTree<SectTempStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;
