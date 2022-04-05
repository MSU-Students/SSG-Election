import { SsgMember } from 'src/interfaces/ssg-member.interface';
import { MutationTree } from 'vuex';
import { SsgMemberStateInterface } from './state';

const mutation: MutationTree<SsgMemberStateInterface> = {
  setNewSsgMember(state, payload: SsgMember) {
    state.newSsgMember = payload;
  },
  updateSsgMember(state, payload: SsgMember) {
    state.newSsgMember = payload;
  },
  deleteSsgMember(state, payload: any) {
    state.allSsgMember.push(payload);
  },

  getAllSsgMember(state, payload) {
    state.allSsgMember = [];
    state.allSsgMember.push(...payload);
  },

  getOneSsgMember(state, payload) {
    state.allSsgMember = payload;
  },
};

export default mutation;
