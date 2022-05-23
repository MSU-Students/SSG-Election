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
            <div class="col-12 row justify-center items-center q-gutter-x-md col-md">
              <q-card v-if="rep1">
                <q-card-section>
                  <div>Representative 1</div>
                  <div>Total Votes: {{ rep1.totalVote || 0 }}</div>
                </q-card-section>
                <q-card-section>
                  <q-icon name="person" />
                </q-card-section>
                <q-card-section>
                  <div>Name: {{ rep1.name }}</div>
                </q-card-section>
              </q-card>
              <q-card v-if="rep2">
                <q-card-section>
                  <div>Representative 2</div>
                  <div>Total Votes: {{ rep2.totalVote || 0 }}</div>
                </q-card-section>
                <q-card-section>
                  <q-icon name="person" />
                </q-card-section>
                <q-card-section>
                  <div>Name: {{ rep2.name }}</div>
                </q-card-section>
              </q-card>
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
    ...mapState('voteRep', ['allVoteRep', 'rep1', 'rep2']),
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
  rep1!: any;
  rep2!: any;
  representativeStatus!: CandidateDto[];
  getAllCandidate!: () => Promise<void>;
  getAllVoteRep!: () => Promise<void>;
  async created() {
    await this.getAllVoteRep();
    await this.getAllCandidate();
    console.log(this.rep1, this.rep2)
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
