import { VoteRepDto } from '../../services/rest-api/api';
import voterepservice from 'src/services/vote-rep.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteRepStateInterface } from './state';

const actions: ActionTree<VoteRepStateInterface, StateInterface> = {
  async addVoteRep(context, payload: VoteRepDto): Promise<void> {
    const result = await voterepservice.create(payload);
    context.commit('setNewVoteRep', result);
    await context.dispatch('getAllVoteRep');
  },

  async editVoteRep(context, payload: any): Promise<any> {
    const result = await voterepservice.update(payload.itemCode, payload);
    context.commit('updateVoteRep', result);
    await context.dispatch('getAllVoteRep');
  },

  async deleteVoteRep(context, voterep_id: number): Promise<any> {
    const result = await voterepservice.deleteOne(voterep_id);
    context.commit('deleteVoteRep', result);
  },

  async getAllVoteRep(context): Promise<any> {
    const res = await voterepservice.getAll();
    context.commit('getAllVoteRep', res);
  },

  async getOneVoteRep(context, voterep_id: number): Promise<any> {
    const res = await voterepservice.getOne(voterep_id);
    context.commit('getOneVoteRep', res);
  },
};

export default actions;
