import { VoteRepDto } from '../../services/rest-api/api';
import voterepservice from 'src/services/vote-rep.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteRepStateInterface, IRepVote, ICandidateVote } from './state';

const actions: ActionTree<VoteRepStateInterface, StateInterface> = {
  async addVoteRep(context, payload: VoteRepDto): Promise<void> {
    payload.student = this.state.auth.currentUser?.student;
    const result = await voterepservice.create(payload);
    
    context.commit('setNewVoteRep', result);
    await context.dispatch('getAllVoteRep');
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
    // map
    const candidates = context.rootState.candidate.allCandidate;
    let votes = 0;
    const reps = res.map((rep) => {
      candidates.map((can, i) => {
        if (can.student?.student_id == rep.rep1.student_id) {
          context.dispatch('addVote', { vote: 1, repId: rep.rep1.student_id });
        } else if (can.student?.student_id == rep.rep2.student_id) {
          context.dispatch('addVote', { vote: 1, repId: rep.rep2.student_id });
        }
      });
    });

    context.commit('getAllVoteRep', res);
    await this.dispatch('student/getAllStudent');
    await this.dispatch('candidate/getAllCandidate');
    context.commit('clearSummary');
    this.state.candidate.allCandidate.forEach(candiate => {
      const matchingVotes = context.state.allVoteRep.filter(v => (
        v.rep1.student_id == candiate.student?.student_id ||
        v.rep2.student_id == candiate.student?.student_id
      ));
      const votes = matchingVotes.map(v => ({
        voteId: v.vote_rep_id,
        repPlace: (v.rep1.student_id == candiate.student?.student_id) ? 'rep1' : 'rep2'
      } as IRepVote));
      context.commit('addCandidateSummry', {
        candidate: candiate,
        votes: votes
      } as ICandidateVote)
    })
  },

  async getOneVoteRep(context, voterep_id: number): Promise<any> {
    const res = await voterepservice.getOne(voterep_id);
    context.commit('getOneVoteRep', res);
  },

  async addVote(context, payload) {
    // const { vote, repId } = payload;
    // await context.dispatch('candidate/getAllCandidate', undefined, {
    //   root: true,
    // });
    // const candidates = context.rootState.candidate.allCandidate;
    // const canWithVotes = candidates.map((c: any) => {
    //   if (c.student?.student_id === repId) {
    //     return {
    //       ...c,
    //       totalVotes: (vote + (c.totalVotes)) || vote
    //     }
    //   }
    // })
    // console.log('canWithVotes', canWithVotes)
  },
};

export default actions;
