import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ElectionStateInterface } from './state';

const getters: GetterTree<ElectionStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
