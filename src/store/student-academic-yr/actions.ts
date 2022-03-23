import { StudentAcademicYrDto } from './../../services/rest-api/api';
import studentacademicyrservice from 'src/services/student-academic-yr.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentAcademicYrStateInterface } from './state';

const actions: ActionTree<StudentAcademicYrStateInterface, StateInterface> = {
  async addStudentAcademicYr(context, payload: StudentAcademicYrDto): Promise<void> {
    const result = await studentacademicyrservice.create(payload);
    context.commit('setNewStudentAcademicYr', result);
    await context.dispatch('getAllStudentAcademicYr');
  },

  async editStudentAcademicYr(context, payload: any): Promise<any> {
    const result = await studentacademicyrservice.update(payload.itemCode, payload);
    context.commit('updateStudentAcademicYr', result);
    await context.dispatch('getAllStudentAcademicYr');
  },

  async deleteStudentAcademicYr(context, studentAcademicYr_id: number): Promise<any> {
    const result = await studentacademicyrservice.deleteOne(studentAcademicYr_id);
    context.commit('deleteStudentAcademicYr', result);
  },

  async getAllStudentAcademicYr(context): Promise<any> {
    const res = await studentacademicyrservice.getAll();
    context.commit('getAllStudentAcademicYr', res);
  },

  async getOneStudentAcademicYr(context, studentAcademicYr_id: number): Promise<any> {
    const res = await studentacademicyrservice.getOne(studentAcademicYr_id);
    context.commit('getOneStudentAcademicYr', res);
  },
};

export default actions;
