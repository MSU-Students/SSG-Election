import studentservice from 'src/services/student.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  async addStudent(context, payload: any): Promise<any> {
    const result = await studentservice.create(payload);
    context.commit('setNewStudent', result);
    await context.dispatch('getAllStudent');
  },

  async editStudent(context, payload: any): Promise<any> {
    const result = await studentservice.update(payload.student_id, payload);
    context.commit('updateStudent', result);
    await context.dispatch('getAllStudent');
  },

  async deleteStudent(context, student_id: number): Promise<any> {
    const result = await studentservice.deleteStudent(student_id);
    context.commit('deleteStudent', result);
    await context.dispatch('getAllStudent');
  },

  async getAllStudent(context): Promise<any> {
    const res = await studentservice.getAll();
    context.commit('getAllStudent', res);
  },

  async getOneStudent(context, student_id: number): Promise<any> {
    const res = await studentservice.getOne(student_id);
    context.commit('getOneStudent', res);
  },
};

export default actions;
