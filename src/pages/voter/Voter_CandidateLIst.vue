<template>
  <q-page>
    <div class="q-pa-md">
      <!--separator-->
      <div class="row q-col-gutter-lg ">
        <div class="col">
          <q-toolbar>
            <q-toolbar-title class="text-h6 text-weight-bold"
              >LIST OF CANDIDATES</q-toolbar-title
            >
          </q-toolbar>
        </div>
      </div>
      <!--separator-->

      <div class="row">
        <div v-for="data in allCandidate" v-bind:key="data.candidate_id">
          <div class="col-12 col-md q-pa-sm">
            <q-card
              class="my-card cursor-pointer"
              style="width: 330px; max-height: 700px"
            >
              <div class="q-pa-md">
                <div class="row">
                  <div class="col-4 q-gutter-sm">
                    <div class="text-center">
                      <q-avatar size="93px">
                        <q-img
                          square
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                          v-for="mode in fitModes"
                          :key="mode"
                          style="max-width: 200px; height: 70px"
                          :fit="mode"
                          font-size="82px"
                          color="teal"
                          text-color="white"
                          icon="account_circle"
                        />
                      </q-avatar>
                    </div>
                  </div>
                  <div class="col-8 q-pa-sm">
                    <div class="text-subtitle1 text-bold">
                      {{ data.student?.first_name }} {{ data.student?.middle_name }} {{ data.student?.last_name }}
                    </div>
                    <div class="text-caption">
                      <strong>{{ data.student?.college }}</strong>
                    </div>
                    <div class="text-caption">
                      {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      {{ data.student?.yr_admitted }}
                    </div>
                  </div>
                </div>
                <q-separator />
                <div class="row">
                  <div class="col">
                    <q-card-section class="text-italic">
                      "{{ data.platform }}"
                    </q-card-section>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-------------------------->
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="amber-13" text-color="white" />
  </q-page-scroller>
  </q-page>
</template>

<script lang="ts">
import { CandidateDto, StudentDto, ElectionDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('candidate', ['allCandidate']),
    ...mapState('student', ['allStudent']),
    ...mapState('election', ['allElection']),
  },
  methods: {
    ...mapActions('candidate', [
      'addCandidate',
      'editCandidate',
      'deleteCandidate',
      'getAllCandidate',
    ]),
  },
})
export default class ManageElection extends Vue {
  addCandidate!: (payload: CandidateDto) => Promise<void>;
  editCandidate!: (payload: CandidateDto) => Promise<void>;
  deleteCandidate!: (payload: CandidateDto) => Promise<void>;
  getAllCandidate!: () => Promise<void>;
  allCandidate!: CandidateDto[];
  allElection!: ElectionDto[];

  getAllStudent!: () => Promise<void>;
  allStudent!: StudentDto[];

  async mounted() {
    await this.getAllCandidate();
  }

  filter = '';
  showDetails = false;
  addNewCandidate = false;
  editRowCandidate = false;
  dense = true;

  student_type = ['Regular', 'Representative'];
  fitModes = ['scale-down'];
}
</script>

<style>
.bg-img {
  background-color: #f3eee8;
}
.q-carousel {
  background-color: #f3eee8;
}
.my-sticky-header-table {
  height: 200px;
  width: 100%;
  max-width: 1300px;
}
.my-sticky-table {
  width: 250px;
}
</style>
