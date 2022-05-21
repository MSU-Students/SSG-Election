<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-pl-xl">
        <div class="text-h5 q-pb-md text-bold">
          <q-icon name="how_to_vote" color="primary" style="font-size: 3rem" />
          Election Result
        </div>
      </div>
      <div class="">
        <q-card>
          <div class="q-pa-sm q-gutter-x-sm row">
            <div class="col-12 col-md">
              <!--
              <q-card>
                <div class="row q-pa-sm">
                  <div class="col-4">Name</div>
                  <div class="col-4 text-center">Course</div>
                  <div class="col text-center">Level</div>
                  <div class="col text-center">Total Vote</div>
                  
                </div>
                <q-separator/>
                <div class="row q-pa-sm q-pt-md">
                  <div class="col-4">Najmah Omar</div>
                  <div class="col-4 text-center ">BS Information Technology</div>
                  <div class="col text-center">2018</div>
                  <div class="col text-center">4</div>
                </div>
              </q-card>
              -->
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
                  <q-input
                    borderless
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
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
        </q-card>
      </div>
    </div>

    <!-------------------------->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="amber-13" text-color="white" />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState, mapGetters } from 'vuex';
import RepresentativeResult from 'components/Charts/representativeResult.vue';
import { StudentDto, CandidateDto, VoteRepDto } from 'src/services/rest-api';
@Options({
  components: { RepresentativeResult },
  computed: {
    ...mapState('candidate', ['allCandidate']),
    ...mapState('voteRep', ['allVoteRep']),
    ...mapState('student', ['allStudent']),

    ...mapGetters('candidate', ['representativeStatus']),
  },
  methods: {
    ...mapActions('candidate', ['getAllCandidate']),
    ...mapActions('voteRep', ['getAllVoteRep']),
  },
})
export default class studentResult extends Vue {
  allStudent!: StudentDto[];
  allCandidate!: CandidateDto[];
  allVoteRep!: VoteRepDto[];
  representativeStatus!: CandidateDto[];
  getAllCandidate!: () => Promise<void>;
  getAllVoteRep!: () => Promise<void>;
  async mounted() {
    await this.getAllVoteRep();
    await this.getAllCandidate();
  }

  tab = 'representative';
  filter = '';

  representative = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: 'name',
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: 'course',
    },
    {
      name: 'level',
      align: 'center',
      label: 'Admitted',
      field: 'admitted',
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: 'department',
    },
    {
      name: 'totalVote',
      align: 'vote',
      label: 'Total Vote',
      field: 'totalVote',
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
