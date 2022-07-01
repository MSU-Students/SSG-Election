<template>
  <q-layout view="lHh Lpr fff">
    <q-header elevated class="bg-image text-white">
      <q-toolbar class="GPL__toolbar" style="height: 60px">
        <q-toolbar-title class="row items-center no-wrap">
          <img src="~/assets/images/ssg.png" style="height: 40px" />
          <div class="title_name">
            <span class="q-ml-sm q-mr-lg">SSG Election</span>
          </div>
          <q-separator vertical class="bg-deep-red-1" />

          <!-------------Menu Button------------->
          <div class="q-ml-md q-gutter-x-xs gt-sm">
            <q-btn
              flat
              class="text-overline text-white"
              label="Home"
              to="/P_Homepage"
            />
            <q-btn
              flat
              class="text-overline text-white"
              label="Organizational Structure"
              to="/P_Structure"
            />
            <q-btn
              flat
              class="text-overline text-white"
              label="Assign Officers"
              to="/P_Assign"
            />
          </div>
        </q-toolbar-title>

        <!------------------------profile----------------------------->
        <div class="q-gutter-sm row items-center no-wrap gt-sm" v-if="!loading">
          <q-tooltip>Account</q-tooltip>
          <q-btn-dropdown round flat dropdown-icon="account_circle" size="20px">
            <div class="q-pa-md">
              <div class="row justify-center">
                <q-avatar size="80px" class="q-mb-sm">
                  <img
                    v-if="currentUser.student?.url"
                    class="avatar"
                    :src="`http://localhost:3000/media/${currentUser.student?.url}`"
                  />
                  <img
                    v-if="!currentUser.student?.url"
                    src="~assets/images/avatar.svg"
                    class="q-pb-sm"
                  />
                </q-avatar>
              </div>
              <div class="text-weight-bold" style="text-align: center">
                {{ currentUser.student?.last_name }},
                {{ currentUser.student?.first_name }}
                {{ currentUser.student?.middle_name }}
                {{ currentUser.student?.suffix }}
              </div>
              <div class="text-caption" style="text-align: center">
                {{ currentUser.student?.school_id }}
              </div>
              <div class="row justify-center">
                <q-btn
                  push
                  dense
                  class="q-mt-sm text-caption full-width"
                  color="primary"
                  label="Logout"
                  @click="logout"
                  to="/"
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
        <!----------------------------------------------------  ----->
        <div class="lt-md">
          <q-btn
            flat
            dense
            round
            @click="toggleLeftDrawer"
            aria-label="Menu"
            icon="menu"
            class="q-mx-md"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
      show-if-above
      :width="220"
      :breakpoint="100"
    >
      <q-scroll-area
        style="
          height: calc(100% - 166px);
          margin-top: 166px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-separator />
          <q-item active clickable v-ripple to="/P_Homepage">
            <q-item-section> Organizational Structure </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/P_Assign">
            <q-item-section> Assign Officers </q-item-section>
          </q-item>

          <q-item clickable v-ripple class="absolute-bottom" to="/Login">
            <q-item-section> Logout </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <div
        class="q-pa-sm absolute-top"
        style="height: 150px"
        v-if="currentUser"
      >
        <div class="row justify-center">
          <q-avatar size="80px" class="q-mb-sm">
            <img
              v-if="currentUser.student?.url"
              class="avatar"
              :src="`http://localhost:3000/media/${currentUser.student?.url}`"
            />
            <img
              v-if="!currentUser.student?.url"
              src="~assets/images/avatar.svg"
              class="q-pb-sm"
            />
          </q-avatar>
        </div>
        <div class="text-weight-bold" style="text-align: center">
          {{ currentUser.student?.last_name }},
          {{ currentUser.student?.first_name }}
          {{ currentUser.student?.middle_name }}
          {{ currentUser.student?.suffix }}
        </div>
        <div class="text-caption" style="text-align: center">
          {{ currentUser.student?.school_id }}
        </div>
        <div class="row justify-center">
          <q-btn
            outline
            rounded
            dense
            to="/S_Profile"
            class="q-mt-sm"
            color="primary"
            label="Profile"
            style="height: 1.5rem; width: 10rem; font-size: smaller"
          />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer bordered class="bg-primary text-center text-caption text-white">
      A WEB-BASED SSG ELECTION MANAGEMENT SYSTEM IN MINDANAO STATE
      UNIVERSITY-MARAWI
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { AUser } from 'src/store/auth/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
@Options({
  computed: {
    ...mapState('auth', ['currentUser']),
  },
  methods: {
    ...mapActions('auth', ['authUser']),
  },
})
export default class LayoutAdmin extends Vue {
  authUser!: () => Promise<AUser>;

  currentUser!: AUser;
  leftDrawerOpen = false;
  loading = true;
  search = '';
  filter = '';
  drawer = false;

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }

  logout() {
    this.$q.loading.show({
      message: 'Logging out...',
    });

    this.$q.notify({
      color: 'accent',
      textColor: 'primary',
      type: 'positive',
      position: 'center',
      message: 'You are logged out.',
    });
  }
}
</script>
<style>
@font-face {
  font-family: BebasNeue;
  src: url(~assets/fonts/BebasNeue-Regular.ttf);
}

.title_name {
  font-family: 'BebasNeue';
}
</style>
