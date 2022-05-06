import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { TempRepStateInterface } from './state';

const getters: GetterTree<TempRepStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;
