import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SsgMemberStateInterface } from './state';

const getters: GetterTree<SsgMemberStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
