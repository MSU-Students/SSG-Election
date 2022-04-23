<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-pl-xl">
        <div class="text-h5 q-pb-md text-bold">
          <q-icon name="how_to_vote" color="primary" style="font-size: 3rem" />
          Election Result
        </div>
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
            <div class="q-pa-xs q-gutter-x-sm row">
              <div class="col-12 col-md">
                <q-table
                  :grid="$q.screen.xs"
                  title="College Representatives"
                  class="my-sticky-header-table"
                  :rows="allVoteRep"
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
                              icon="sort"
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
                                @click="filter = 'CIT'"
                                label="CIT"
                                label-position="left"
                              />
                              <q-fab-action
                                color="white"
                                padding="5px"
                                text-color="black"
                                @click="filter = 'CBAA'"
                                label="CBAA"
                                label-position="left"
                              />
                              <q-fab-action
                                color="white"
                                padding="5px"
                                text-color="black"
                                @click="filter = 'CHARM'"
                                label="CHARM"
                                label-position="left"
                              />
                              <q-fab-action
                                color="white"
                                text-color="black"
                                @click="filter = ''"
                                icon="clear"
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
                    College Representative in Graph
                  </div>
                  <representative-result />
                </q-card>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="prime">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="secretary">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
import { VoteRepDto, StudentDto } from 'src/services/rest-api';
@Options({
  components: {
    RepresentativeResult,
    SecretaryGeneralChart,
    PrimeMinisterChart,
  },
  computed: {
    ...mapState('vote-rep', ['allVoteRep']),
    ...mapState('student', ['allStudent']),
  },
  methods: {
    ...mapActions('vote-rep', ['getAllVoteRep']),
  },
})
export default class studentResult extends Vue {
  allStudent!: StudentDto[];
  allVoteRep!: VoteRepDto[];
  getAllVoteRep!: () => Promise<void>;
  async mounted() {
    await this.getAllVoteRep();
  }

  tab = 'representative';
  filter = '';

  representative = [
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
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.student?.course,
    },

    {
      name: 'level',
      align: 'center',
      label: 'Year Level',
      field: (row: any) => row.student?.yr_admitted,
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: (row: any) => row.student?.department,
    },
    { name: 'vote', align: 'vote', label: 'Total Vote', field: 'length' },
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
