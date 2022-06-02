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
                <q-table
                  :grid="$q.screen.xs"
                  title="Prime Minister"
                  class="my-sticky-header-table"
                  :rows="allVoteSsg"
                  :columns="prime"
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
                        </template>
                      </q-input>
                    </div>
                  </template>
                </q-table>
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
                <q-table
                  :grid="$q.screen.xs"
                  title="Secretary General"
                  class="my-sticky-header-table"
                  :rows="allVoteSsg"
                  :columns="secretary"
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
                        </template>
                      </q-input>
                    </div>
                  </template>
                </q-table>
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
import { mapActions, mapState } from 'vuex';
import RepresentativeResult from 'components/Charts/representativeResult.vue';
import SecretaryGeneralChart from 'components/Charts/secretaryResult.vue';
import PrimeMinisterChart from 'components/Charts/prime.result.vue';
import { VoteRepDto, StudentDto, VoteSsgDto } from 'src/services/rest-api';
@Options({
  components: {
    RepresentativeResult,
    SecretaryGeneralChart,
    PrimeMinisterChart,
  },
  computed: {
    ...mapState('voteRep', ['allVoteRep']),
    ...mapState('voteSsg', ['allVoteSsg']),
    ...mapState('student', ['allStudent']),
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

  allVoteSsg!: VoteSsgDto[];
  getAllVoteSsg!: () => Promise<void>;

  async mounted() {
    await this.getAllVoteRep();
    await this.getAllVoteSsg();
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
