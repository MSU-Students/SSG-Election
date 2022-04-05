import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteSsgStateInterface } from './state';

const getters: GetterTree<VoteSsgStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
