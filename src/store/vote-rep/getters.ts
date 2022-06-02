import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteRepStateInterface, ICandidateVote } from './state';

const getters: GetterTree<VoteRepStateInterface, StateInterface> = {
  collegeRepresentatives(state) {
    const REP_COUNT = 2;
    const colleges = [
      ...new Set(
        state.summary.reduce(
          (prev, curr) => prev.concat([curr.candidate.student?.college || '']),
          [] as string[]
        )
      ),
    ].filter((c) => c);

    return colleges.reduce(
      (prev, curr) =>
        prev.concat(
          state.summary
            .filter((can) => String(can.candidate.student?.college) == curr)
            .sort((a, b) => b.votes.length - a.votes.length)
            .slice(0, REP_COUNT)
        ),
      [] as ICandidateVote[]
    );
  },
};

export default getters;
