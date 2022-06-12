import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteSsgStateInterface, IRepresentativeVote } from './state';

const getters: GetterTree<VoteSsgStateInterface, StateInterface> = {
  SsgOfficials(state) {
    const REP_COUNT = 1;
    const colleges = [
      ...new Set(
        state.summary.reduce(
          (prev, curr) => prev.concat([curr.representative.student?.college || '']),
          [] as string[]
        )
      ),
    ].filter((c) => c);

    return colleges.reduce(
      (prev, curr) =>
        prev.concat(
          state.summary
            .filter((can) => String(can.representative.student?.college) == curr)
            .sort((a, b) => b.votes.length - a.votes.length)
            .slice(0, REP_COUNT)
        ),
      [] as IRepresentativeVote[]
    );
  },
};

export default getters;
