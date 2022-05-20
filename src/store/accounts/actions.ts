import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface } from './state';
import userService from 'src/services/user.service';

const actions: ActionTree<AccountStateInterface, StateInterface> = {
  async addAccount(context, payload: any): Promise<any> {
    const result = await userService.create(payload);
    context.commit('setNewAccount', result);
    await context.dispatch('getAllUser');
  },

  async editAccount(context, payload: any): Promise<any> {
    const result = await userService.update(payload.account_id, payload);
    context.commit('updateAccount', result);
    await context.dispatch('getAllUser');
  },

  async deleteAccount(context, account_id: number): Promise<any> {
    const result = await userService.delete(account_id);
    context.commit('deleteAccount', result);
    await context.dispatch('getAllUser');
  },

  async getAllUser(context): Promise<any> {
    const res = (await userService.getAll()).map(u => ({
      ...u,
      password: u.username + String(u.student?.school_id)
    }));
    context.commit('getAllUser', res);
  },

  async getOneUser(context, account_id: number): Promise<any> {
    const res = await userService.getOne(account_id);
    context.commit('getOneUser', res);
  },

  async getProfile(context): Promise<any> {
    const res = await userService.getUserProfile();
    context.commit('getProfile', res);
    return res;
  },
};

export default actions;
