import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteRepStateInterface } from './state';

const getters: GetterTree<VoteRepStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
