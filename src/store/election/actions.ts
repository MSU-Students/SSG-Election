import { Election } from 'src/interfaces/election.interface';
import electionservice from 'src/services/election.service';
import { ElectionDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ElectionStateInterface } from './state';

const actions: ActionTree<ElectionStateInterface, StateInterface> = {
  async addElection(context, payload: ElectionDto): Promise<void> {
    const result = await electionservice.create(payload);
    context.commit('setNewElection', result);
    await context.dispatch('getAllElection');
  },

  async editElection(context, payload: any): Promise<any> {
    const result = await electionservice.update(payload.election_id, payload);
    context.commit('updateElection', result);
    await context.dispatch('getAllElection');
  },

  async deleteElection(context, election_id: number): Promise<any> {
    const result = await electionservice.delete(election_id);
    context.commit('deleteElection', result);
    await context.dispatch('getAllElection');
  },

  async getAllElection(context): Promise<any> {
    const res = await electionservice.getAll();
    context.commit('getAllElection', res);
  },

  async getOneElection(context, election_id: number): Promise<any> {
    const res = await electionservice.getOne(election_id);
    context.commit('getOneElection', res);
  },
};

export default actions;
