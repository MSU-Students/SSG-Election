import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/login.vue'),
  },

    //----> LayoutAdmin
    {
      path: '/admin',
      component: () => import('layouts/LayoutAdmin.vue'),
      children: [
                  {path: '/Homepage', component: () => import('src/pages/admin/Home.vue') },
                  {path: '/Accounts', component: () => import('src/pages/admin/account.vue') },
                  {path: '/Ballot', component: () => import('src/pages/admin/Ballot.vue') },
                  {path: '/Result', component: () => import('src/pages/admin/Result.vue') },
                  {path: '/List', component: () => import('src/pages/admin/CandidateList.vue') }
                ],
    },

    //!---->LayoutVoter
    {
      path: '/Voter',
      component: () => import('src/layouts/LayoutVoter.vue'),
      children: [
                  { path: '/V_Homepage', component: () => import('src/pages/voter/Voter_Homepage.vue') },
                  { path: '/V_Result', component: () => import('src/pages/voter/Voter_Result.vue') },
                  { path: '/V_Vote', component: () => import('src/pages/voter/Voter_Vote.vue') }
                ],
    },

    //!---->LayoutRep
    {
      path: '/Representative',
      component: () => import('src/layouts/LayoutRep.vue'),
      children: [
                  { path: '/R_Homepage', component: () => import('src/pages/representative/Rep_Homepage.vue') },
                  { path: '/R_Nominee', component: () => import('src/pages/representative/Rep_Nominee.vue')},
                  { path: '/R_Result', component: () => import('src/pages/representative/Rep_Result.vue') },
                  { path: '/R_Voting', component: () => import('src/pages/representative/Rep_Voting.vue')}
                ],
    },

    //!---->LayoutPrime
    {
      path: '/ssg',
      component: () => import('src/layouts/LayoutPrime.vue'),
      children: [
                  { path: '/P_Homepage', component: () => import('src/pages/ssg/SSG_Home.vue') },
                  { path: '/P_Assign', component: () => import('src/pages/ssg/SSG_Assign.vue') },
                  { path: '/P_Profile', component: () => import('src/pages/ssg/SSG_Profile.vue') },
                  { path: '/P_Assigning', component: () => import('src/pages/ssg/SSG_Assigning.vue') }
                ],
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
