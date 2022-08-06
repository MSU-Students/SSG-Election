import { VoteSsgDto } from '../../services/rest-api/api';
import votessgservice from 'src/services/vote-ssg.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteSsgStateInterface, ISsgVote, IRepresentativeVote } from './state';

const actions: ActionTree<VoteSsgStateInterface, StateInterface> = {
  async addVoteSsg(context, payload: VoteSsgDto): Promise<void> {
    payload.student = this.state.auth.currentUser?.student;
    const check = this.state.auth.currentUser?.student;
    const result = await votessgservice.create(payload);
    context.commit('setNewVoteSsg', result);
    await context.dispatch('getAllVoteSsg');
    await this.dispatch('student/editStudent', {
      ...check,
      rep_status: 'Voted',
    });
  },

  async editVoteSsg(context, payload: any): Promise<any> {
    const result = await votessgservice.update(payload.votessg_id, payload);
    context.commit('updateVoteSsg', result);
    await context.dispatch('getAllVoteSsg');
  },

  async deleteVoteSsg(context, votessg_id: number): Promise<any> {
    const result = await votessgservice.delete(votessg_id);
    context.commit('deleteVoteSsg', result);
    await context.dispatch('getAllVoteSsg');
  },

  async getAllVoteSsg(context): Promise<any> {
    const res = (await votessgservice.getAll()) as unknown as VoteSsgDto[];
    await context.dispatch('representative/getAllRepresentative', undefined, {
      root: true,
    });

    const representative = context.rootState.representative.allRepresentative;
    const reps = res.map((rep) => {
      representative.map((pm, i) => {
        if (pm.student?.student_id == rep.prime?.student_id) {
          context.dispatch('addVote', {
            vote: 1,
            repId: rep.prime?.student_id,
          });
        }
      });
      representative.map((es, i) => {
        if (es.student?.student_id == rep.secretary?.student_id) {
          context.dispatch('addVote', {
            vote: 1,
            repId: rep.secretary?.student_id,
          });
        }
      });
    });

    context.commit('getAllVoteSsg', res);
    await this.dispatch('student/getAllStudent');
    await this.dispatch('representative/getAllRepresentative');
    context.commit('clearSummary');
    this.state.representative.allRepresentative.forEach((reps) => {
      const matchingVotes = context.state.allVoteSsg.filter(
        (v) =>
          v.prime?.student_id == reps.student?.student_id ||
          v.secretary?.student_id == reps.student?.student_id
      );
      const votes = matchingVotes.map(
        (v) =>
          ({
            voteId: v.vote_ssg_id,
          } as ISsgVote)
      );
      context.commit('addRepSummry', {
        representative: reps,
        votes: votes,
      } as IRepresentativeVote);
    });
  },

  async getOneVoteSsg(context, votessg_id: number): Promise<any> {
    const res = await votessgservice.getOne(votessg_id);
    context.commit('getOneVoteSsg', res);
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
  },
};

export default actions;
