import { SsgMember } from 'src/interfaces/ssg-member.interface';
import ssgmemberservice from 'src/services/ssg-member.service';
import { SsgMemberDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SsgMemberStateInterface } from './state';

const actions: ActionTree<SsgMemberStateInterface, StateInterface> = {
  async addSsgMember(context, payload: SsgMemberDto): Promise<void> {
    const result = await ssgmemberservice.create(payload);
    context.commit('setNewSsgMember', result);
    await context.dispatch('getAllSsgMember');
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
