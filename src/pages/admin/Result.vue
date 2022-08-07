<template>
  <q-page>
    <div class="">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="representative" label="College Representative" />
          <q-tab name="prime" label="Prime Minister" />
          <q-tab name="secretary" label="Executive Secretary" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="representative">
            <div class="q-gutter-sm">
              <!--  -->
              <div class="row">
                <q-card class="my-table q-pa-sm">
                  <q-table
                    :grid="$q.screen.xs"
                    title="College Representative"
                    title-class="text-h6 text-bold"
                    class="my-sticky-header-table"
                    :rows="summary"
                    :columns="representative"
                    row-key="name"
                    :filter="filter"
                  >
                    <template v-slot:top-right>
                      <div class="q-gutter-sm row">
                        <q-input
                          outlined
                          rounded
                          dense
                          debounce="300"
                          v-model="filter"
                          placeholder="Search"
                        >
                          <template v-slot:append>
                            <q-icon name="search" />
                          </template>
                        </q-input>
                        <q-btn
                          flat
                          round
                          icon="filter_list"
                          @click="showFilterDialog = true"
                          ><q-tooltip :offset="[0, 8]"
                            >Filtered by</q-tooltip
                          ></q-btn
                        >
                        <q-dialog v-model="showFilterDialog" persistent>
                          <q-card
                            style="width: 700px; max-width: 100vw"
                            class="q-pa-sm"
                          >
                            <q-card-section class="row">
                              <div class="text-h6">Filter Table</div>
                              <q-space />
                              <q-btn
                                flat
                                round
                                dense
                                icon="close"
                                color="primary"
                                v-close-popup
                              />
                            </q-card-section>
                            <div class="row q-gutter-md">
                              <div class="col">
                                <q-select
                                  autofocus
                                  v-model="collegeFilter"
                                  outlined
                                  label="Course"
                                  :options="options"
                                />
                                <br />
                              </div>
                              <div class="col">
                                <q-select
                                  autofocus
                                  outlined
                                  label="Year Level"
                                  v-model="yearFilter"
                                  :options="allElection"
                                  option-label="academic_yr"
                                  option-value="election_id"
                                  map-options
                                  emit-value
                                />
                              </div>
                            </div>
                            <div class="row">
                              <q-btn
                                push
                                class="text-overline text-white full-width"
                                color="primary"
                                icon="search"
                                label="search"
                              ></q-btn>
                            </div>
                          </q-card>
                        </q-dialog>
                      </div>
                    </template>
                  </q-table>
                </q-card>
              </div>
              <div class="row">
                <q-card class="my-card q-pa-sm">
                  <div class="q-pa-lg text-center text-bold text-primary">
                    College Representative: Graph Result
                  </div>
                  <representative-result />
                </q-card>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="prime">
            <!--S S G - P R I M E - M I N I S T E R-->
            <div class="q-pa-xs q-gutter-sm row">
              <div class="col-12 col-md">
                <prime-table-result />
              </div>
              <div class="col-12 col-md">
                <q-card>
                  <div class="q-pa-md text-center text-bold text-primary">
                    Prime Minister: Graph Result
                  </div>
                  <prime-minister-chart />
                </q-card>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="secretary">
            <!--S S G - E X E C U T I V E - S E C R E T A R Y-->
            <div class="q-pa-xs q-gutter-sm row">
              <div class="col-12 col-md">
                <secretary-table-result />
              </div>
              <div class="col-12 col-md">
                <q-card>
                  <div class="q-pa-md text-center text-bold text-primary">
                    Executive Secretary: Graph Result
                  </div>
                  <secretary-general-chart />
                </q-card>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapGetters, mapState } from 'vuex';
import RepresentativeResult from 'components/Charts/collegerep.vue';
import SecretaryGeneralChart from 'components/Charts/secretaryResult.vue';
import PrimeMinisterChart from 'components/Charts/prime.result.vue';
import PrimeTableResult from 'components/Election Result/primeResult.vue';
import SecretaryTableResult from 'components/Election Result/secretaryResult.vue';
import { date } from 'quasar';

