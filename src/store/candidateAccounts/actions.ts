import { Candidate } from 'src/interfaces/candidate.interface';
import candidateservice from 'src/services/candidate.service';
import { CandidateDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { CandidateStateInterface } from './state';

const actions: ActionTree<CandidateStateInterface, StateInterface> = {
  async addCandidate(context, payload: CandidateDto): Promise<void> {
    const result = await candidateservice.create(payload);
    context.commit('setNewCandidate', result);
    await context.dispatch('getAllCandidate');
  },

  async editCandidate(context, payload: any): Promise<any> {
    const result = await candidateservice.update(payload.itemCode, payload);
    context.commit('updateCandidate', result);
    await context.dispatch('getAllCandidate');
  },

  async deleteCandidate(context, candidate_id: number): Promise<any> {
    const result = await candidateservice.deleteOne(candidate_id);
    context.commit('deleteCandidate', result);
  },

  async getAllCandidate(context): Promise<any> {
    const res = await candidateservice.getAll();
    context.commit('getAllCandidate', res);
  },

  async getOneCandidate(context, candidate_id: number): Promise<any> {
    const res = await candidateservice.getOne(candidate_id);
    context.commit('getOneCandidate', res);
  },
};

export default actions;
