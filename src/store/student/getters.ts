import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';

const getters: GetterTree<StudentStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
