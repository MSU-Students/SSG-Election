import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteTempStateInterface } from './state';

const getters: GetterTree<VoteTempStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;
