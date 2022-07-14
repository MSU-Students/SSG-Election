import { uid } from 'quasar';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SectTemp, SectTempStateInterface } from './state';

const actions: ActionTree<SectTempStateInterface, StateInterface> = {
  addSectTemp(context, payload: SectTemp) {
    const uuid = uid();
    context.commit('setNewSectTemp', { ...payload, id: uuid });
  },

  editSectTemp(context, payload: SectTemp) {
    context.commit('updateSectTemp', payload);
  },

  deleteSectTemp(context, payload: SectTemp) {
    context.commit('deleteSectTemp', payload);
  },
  clear(context) {
    context.commit('clear');
  },
};

export default actions;
