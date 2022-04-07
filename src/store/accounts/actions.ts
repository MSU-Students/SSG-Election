import { User } from 'src/interfaces/User.interface';
import userservice from 'src/services/user.service';
import { UserDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  async addUser(context, payload: UserDto): Promise<void> {
    const result = await userservice.create(payload);
    context.commit('setNewUser', result);
    await context.dispatch('getAllUser');
  },

  async editUser(context, payload: any): Promise<any> {
    const result = await userservice.update(payload.itemCode, payload);
    context.commit('updateCandidate', result);
    await context.dispatch('getAllUser');
  },

  async deleteUser(context, user_id: number): Promise<any> {
    const result = await userservice.deleteOne(user_id);
    context.commit('deleteUser', result);
  },

  async getAllUser(context): Promise<any> {
    const res = await userservice.getAll();
    context.commit('getAllUser', res);
  },

  async getOneUser(context, user_id: number): Promise<any> {
    const res = await userservice.getOne(user_id);
    context.commit('getOneUser', res);
  },
};

export default actions;
