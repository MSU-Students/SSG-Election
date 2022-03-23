import { Student } from 'src/interfaces/student.interface';
import { MutationTree } from 'vuex';
import { StudentStateInterface } from './state';

const mutation: MutationTree<StudentStateInterface> = {
  setNewStudent(state, payload: Student) {
    state.newStudent = payload;
  },
  updateStudent(state, payload: Student) {
    state.newStudent = payload;
  },
  deleteStudent(state, payload: any) {
    state.allStudent.push(payload);
  },

  getAllStudent(state, payload) {
    state.allStudent = [];
    state.allStudent.push(...payload);
  },

  getOneStudent(state, payload) {
    state.allStudent = payload;
  },
};

export default mutation;
