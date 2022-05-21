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
    await this.dispatch('student/appointStudent', payload.rep2, { root: true });
    await this.dispatch('student/appointStudent', payload.rep1, { root: true });
  },

  async editVoteRep(context, payload: any): Promise<any> {
    const result = await voterepservice.update(payload.voterep_id, payload);
    context.commit('updateVoteRep', result);
    await context.dispatch('getAllVoteRep');
  },

  async deleteVoteRep(context, voterep_id: number): Promise<any> {
    const result = await voterepservice.delete(voterep_id);
    context.commit('deleteVoteRep', result);
    await context.dispatch('getAllVoteRep');
    
  },

  async getAllVoteRep(context): Promise<any> {
    const res = (await voterepservice.getAll()) as unknown as VoteRepDto[];
    const rep1 = res.map((i) => ({
      name: `${i.rep1.last_name}, ${i.rep1.first_name} ${i.rep1.middle_name}`,
      course: i.rep1.course,
      admitted: i.rep1.yr_admitted,
      department: i.rep1.department,
      totalVote: res.filter((s) => s.rep1.school_id === i.rep1.school_id)
        .length,
    }));
    const rep2 = res.map((i) => ({
      name: `${i.rep2.last_name}, ${i.rep2.first_name} ${i.rep2.middle_name}`,
      course: i.rep2.course,
      admitted: i.rep2.yr_admitted,
      department: i.rep2.department,
      totalVote: res.filter((s) => s.rep2.school_id === i.rep2.school_id)
        .length,
    }));
    // const newRes = [...rep1, ...rep2];
    // context.commit('getAllVoteRep', newRes);
    await this.dispatch('student/getAllStudent');
  },

  async getOneVoteRep(context, voterep_id: number): Promise<any> {
    const res = await voterepservice.getOne(voterep_id);
    context.commit('getOneVoteRep', res);
  },
};

export default actions;