const timeStamp = Date.now();
const currentDate = date.formatDate(timeStamp, 'YYYY');
import {
  VoteRepDto,
  StudentDto,
  VoteSsgDto,
  CandidateDto,
  ElectionDto,
} from 'src/services/rest-api';
import { ICandidateVote } from 'src/store/vote-rep/state';
@Options({
  components: {
    RepresentativeResult,
    SecretaryGeneralChart,
    PrimeMinisterChart,
    PrimeTableResult,
    SecretaryTableResult,
  },
  computed: {
    ...mapState('voteRep', ['allVoteRep', 'summary']),
    ...mapState('voteSsg', ['allVoteSsg']),
    ...mapState('student', ['allStudent']),
    ...mapGetters('voteRep', ['collegeRepresentatives']),
    ...mapState('election', ['allElection']),
  },
  methods: {
    ...mapActions('voteRep', ['getAllVoteRep']),
    ...mapActions('voteSsg', ['getAllVoteSsg']),
    ...mapActions('election', ['getAllElection']),
  },
})
export default class studentResult extends Vue {
  allStudent!: StudentDto[];
  allVoteRep!: VoteRepDto[];
  getAllVoteRep!: () => Promise<void>;

  collegeRepresentatives!: ICandidateVote[];
  summary!: ICandidateVote[];

  allVoteSsg!: VoteSsgDto[];
  getAllVoteSsg!: () => Promise<void>;

  getAllElection!: () => Promise<void>;
  allElection!: ElectionDto[];

  async mounted() {
    await this.getAllVoteRep();
    await this.getAllVoteSsg();
    await this.getAllElection();
    this.filterTable();
  }

  tab = 'representative';
  filter = '';

  representative = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: ICandidateVote) =>
        row.candidate.student?.last_name +
        ', ' +
        row.candidate.student?.first_name +
        ' ' +
        row.candidate.student?.middle_name,
      sortable: true,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: ICandidateVote) => row.candidate.student?.course,
      sortable: true,
    },

    {
      name: 'level',
      align: 'center',
      label: 'Year Level',
      field: (row: ICandidateVote) => row.candidate.student?.yr_admitted,
      sortable: true,
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: ICandidateVote) => row.candidate.student?.college,
      sortable: true,
    },
    {
      name: 'election',
      align: 'center',
      label: 'Election Date',
      field: (row: ICandidateVote) =>
        row.candidate.election?.start_date +
        ', ' +
        row.candidate.election?.academic_yr,
      sortable: true,
    },
    {
      name: 'vote',
      align: 'center',
      label: 'Total Vote',
      field: (row: ICandidateVote) => row.votes.length,
      sortable: true,
    },
  ];
  get allCollegeRepresentative() {
    return this.collegeRepresentatives.filter((i) => !!i.votes.length);
  }

  options = [
    'College of Agriculture',
    'College of Business Administration and Accountancy',
    'College of Education',
    'College of Engineering',
    'College of Fisheries',
    'College of Forestry and Environmental Studies',
    'College of Health Sciences',
    'College of Hotel and Restaurant Management',
    'College of Information and Computing Sciences',
    'College of Law',
    'College of Medicine',
    'College of Natural Sciences and Mathematics',
    'College of Public Affairs',
    'College of Social Sciences and Humanities',
    'College of Sports, Physical Education and Recreation',
    'King Faisal Center for Islamic, Arabic and Asian Studies',
  ];

  label = '';
  showFilterDialog = false;
  yearFilter = '';
  collegeFilter = '';

  filterTable() {
    const result = this.summary.filter(
      (s) =>
        s.candidate?.election?.academic_yr === this.yearFilter &&
        s.candidate?.student?.college === this.collegeFilter
    );
    return result;
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%
  max-height: 1500px
  width: 100%
  max-width: 1500px

.my-card
  /* height or max-height is important */
  height: 100%
  max-height: 1200px
  width: 100%
  max-width: 2500px

.my-table
  /* height or max-height is important */
  height: 100%
  max-height: 1500px
  width: 100%
  max-width: 2500px
</style>
