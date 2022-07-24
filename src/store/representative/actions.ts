import { StudentDto, RepresentativeDto } from './../../services/rest-api/api';
import representativeservice from 'src/services/representative.service';
import studentservice from 'src/services/student.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ICandidateVote } from '../vote-rep/state';
import { RepresentativeStateInterface } from './state';

const actions: ActionTree<RepresentativeStateInterface, StateInterface> = {
  async proclaimAllCanditates(context, payload: ICandidateVote[]) {
    payload.map(async (c) => {
      const check = c.candidate.user;
      await context.dispatch(
        'student/appointStudent',
        c.candidate.student?.student_id,
        { root: true }
      );
      await this.dispatch('account/editAccount', { ...check, userType: 'rep' });
    });
  },

  async addRepresentative(context, payload): Promise<void> {
    const result = await representativeservice.create(payload);
    context.commit('setNewRepresentative', result);
    await context.dispatch('getAllRepresentative');
    // await this.dispatch('student/editStudent', {
    //   ...payload.student,
    //   student_type: 'Representative',
    // });
  },

  async addProclaimRepresentative(context, payload: any): Promise<void> {
    payload.map(async (i: any) => {
      const newPayload = {
        student: i.candidate.student?.student_id,
        user: i.candidate.user?.account_id,
        position: 'No candidacy filed',
        school_id: i.candidate.student?.school_id,
        first_name: i.candidate.student?.first_name,
        middle_name: i.candidate.student?.middle_name,
        last_name: i.candidate.student?.last_name,
      };

      const result = await representativeservice.create(newPayload);

      context.commit('setNewRepresentative', result);
      await context.dispatch('getAllRepresentative');
    });
  },

  async editRepresentative(context, payload: any): Promise<any> {
    const result = await representativeservice.update(
      payload.representative_id,
      payload
    );
    context.commit('updateRepresentative', result);
    await context.dispatch('getAllRepresentative');
  },

  async deleteRepresentative(context, representative_id: number): Promise<any> {
    const result = await representativeservice.delete(representative_id);
    context.commit('deleteRepresentative', result);
    await context.dispatch('getAllRepresentative');
  },

  async getAllRepresentative(context): Promise<any> {
    const res = await representativeservice.getAll();
    context.commit('getAllRepresentative', res);
    await this.dispatch('student/getAllStudent');
    await this.dispatch('election/getAllElection');
  },

  async getOneRepresentative(context, representative_id: number): Promise<any> {
    const res = await representativeservice.getOne(representative_id);
    context.commit('getOneRepresentative', res);
  },
};

export default actions;
