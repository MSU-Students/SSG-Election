<template>
  <q-layout view="lHh Lpr fff">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          class="q-py-sm"
          to="/Homepage"
          icon="logout"
          label="Back"
          flat
          dense
        />
        <q-toolbar-title class="text-center text-overline"
          >Settings</q-toolbar-title
        >
        <div class="q-ml-md q-gutter-x-xs gt-sm">
          <q-btn
            flat
            class="push text-overline text-white no-wrap"
            label="Manage Admin"
            to="/manageAdmin"
          />
          <q-btn
            flat
            class="text-overline text-white no-wrap"
            label="Voting Records"
            to="/votingRecord"
          />
        </div>
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
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item active clickable v-ripple to="/manageAdmin">
            <q-item-section avatar>
              <q-icon name="admin_panel_settings" />
            </q-item-section>

            <q-item-section> Manage Admin </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/votingRecord">
            <q-item-section avatar>
              <q-icon name="ballot" />
            </q-item-section>

            <q-item-section> Voting Records </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({})
export default class LayoutAdmin extends Vue {
  leftDrawerOpen = false;
  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
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
