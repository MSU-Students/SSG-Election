import { VoterDto } from './../../services/rest-api/api';
import voterservice from 'src/services/voter.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { VoterStateInterface } from './state';

const actions: ActionTree<VoterStateInterface, StateInterface> = {
  async addVoter(context, payload: VoterDto): Promise<void> {
    const result = await voterservice.create(payload);
    context.commit('setNewVoter', result);
    await context.dispatch('getAllVoter');
  },

  async editVoter(context, payload: any): Promise<any> {
    const result = await voterservice.update(payload.itemCode, payload);
    context.commit('updateVoter', result);
    await context.dispatch('getAllVoter');
  },

  async deleteVoter(context, voter_id: number): Promise<any> {
    const result = await voterservice.deleteOne(voter_id);
    context.commit('deleteVoter', result);
  },

  async getAllVoter(context): Promise<any> {
    const res = await voterservice.getAll();
    context.commit('getAllVoter', res);
  },

  async getOneVoter(context, voter_id: number): Promise<any> {
    const res = await voterservice.getOne(voter_id);
    context.commit('getOneVoter', res);
  },
};

export default actions;
