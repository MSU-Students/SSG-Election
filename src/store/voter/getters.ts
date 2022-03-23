import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { VoterStateInterface } from './state';

const getters: GetterTree<VoterStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
