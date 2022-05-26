import { VoteRep } from 'src/interfaces/vote-rep.interface';
import { VoteRepDto } from 'src/services/rest-api';
import { MutationTree } from 'vuex';
import { VoteRepStateInterface, ICandidateVote } from './state';

const mutation: MutationTree<VoteRepStateInterface> = {
  setNewVoteRep(state, payload: VoteRep) {
    state.newVoteRep = payload;
  },
  updateVoteRep(state, payload: VoteRep) {
    state.newVoteRep = payload;
  },
  deleteVoteRep(state, payload: any) {
    state.allVoteRep.push(payload);
  },

  getAllVoteRep(state, payload: VoteRepDto[]) {
    const rep1 = payload.map((i) => ({
      name: `${i.rep1.last_name}, ${i.rep1.first_name} ${i.rep1.middle_name}`,
      course: i.rep1.course,
      admitted: i.rep1.yr_admitted,
      department: i.rep1.department,
      totalVote: payload.filter((s) => s.rep1.school_id === i.rep1.school_id)
        .length,
    }));
    const rep2 = payload.map((i) => ({
      name: `${i.rep2.last_name}, ${i.rep2.first_name} ${i.rep2.middle_name}`,
      course: i.rep2.course,
      admitted: i.rep2.yr_admitted,
      department: i.rep2.department,
      totalVote: payload.filter((s) => s.rep2.school_id === i.rep2.school_id)
        .length,
    }));
    // console.log(rep1, rep2);
    // const newRes = [...rep1, ...rep2];
    state.allVoteRep = [];
    state.allVoteRep.push(...payload);
    state.rep1 = rep1[0] as unknown as VoteRepDto;
    state.rep2 = rep2[0] as unknown as VoteRepDto;
  },

  getOneVoteRep(state, payload) {
    state.allVoteRep = payload;
  },

  addVote(state, payload) {},
  addCandidateSummry(state, summary: ICandidateVote) {
    state.summary.push(summary);
  },
  clearSummary(state) {
    state.summary = [];
  },
};

export default mutation;
