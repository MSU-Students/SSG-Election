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
    await context.dispatch('candidate/getAllCandidate', undefined, {
      root: true,
    });
    // top 2 with highest vote will return
    const candidates = context.rootState.candidate.allCandidate;
    const reps = res.map((rep) => {
      const can = candidates.map((can, i) => {
        if (can.student?.student_id == rep.rep1.student_id) {
          console.log(can.student?.student_id, can.student?.first_name);
        } else if (can.student?.student_id == rep.rep2.student_id) {
          console.log(can.student?.student_id, can.student?.first_name);
        }
      });
      console.log(can);
    });
    console.log('res', res);
    context.commit('getAllVoteRep', res);
    await this.dispatch('student/getAllStudent');
  },

  async getOneVoteRep(context, voterep_id: number): Promise<any> {
    const res = await voterepservice.getOne(voterep_id);
    context.commit('getOneVoteRep', res);
  },
};

export default actions;
