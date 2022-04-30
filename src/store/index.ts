import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';

import account from './accounts';
import { AccountStateInterface } from './accounts/state';

import student from './student';
import { StudentStateInterface } from './student/state';

import voteRep from './vote-rep';
import { VoteRepStateInterface } from './vote-rep/state';

import representative from './representative';
import { RepresentativeStateInterface } from './representative/state';

import voteSsg from './vote-ssg';
import { VoteSsgStateInterface } from './vote-ssg/state';

import ssgMember from './ssg-member';
import { SsgMemberStateInterface } from './ssg-member/state';

import candidate from './candidateAccounts';
import { CandidateStateInterface } from './candidateAccounts/state';

import election from './election';
import { ElectionStateInterface } from './election/state';

import admin from './admin';
import { AdminStateInterface } from './admin/state';

import auth from './auth';
import { IAuthState } from './auth/state';

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  account: AccountStateInterface;
  student: StudentStateInterface;
  voteRep: VoteRepStateInterface;
  representative: RepresentativeStateInterface;
  voteSsg: VoteSsgStateInterface;
  ssgMmber: SsgMemberStateInterface;
  candidate: CandidateStateInterface;
  election: ElectionStateInterface;
  admin: AdminStateInterface;
  auth: IAuthState;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key');

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      account,
      voteRep,
      representative,
      voteSsg,
      ssgMember,
      student,
      candidate,
      election,
      admin,
      auth,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
