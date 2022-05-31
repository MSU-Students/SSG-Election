import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PositionStateInterface } from './state';

const getters: GetterTree<PositionStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
