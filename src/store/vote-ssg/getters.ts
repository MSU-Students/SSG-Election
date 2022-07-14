import { VoteSsgDto } from 'src/services/rest-api';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { VoteSsgStateInterface, IRepresentativeVote } from './state';

const getters: GetterTree<VoteSsgStateInterface, StateInterface> = {
  SsgOfficials(state) {
    const REP_COUNT = 1;
    const position = [
      ...new Set(
        state.summary.reduce(
          (prev, curr) => prev.concat([curr.representative.position || '']),
          [] as string[]
        )
      ),
    ].filter((c) => c);

    return position.reduce(
      (prev, curr) =>
        prev.concat(
          state.summary
            .filter((can) => String(can.representative.position) == curr)
            .sort((a, b) => b.votes.length - a.votes.length)
            .slice(0, REP_COUNT)
        ),
      [] as IRepresentativeVote[]
    );
  },

  Result(state) {
    const res = state.summary
      .filter((s) => s.representative.position === 'Prime Minister')
      .sort((a, b) => b.votes.length - a.votes.length)
      .slice(0, 1);
    return res;
  },
};

export default getters;
