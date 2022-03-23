import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentAcademicYrStateInterface } from './state';

const getters: GetterTree<StudentAcademicYrStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
