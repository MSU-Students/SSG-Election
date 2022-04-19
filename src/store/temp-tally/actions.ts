import { TempTallyDto } from './../../services/rest-api/api';
import temptallyservice from 'src/services/temp-tally.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { TempTallyStateInterface } from './state';

const actions: ActionTree<TempTallyStateInterface, StateInterface> = {
  async addTempTally(context, payload: TempTallyDto): Promise<void> {
    const result = await temptallyservice.create(payload);
    context.commit('setNewTempTally', result);
    await context.dispatch('getAllTempTally');
  },

  async editTempTally(context, payload: any): Promise<any> {
    const result = await temptallyservice.update(payload.temp_tally_id, payload);
    context.commit('updateTempTally', result);
    await context.dispatch('getAllTempTally');
  },

  async deleteTempTally(context, temp_tally_id: number): Promise<any> {
    const result = await temptallyservice.deleteOne(temp_tally_id);
    context.commit('deleteTempTally', result);
  },

  async getAllTempTally(context): Promise<any> {
    const res = await temptallyservice.getAll();
    context.commit('getAllTempTally', res);
  },

  async getOneTempTally(context, temp_tally_id: number): Promise<any> {
    const res = await temptallyservice.getOne(temp_tally_id);
    context.commit('getOneTempTally', res);
  },
};

export default actions;
