import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface } from './state';

const getters: GetterTree<AccountStateInterface, StateInterface> = {
  filterUser(state) {
    return state.allAccount.filter((i) =>
      /^voter$/ || /^rep$/ || /^ssg$/i.test(i.userType || '')
    );
  },
};

export default getters;
