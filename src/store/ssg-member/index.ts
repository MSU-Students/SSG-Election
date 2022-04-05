import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { SsgMemberStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const ssgmemberModule: Module<SsgMemberStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default ssgmemberModule;
