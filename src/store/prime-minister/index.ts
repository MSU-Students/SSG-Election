import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { PrimeMinisterStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const primeministerModule: Module<PrimeMinisterStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default primeministerModule;
