import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { RepresentativeStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const representativeModule: Module<RepresentativeStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default representativeModule;
