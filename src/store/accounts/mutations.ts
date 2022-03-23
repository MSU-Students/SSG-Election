import { User } from 'src/interfaces/User.interface';
import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
  setNewv(state, payload: User) {
    state.newUser= payload;
  },
  updateUser(state, payload: User) {
    state.newUser = payload;
  },
  deleteUser(state, payload: any) {
    state.allUser.push(payload);
  },

  getAllUser(state, payload) {
    state.allUser = [];
    state.allUser.push(...payload);
  },

  getOneUser(state, payload) {
    state.allUser = payload;
  },
};

export default mutation;
