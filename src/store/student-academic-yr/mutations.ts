import { StudentAcademicYr } from 'src/interfaces/student-academic-yr.interface';
import { MutationTree } from 'vuex';
import { StudentAcademicYrStateInterface } from './state';

const mutation: MutationTree<StudentAcademicYrStateInterface> = {
  setNewStudentAcademicYr(state, payload: StudentAcademicYr) {
    state.newStudentAcademicYr = payload;
  },
  updateStudentAcademicYr(state, payload: StudentAcademicYr) {
    state.newStudentAcademicYr = payload;
  },
  deleteStudentAcademicYr(state, payload: any) {
    state.allStudentAcademicYr.push(payload);
  },

  getAllStudentAcademicYr(state, payload) {
    state.allStudentAcademicYr = [];
    state.allStudentAcademicYr.push(...payload);
  },

  getOneStudentAcademicYr(state, payload) {
    state.allStudentAcademicYr = payload;
  },
};

export default mutation;
