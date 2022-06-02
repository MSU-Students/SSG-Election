import representativeservice from 'src/services/representative.service';
import studentservice from 'src/services/student.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ICandidateVote } from '../vote-rep/state';
import { RepresentativeStateInterface } from './state';

const actions: ActionTree<RepresentativeStateInterface, StateInterface> = {
  async proclaimAllCanditates(context, payload: ICandidateVote[]) {
    payload.map(async (c) => {
      await context.dispatch(
        'student/appointStudent',
        c.candidate.student?.student_id,
        { root: true }
      );
    });
  },

  async addRepresentative(context, payload: any): Promise<void> {
    console.log(payload);
    payload.map(async (i: any) => {
      const newPayload = {
        candidate: i.candidate.candidate_id,
        academic_yr: i.candidate.student?.yr_admitted,
        position: i.candidate.position_type,
      };
      console.log('newPayload', newPayload);
      const result = await representativeservice.create(newPayload);
      console.log('result', result);
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
    await this.dispatch('getAllRepresentative');
  },

  async deleteRepresentative(context, representative_id: number): Promise<any> {
    const result = await representativeservice.delete(representative_id);
    context.commit('deleteRepresentative', result);
    await this.dispatch('getAllRepresentative');
  },

  async getAllRepresentative(context): Promise<any> {
    const res = await representativeservice.getAll();
    context.commit('getAllRepresentative', res);
  },

  async getOneRepresentative(context, representative_id: number): Promise<any> {
    const res = await representativeservice.getOne(representative_id);
    context.commit('getOneRepresentative', res);
  },
};

export default actions;
