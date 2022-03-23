import { Representative } from 'src/interfaces/representative.interface';
import representativeservice from 'src/services/representative.service';
import { RepresentativeDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { RepresentativeStateInterface } from './state';

const actions: ActionTree<RepresentativeStateInterface, StateInterface> = {
  async addRepresentative(context, payload: RepresentativeDto): Promise<void> {
    const result = await representativeservice.create(payload);
    context.commit('setNewRepresentative', result);
    await context.dispatch('getAllRepresentative');
  },

  async editRepresentative(context, payload: any): Promise<any> {
    const result = await representativeservice.update(payload.itemCode, payload);
    context.commit('updateRepresentative', result);
    await context.dispatch('getAllRepresentative');
  },

  async deleteRepresentative(context, representative_id: number): Promise<any> {
    const result = await representativeservice.deleteOne(representative_id);
    context.commit('deleteRepresentative', result);
  },

  async getAllRepresentative(context): Promise<any> {
    const res = await representativeservice.getAll();
    context.commit('getAllRepresentative', res);
  },

  async getOneRepresentative(context, representative_id: number): Promise<any> {
    const res = await representativeservice.getOne(representative_id);
    context.commit('getOneRepresentative', res);
  },
};

export default actions;
