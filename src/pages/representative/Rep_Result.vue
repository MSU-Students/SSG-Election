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
          <q-tab name="prime" label="Prime Minister" />
          <q-tab name="secretary" label="Executive Secretary" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="prime">
            <!--S S G - P R I M E - M I N I S T E R-->
            <div class="q-gutter-sm row">
              <div class="col-12 col-md">
                <q-card>
                  <q-card class="my-card q-pa-sm">
                    <div
                      v-for="rep in primeMinister"
                      :key="rep.representative.representative_id"
                    >
                      <q-card-section>
                        <div class="text-green text-overline">
                          Candidate {{ rep.representative.representative_id }}
                        </div>
                        <div>
                          Name:
                          <strong>
                            {{ rep.representative.student?.last_name }},
                            {{ rep.representative.student?.first_name }}
                            {{ rep.representative.student?.middle_name }}
                            {{ rep.representative.student?.suffix }}
                          </strong>
                        </div>
                        <div>
                          Course:
                          <strong>
                            {{ rep.representative.student?.course }}
                          </strong>
                        </div>
                        <div>
                          Total Votes: <strong>{{ rep.votes.length }}</strong>
                        </div>
                        <br />
                        <q-separator />
                      </q-card-section>
                    </div>
                  </q-card>
                </q-card>
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
            <!--S S G - P R I M E - M I N I S T E R-->
            <div class="q-pa-xs q-gutter-sm row">
              <div class="col-12 col-md">
                <q-card class="my-card q-pa-sm">
                  <div
                    v-for="rep in executiveSecretary"
                    :key="rep.representative.representative_id"
                  >
                    <q-card-section>
                      <div class="text-green text-overline">
                        Candidate {{ rep.representative.representative_id }}
                      </div>
                      <div>
                        Name:
                        <strong>
                          {{ rep.representative.student?.last_name }},
                          {{ rep.representative.student?.first_name }}
                          {{ rep.representative.student?.middle_name }}
                          {{ rep.representative.student?.suffix }}
                        </strong>
                      </div>
                      <div>
                        Course:
                        <strong>
                          {{ rep.representative.student?.course }}
                        </strong>
                      </div>
                      <div>
                        Total Votes: <strong>{{ rep.votes.length }}</strong>
                      </div>
                      <br />
                      <q-separator />
                    </q-card-section>
                  </div>
                </q-card>
              </div>
              <div class="col-12 col-md">
                <q-card>
                  <div class="q-pa-md text-center text-bold text-primary">
                    Secretary General: Graph Result
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
import RepresentativeResult from 'components/Charts/representativeResult.vue';
import SecretaryGeneralChart from 'components/Charts/secretaryResult.vue';
import PrimeMinisterChart from 'components/Charts/prime.result.vue';
import {
  VoteRepDto,
  StudentDto,
  VoteSsgDto,
  RepresentativeDto,
} from 'src/services/rest-api';
import { IRepVote } from 'src/store/vote-rep/state';
import { IRepresentativeVote } from 'src/store/vote-ssg/state';
@Options({
  components: {
    RepresentativeResult,
    SecretaryGeneralChart,
    PrimeMinisterChart,
  },
  computed: {
    ...mapState('representative', ['allRepresentative']),
    ...mapState('voteSsg', ['allVoteSsg', 'summary']),
    ...mapState('student', ['allStudent']),
    ...mapGetters('representative', ['primePosition', 'secretaryPosition']),
  },
  methods: {
    ...mapActions('voteRep', ['getAllVoteRep']),
    ...mapActions('voteSsg', ['getAllVoteSsg']),
  },
})
export default class studentResult extends Vue {
  allStudent!: StudentDto[];
  allRepresentative!: RepresentativeDto[];
  getAllVoteRep!: () => Promise<void>;

  summary!: IRepresentativeVote[];

  allVoteSsg!: VoteSsgDto[];
  getAllVoteSsg!: () => Promise<void>;

  primePosition!: RepresentativeDto[];
  secretaryPosition!: RepresentativeDto[];

  async created() {
    await this.getAllVoteRep();
    await this.getAllVoteSsg();
  }

  get primeMinister() {
    return this.summary.filter(
      (pm) => pm.representative.position == 'Prime Minister'
    );
  }

  get executiveSecretary() {
    return this.summary.filter(
      (es) => es.representative.position == 'Executive Secretary'
    );
  }

  tab = 'prime';
  filter = '';

  prime = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: any) =>
        row.student?.last_name +
        ', ' +
        row.student?.first_name +
        ' ' +
        row.student?.middle_name,
      sortable: true,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.student?.course,
      sortable: true,
    },

    {
      name: 'level',
      align: 'center',
      label: 'Year Level',
      field: (row: any) => row.student?.yr_admitted,
      sortable: true,
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: any) => row.student?.College,
      sortable: true,
    },
    {
      name: 'vote',
      align: 'vote',
      label: 'Total Vote',
      field: 'length',
      sortable: true,
    },
  ];

  secretary = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: any) =>
        row.student?.last_name +
        ', ' +
        row.student?.first_name +
        ' ' +
        row.student?.middle_name,
      sortable: true,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.student?.course,
      sortable: true,
    },

    {
      name: 'level',
      align: 'center',
      label: 'Year Level',
      field: (row: any) => row.student?.yr_admitted,
      sortable: true,
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: any) => row.student?.College,
      sortable: true,
    },
    {
      name: 'vote',
      align: 'vote',
      label: 'Total Vote',
      field: 'length',
      sortable: true,
    },
  ];
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%
  max-height: 700px
  width: 100%
  max-width: 1500px
</style>
