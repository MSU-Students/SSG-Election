import helperService from 'src/services/helper.service';
import studentservice from 'src/services/student.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  async importAllStudents(context, file: File) {
    const result = await helperService.uploadMasterlist(file);
    console.log('result', result)
    await studentservice.addStudent(result as unknown as any);
    // // generate account @ user entity
    // result.map((r: any) => {
    //   context.dispatch(
    //     'users/addUsers',
    //     {
    //       userType: 'student',
    //       userName: r.idNumber,
    //       password: r.studentName
    //         .split(',')[0]
    //         .replace(/[^a-zA-Z\s]/g, '')
    //         .toLowerCase(),
    //       firstName: r.studentName.split(',')[1],
    //       lastName: r.studentName.split(',')[0],
    //       idNumber: r.idNumber,
    //       disabled: false,
    //       refreshToken: '',
    //       status: 'enable',
    //     },
    //     { root: true }
    //   );
    // });A
    await context.dispatch('getAllStudent');
  },
  async addStudent(context, payload: any): Promise<any> {
    const result = await studentservice.create(payload);
    context.commit('setNewStudent', result);
    await context.dispatch('getAllStudent');
    return result;
  },
  async appointStudent(context, student_id: number) {
    const student = await studentservice.getOne(student_id);
    await studentservice.update(student_id, {
      ...student,
      student_type: 'Representative',
    });
  },
  async terminateRepresentative(context, student_id: number) {
    const student = (await studentservice.getStudent(student_id)).data;
    await studentservice.updateStudent(student_id, {
      ...student,
      student_type: 'Regular',
    });
  },
  async editStudent(context, payload: any): Promise<any> {
    const result = await studentservice.update(payload.student_id, payload);
    context.commit('updateStudent', result);
    await context.dispatch('getAllStudent');
  },

  async deleteStudent(context, student_id: number): Promise<any> {
    const result = await studentservice.delete(student_id);
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
