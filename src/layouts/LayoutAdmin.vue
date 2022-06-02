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
              class="push text-overline text-white no-wrap"
              label="Home"
              to="/Homepage"
            />
            <q-btn
              flat
              class="text-overline text-white no-wrap"
              label="Election"
              to="/Ballot"
            />
            <q-btn
              flat
              class="text-overline text-white no-wrap"
              label="Candidate List"
              to="/List"
            />
            <q-btn
              flat
              class="text-overline text-white no-wrap"
              label="Manage Accounts"
              to="/Accounts"
            />
            <q-btn
              flat
              class="push text-overline text-white no-wrap"
              label="Election Result"
              to="/Result"
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
                {{ admin.name }}
              </div>
              <div class="text-caption" style="text-align: center">
                {{ admin.idNum }}
              </div>
              <div class="row justify-center">
                <q-btn
                  push
                  dense
                  class="q-mt-sm text-caption full-width"
                  color="primary"
                  label="Logout"
                  icon="logout"
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
      <q-separator />
      <!---- Election HEader------>
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
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-separator />
          <q-item clickable v-ripple to="/Homepage">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Ballot">
            <q-item-section avatar>
              <q-icon name="ballot" />
            </q-item-section>

            <q-item-section> Manage Election </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/List">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> Candidate list </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Accounts">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Manage Accounts </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Result">
            <q-item-section avatar>
              <q-icon name="ballot" />
            </q-item-section>

            <q-item-section>Election Result</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="absolute-bottom" to="/">
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
          {{ admin.name }}
        </div>
        <div class="text-caption" style="text-align: center">Admin</div>
        <div class="row justify-center"></div>
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
import Chart from 'components/Charts/prime.result.vue';
import { ElectionDto } from 'src/services/rest-api';
import { mapActions, mapState } from 'vuex';
@Options({
  components: { Chart },
  computed: {
    ...mapState('election', ['allElection', 'activeElection']),
  },
  methods: {
    ...mapActions('election', ['getAllElection', 'getActiveElection']),
  },
})
export default class LayoutAdmin extends Vue {
  getAllElection!: () => Promise<void>;
  getActiveElection!: () => Promise<void>;
  allElection!: ElectionDto[];
  electionTimer: any = '';
  activeElection!: ElectionDto;

  leftDrawerOpen = false;
  search = '';
  filter = '';
  drawer = false;

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
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById('demo').innerHTML =
      this.electionTimer = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

      // If the count down is finished, write some text
    }, SECOND);
  }

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }

  //this is where to put the database
  admin = {
    name: 'Arifah U. Abdulbasit',
    idNum: '201812291',
  };

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
