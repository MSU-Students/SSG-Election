import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { RepresentativeStateInterface } from './state';

const getters: GetterTree<RepresentativeStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
