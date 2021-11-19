<template>
  <q-layout view="lHh Lpr fff">
    <q-header elevated class="bg-maroon text-white" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-toolbar-title class="row items-center no-wrap">
          <img src="~/assets/logo.png" style="height: 40px" />
          <span class="q-ml-sm">SSG Election</span>
        </q-toolbar-title>

        <!------------------------profile----------------------------->
        <div class="q-gutter-sm row items-center no-wrap">
          <q-tooltip>Account</q-tooltip>
          <q-btn-dropdown round flat dropdown-icon="account_circle">
            <div class="row no-wrap q-pa-md">
              <div class="column items-center">
                <q-avatar size="70px">
                  <img src="~assets/images/flower.png" />
                </q-avatar>
                <div class="text-weight-bold q-mt-md q-mb-xs">Anisah Dayaan</div>
                <div>201811942</div>
              </div>
            </div>
          </q-btn-dropdown>
        </div>
        <!----------------------------------------------------  ----->
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
      color="white"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <div class="q-ml-sm absolute-center">MENU</div>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding class="fit">
          <q-item clickable v-ripple to="/Homepage">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Accounts">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Accounts </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Ballot">
            <q-item-section avatar>
              <q-icon name="ballot" />
            </q-item-section>

            <q-item-section> Ballot </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Result">
            <q-item-section avatar>
              <q-icon name="check" />
            </q-item-section>

            <q-item-section> Result </q-item-section>
          </q-item>

          <q-separator />

          <div class="absolute-bottom">
            <q-item clickable v-ripple to="/" absolute-bottom>
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section> Logout </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer bordered class="bg-primary text-center text-caption text-white">
      A WEB-BASED SSG ELECTION AND INFORMATION MANAGEMENT SYSTEM IN MINDANAO STATE
      UNIVERSITY MARAWI
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

export default class LayoutAdmin extends Vue {
  leftDrawerOpen = false;
  search = "";
  filter = "";
  drawer = false;

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }
}
</script>

<style lang="sass">
.GPL

  &__toolbar
    height: 44px

  &__toolbar-input
    width: 35%
</style>
