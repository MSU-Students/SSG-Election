import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CandidateAccountStateInterface } from './state';

const getters: GetterTree<CandidateAccountStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
