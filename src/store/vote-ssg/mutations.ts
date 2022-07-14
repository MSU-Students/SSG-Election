import { VoteSsgDto } from './../../services/rest-api/api';
import { VoteSsg } from 'src/interfaces/vote-ssg.interface';
import { MutationTree } from 'vuex';
import { VoteSsgStateInterface, IRepresentativeVote } from './state';

const mutation: MutationTree<VoteSsgStateInterface> = {
  setNewVoteSsg(state, payload: VoteSsg) {
    state.newVoteSsg = payload;
  },
  updateVoteSsg(state, payload: VoteSsg) {
    state.newVoteSsg = payload;
  },
  deleteVoteSsg(state, payload: any) {
    state.allVoteSsg.push(payload);
  },

  getAllVoteSsg(state, payload: VoteSsgDto[]) {
    const prime = payload.map((i) => ({
      name: `${i.prime?.last_name}, ${i.prime?.first_name} ${i.prime?.middle_name}`,
      course: i.prime?.course,
      admitted: i.prime?.yr_admitted,
      department: i.prime?.department,
      totalVote: payload.filter(
        (s) => s.prime?.school_id === i.prime?.school_id
      ).length,
    }));
    const secretary = payload.map((i) => ({
      name: `${i.secretary?.last_name}, ${i.secretary?.first_name} ${i.secretary?.middle_name}`,
      course: i.secretary?.course,
      admitted: i.secretary?.yr_admitted,
      department: i.secretary?.department,
      totalVote: payload.filter(
        (s) => s.secretary?.school_id === i.secretary?.school_id
      ).length,
    }));

    state.allVoteSsg = [];
    state.allVoteSsg.push(...payload);
    state.prime = prime[0] as unknown as VoteSsgDto;
    state.secretary = secretary[0] as unknown as VoteSsgDto;
  },

  getOneVoteSsg(state, payload) {
    state.allVoteSsg = payload;
  },

  addVote(state, payload) {},
  addRepSummry(state, summary: IRepresentativeVote) {
    state.summary.push(summary);
  },
  clearSummary(state) {
    state.summary = [];
  },
};

export default mutation;
