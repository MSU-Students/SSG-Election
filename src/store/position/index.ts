import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { PositionStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const positionModule: Module<PositionStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default positionModule;
