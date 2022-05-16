<template>
  <q-layout view="lHh Lpr fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="row items-center no-wrap">
          <img src="~/assets/images/ssg.png" style="height: 40px" />
          <div class="title_name">
            <span class="q-ml-sm q-mr-lg">SSG Election</span>
          </div>
          <q-separator vertical class="bg-deep-red-1" />

          <div class="q-ml-md q-gutter-x-xs gt-sm">
            <q-btn
              flat
              class="bg-primary text-overline text-white"
              label="Home"
              to="/V_Homepage"
            />
            <q-btn
              flat
              class="bg-primary text-overline text-white"
              label="Candidate Profiles"
              to="/V_List"
            />
            <q-btn
              flat
              class="bg-primary text-overline text-white"
              label="Vote"
              to="/V_Vote"
            />
            <q-btn
              flat
              class="bg-primary text-overline text-white"
              label="Result"
              to="/V_Result"
            />
          </div>
        </q-toolbar-title>

        <!------------------------profile----------------------------->
        <div class="q-gutter-sm row items-center no-wrap gt-sm">
          <q-tooltip>Account</q-tooltip>
          <q-btn-dropdown round flat dropdown-icon="account_circle" size="20px">
            <div class="q-pa-md">
              <div class="row justify-center">
                <q-avatar size="80px" class="q-mb-sm">
                  <img src="~assets/images/avatar.svg" class="q-pb-sm" />
                </q-avatar>
              </div>
              <div class="text-weight-bold" style="text-align: center">
                {{ voter.name }}
              </div>
              <div class="text-caption" style="text-align: center">
                {{ voter.idNum }}
              </div>
              <div class="row justify-center">
                <q-btn
                  push
                  dense
                  class="q-mt-sm"
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
          <q-item active clickable v-ripple to="/V_Homepage">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/V_List">
            <q-item-section avatar>
              <q-icon name="check" />
            </q-item-section>

            <q-item-section> Candidate Profile </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/V_Vote">
            <q-item-section avatar>
              <q-icon name="check" />
            </q-item-section>

            <q-item-section> Vote </q-item-section>
          </q-item>

          <q-item class="absolute-bottom" clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section> Logout </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <div class="q-pa-sm absolute-top" style="height: 150px">
        <div class="row justify-center">
          <q-avatar size="80px" class="q-mb-sm">
            <img src="~assets/images/avatar.svg" class="q-pb-sm" />
          </q-avatar>
        </div>
        <div class="text-weight-bold" style="text-align: center">
          {{ voter.name }}
        </div>
        <div class="text-caption" style="text-align: center">
          {{ voter.idNum }}
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
      A WEB-BASED SSG ELECTION MANAGEMENT SYSTEM IN MINDANAO STATE UNIVERSITY-MARAWI
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

export default class LayoutAdmin extends Vue {
  leftDrawerOpen = false;
  search = '';
  filter = '';
  drawer = false;

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }

  //this is where to put the database
  voter = {
    name: 'Arifah U. Abdulbasit',
    idNum: '201812291',
  };
  //---------------------------------->

  //---loading for logout
  //timer,
  logout() {
    this.$q.loading.show({
      message: 'Logging out...',
    });

    //this.timer = setTimeout(() => {
    //  this.$q.loading.hide()
    //  this.timer = void 0
    //   }, 3000);

    this.$q.notify({
      color: 'accent',
      textColor: 'primary',
      type: 'positive',
      position: 'center',
      message: 'Your Successfully Logout.',
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
