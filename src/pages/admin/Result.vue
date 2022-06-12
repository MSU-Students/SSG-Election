<template>
  <q-page>
    <div class="q-pl-lg">
      <div class="text-h5 q-pa-lg text-bold">
        <q-icon name="how_to_vote" color="primary" style="font-size: 3rem" />
        Election Result
      </div>
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
            <!--R E R P R E S E N T A T I V E-->
            <div class="q-pa-xs q-gutter-sm row">
              <div class="col-12 col-md">
                <q-table
                  :grid="$q.screen.xs"
                  title="College Representative"
                  class="my-sticky-header-table"
                  :rows="allCollegeRepresentative"
                  :columns="representative"
                  row-key="name"
                  :filter="filter"
                >
                  <template v-slot:top-right>
                    <div class="row">
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
                          <div>
                            <q-fab
                              color="primary"
                              icon="filter_list"
                              label="Filter by:"
                              label-position="top"
                              external-label
                              padding="xs"
                              direction="down"
                            >
                              <q-fab-action
                                color="white"
                                padding="5px"
                                text-color="black"
                                @click="filter"
                                label="CICS"
                                label-position="left"
                              />
                            </q-fab>
                          </div>
                        </template>
                      </q-input>
                    </div>
                  </template>
                </q-table>
              </div>
              <div class="col-12 col-md">
                <q-card>
                  <div class="q-pa-md text-center text-bold text-primary">
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
                <prime-table-result/>
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
                <secretary-table-result/>
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
import { VoteRepDto, StudentDto, VoteSsgDto, CandidateDto } from 'src/services/rest-api';
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
  },
  methods: {
    ...mapActions('voteRep', ['getAllVoteRep']),
    ...mapActions('voteSsg', ['getAllVoteSsg']),
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

  async mounted() {
    await this.getAllVoteRep();
    await this.getAllVoteSsg();
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
      name: 'department',
      align: 'center',
      label: 'Department',
      field: (row: ICandidateVote) => row.candidate.student?.department,
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
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%
  max-height: 600px
  width: 100%
  max-width: 1500px
</style>
