import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CandidateStateInterface } from './state';

const getters: GetterTree<CandidateStateInterface, StateInterface> = {
  representativeStatus (state) {
    return state.allCandidate.filter((i) =>
      /^Representative$/i.test(i.student?.student_type || '')
    );
  }
};

export default getters;
