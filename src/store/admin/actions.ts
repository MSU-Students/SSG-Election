import { Admin } from 'src/interfaces/admin.interface';
import adminservice from 'src/services/admin.service';
import { AdminDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AdminStateInterface } from './state';

const actions: ActionTree<AdminStateInterface, StateInterface> = {
  async addAdmin(context, payload: AdminDto): Promise<void> {
    const result = await adminservice.create(payload);
    context.commit('setNewAdmin', result);
    await context.dispatch('getAllAdmin');
  },

  async editAdmin(context, payload: any): Promise<any> {
    const result = await adminservice.update(payload.itemCode, payload);
    context.commit('updateAdmin', result);
    await context.dispatch('getAllAdmin');
  },

  async deleteAdmin(context, admin_id: number): Promise<any> {
    const result = await adminservice.deleteOne(admin_id);
    context.commit('deleteAdmin', result);
  },

  async getAllAdmin(context): Promise<any> {
    const res = await adminservice.getAll();
    context.commit('getAllAdmin', res);
  },

  async getOneAdmin(context, admin_id: number): Promise<any> {
    const res = await adminservice.getOne(admin_id);
    context.commit('getOneAdmin', res);
  },
};

export default actions;
