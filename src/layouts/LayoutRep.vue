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

          <div class="q-ml-md q-gutter-x-xs gt-sm">
            <q-btn
              flat
              class="text-overline text-white"
              label="Home"
              to="/R_Homepage"
            />
            <q-btn
              flat
              class="text-overline text-white"
              label="Candidate List"
              to="/R_Nominee"
            />
            <q-btn
              flat
              class="text-overline text-white"
              label="Vote"
              to="/R_Vote"
            />
            <q-btn
              flat
              class="text-overline text-white"
              label="Result"
              to="/R_Result"
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
      <!--timer-->
      <div class="q-pa-sm bg-white text-primary text-center">
        <div>Election Name: {{ electionInfo.election_name }}</div>
        <div>
          Timer: <strong>{{ electionTimer }}</strong>
        </div>
      </div>
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
          <q-item active clickable v-ripple to="/R_Homepage">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/R_Nominee">
            <q-item-section avatar>
              <q-icon name="check" />
            </q-item-section>

            <q-item-section> Candidate List </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/R_Vote">
            <q-item-section avatar>
              <q-icon name="check" />
            </q-item-section>

            <q-item-section> Vote </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/R_Result">
            <q-item-section avatar>
              <q-icon name="check" />
            </q-item-section>

            <q-item-section> Result </q-item-section>
          </q-item>

          <q-item class="absolute-bottom" clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

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
            to="/R_Vote"
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
import { Vue, Options } from 'vue-class-component';
import { ElectionDto, UserDto } from 'src/services/rest-api';
import { AUser } from 'src/store/auth/state';
import { mapActions, mapState } from 'vuex';
@Options({
  computed: {
    ...mapState('election', ['allElection', 'activeElection']),
    ...mapState('auth', ['currentUser']),
  },
  methods: {
    ...mapActions('election', ['getAllElection', 'getActiveElection']),
    ...mapActions('auth', ['authUser']),
  },
})
export default class LayoutVoter extends Vue {
  getAllElection!: () => Promise<void>;
  getActiveElection!: () => Promise<void>;
  allElection!: ElectionDto[];
  electionTimer: any = '';
  activeElection!: ElectionDto;

  leftDrawerOpen = false;
  search = '';
  filter = '';
  drawer = false;
  loading = true;
  created() {
    this.onElectionTimer();
  }

  onElectionTimer() {
    // end date + end time
    // Update the count down every 1 second
    const SECOND = 1000;
    setInterval(async () => {
      await this.getActiveElection();
      if (!this.activeElection) {
        this.electionTimer = 'No Active Election';
        return;
      }
      // Get today's date and time
      let countDownDate = new Date(
        `${this.activeElection?.end_date} ${this.activeElection?.end_time}`
      ).getTime();

      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById('demo').innerHTML =
      this.electionTimer =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

      // If the count down is finished, write some text
    }, SECOND);
  }

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }

  //this is where to put the database
  authUser!: () => Promise<AUser>;

  currentUser!: AUser;

  async mounted() {
    //const res = await ssgApiService.getProfile();
    await this.authUser();

    this.loading = false;
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

  electionInfo: ElectionDto = {
    election_name: '',
    academic_yr: '',
    election_type: '',
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    status: '',
  };
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
