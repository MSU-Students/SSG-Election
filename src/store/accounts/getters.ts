import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface } from './state';

const getters: GetterTree<AccountStateInterface, StateInterface> = {
  filterUser(state) {
    return state.allAccount.filter((i) =>
      /^voter$/i.test(i.userType || '') || /^rep$/i.test(i.userType || '')  || /^ssg$/i.test(i.userType || '')
    );
  },
  adminUser(state) {
    return state.allAccount.filter((i) =>
      /^admin$/i.test(i.status || '')
    );
  },
};

export default getters;
