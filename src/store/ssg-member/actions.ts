import { IRepresentativeVote } from './../vote-ssg/state';
import { SsgMember } from 'src/interfaces/ssg-member.interface';
import ssgmemberservice from 'src/services/ssg-member.service';
import { SsgMemberDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SsgMemberStateInterface } from './state';

const actions: ActionTree<SsgMemberStateInterface, StateInterface> = {

  async addProclaimSsgMember(context, payload: any): Promise<void> {
    payload.map(async (i: any) => {
      const newPayload = {
        student: i.representative.student?.student_id,
        user: i.representative.user?.account_id,
        position: i.representative.position,
      };
      const result = await ssgmemberservice.create(newPayload);
      context.commit('setNewSsgMember', result);
      await context.dispatch('getAllSsgMember');
    });
  },

  async proclaimAllOfficers (context, payload: IRepresentativeVote[]) {
    payload.map(async (c) => {
      const check = c.representative.user;
      await context.dispatch(
        'student/appointStudent',
        c.representative.student?.student_id,
        { root: true }
      );
      await context.dispatch('account/changeStatus', {
        ...check,
        userType: 'rep',
      });
    });
  },

  async editSsgMember(context, payload: any): Promise<any> {
    const result = await ssgmemberservice.update(payload.ssgmember_id, payload);
    context.commit('updateSsgMember', result);
    await context.dispatch('getAllSsgMember');
  },

  async deleteSsgMember(context, ssgmember_id: number): Promise<any> {
    const result = await ssgmemberservice.delete(ssgmember_id);
    context.commit('deleteSsgMember', result);
    await context.dispatch('getAllSsgMember');
  },

  async getAllSsgMember(context): Promise<any> {
    const res = await ssgmemberservice.getAll();
    context.commit('getAllSsgMember', res);
  },

  async getOneSsgMember(context, ssgmember_id: number): Promise<any> {
    const res = await ssgmemberservice.getOne(ssgmember_id);
    context.commit('getOneSsgMember', res);
  },
};

export default actions;
