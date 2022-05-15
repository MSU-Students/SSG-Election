import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { RepresentativeStateInterface } from './state';

const getters: GetterTree<RepresentativeStateInterface, StateInterface> = {
  representativeStatus (state) {
    return state.allRepresentative.filter((i) =>
      /^Representative$/i.test(i.voterep?.student?.student_type || '')
    );
  }
};

export default getters;
