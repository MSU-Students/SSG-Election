import { VoteSsgDto } from '../../services/rest-api/api';
import votessgservice from 'src/services/vote-ssg.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteSsgStateInterface } from './state';

const actions: ActionTree<VoteSsgStateInterface, StateInterface> = {
  async addVoteSsg(context, payload: VoteSsgDto): Promise<void> {
    const result = await votessgservice.create(payload);
    context.commit('setNewVoteSsg', result);
    await context.dispatch('getAllVoteSsg');
  },

  async editVoteSsg(context, payload: any): Promise<any> {
    const result = await votessgservice.update(payload.votessg_id, payload);
    context.commit('updateVoteSsg', result);
    await context.dispatch('getAllVoteSsg');
  },

  async deleteVoteSsg(context, votessg_id: number): Promise<any> {
    const result = await votessgservice.deleteOne(votessg_id);
    context.commit('deleteVoteSsg', result);
  },

  async getAllVoteSsg(context): Promise<any> {
    const res = await votessgservice.getAll();
    context.commit('getAllVoteSsg', res);
  },

  async getOneVoteSsg(context, votessg_id: number): Promise<any> {
    const res = await votessgservice.getOne(votessg_id);
    context.commit('getOneVoteSsg', res);
  },
};

export default actions;
