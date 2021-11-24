import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/login.vue'),
  },
  {
    path: '/login_ssg',
    component: () => import('pages/Login_SSG.vue'),
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
                ],
    },

    //!---->LayoutVoter
    {
      path: '/student',
      component: () => import('src/layouts/LayoutVoter.vue'),
      children: [
                  { path: '/S_Homepage', component: () => import('src/pages/student/Student_Homepage.vue') },
                  { path: '/S_Profile', component: () => import('src/pages/student/Student_Profile.vue') },
                  { path: '/S_Vote', component: () => import('src/pages/student/Student_vote.vue') }
                ],
    },

    //!---->LayoutPrime
    {
      path: '/ssg',
      component: () => import('src/layouts/LayoutPrime.vue'),
      children: [
                  { path: '/P_Homepage', component: () => import('src/pages/ssg/SSG_Home.vue') },
                  { path: '/P_Profile', component: () => import('src/pages/ssg/SSG_Profile.vue') },
                  { path: '/P_Officials', component: () => import('src/pages/ssg/SSG_Officials.vue') }
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
