import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { TempRepStateInterface, TempRep } from './state';

const actions: ActionTree<TempRepStateInterface, StateInterface> = {
  addTempRep(context, payload: TempRep) {
    context.commit('setNewTempRep', payload);
  },

  editTempRep(context, payload: TempRep) {
    context.commit('updateTempRep', payload);
  },

  deleteTempRep(context, payload: TempRep) {
    context.commit('deleteTempRep', payload);
  },
  clear(context) {
    context.commit('clear');
  }
};

export default actions;
