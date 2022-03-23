import { PrimeMinister } from 'src/interfaces/prime-minister.interface';
import primeministerservice from 'src/services/prime-minister.service';
import { PrimeMinisterDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PrimeMinisterStateInterface } from './state';

const actions: ActionTree<PrimeMinisterStateInterface, StateInterface> = {
  async addPrimeMinister(context, payload: PrimeMinisterDto): Promise<void> {
    const result = await primeministerservice.create(payload);
    context.commit('setNewPrimeMinister', result);
    await context.dispatch('getAllPrimeMinister');
  },

  async editPrimeMinister(context, payload: any): Promise<any> {
    const result = await primeministerservice.update(payload.itemCode, payload);
    context.commit('updatePrimeMinister', result);
    await context.dispatch('getAllPrimeMinister');
  },

  async deletePrimeMinister(context, primeminister_id: number): Promise<any> {
    const result = await primeministerservice.deleteOne(primeminister_id);
    context.commit('deletePrimeMinister', result);
  },

  async getAllPrimeMinister(context): Promise<any> {
    const res = await primeministerservice.getAll();
    context.commit('getAllPrimeMinister', res);
  },

  async getOnePrimeMinister(context, primeminister_id: number): Promise<any> {
    const res = await primeministerservice.getOne(primeminister_id);
    context.commit('getOnePrimeMinister', res);
  },
};

export default actions;
