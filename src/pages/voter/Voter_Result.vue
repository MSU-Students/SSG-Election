<template>
  <q-page v-if="currentUser">
    <div class="q-pa-md">
      <div class="q-pl-xl">
        <div class="text-h5 q-pb-md text-bold">
          <q-icon name="how_to_vote" color="primary" style="font-size: 3rem" />
          Election Result
        </div>
      </div>
      <div class="row q-pa-xs q-col-gutter-x-md q-col-gutter-y-sm">
        <div class="col-12 col-md row">
          <q-card class="my-card q-pa-sm">
            <div v-for="rep in collegeCandidates" :key="rep.candidate.candidate_id">
              <q-card-section class="q-pa-sm">
                <div class="text-green text-overline">
                  Candidate {{ rep.candidate.candidate_id }}
                </div>
                <div class="row">
                  <div class="col-12 col-md">
                    Name:
                    <strong>
                      {{ rep.candidate.student?.last_name }},
                      {{ rep.candidate.student?.first_name }}
                      {{ rep.candidate.student?.middle_name }}
                      {{ rep.candidate.student?.suffix }}
                    </strong>
                  </div>
                  <div class="col-12 col-md">
                    Total Votes: <strong>{{ rep.votes.length }}</strong>
                  </div>
                </div>
                <div>
                  Course:
                  <strong>
                    {{ rep.candidate.student?.course }}
                  </strong>
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
              College Representative in Graph
            </div>
            <representative-result class="q-pa-md" />
          </q-card>
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
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState, mapGetters } from 'vuex';
import RepresentativeResult from 'components/Charts/representativeResult.vue';
import { StudentDto, CandidateDto, VoteRepDto } from 'src/services/rest-api';
import { ICandidateVote } from 'src/store/vote-rep/state';
import { AUser } from 'src/store/auth/state';
@Options({
  components: { RepresentativeResult },
  computed: {
    ...mapState('candidate', ['allCandidate']),
    ...mapState('voteRep', ['allVoteRep', 'summary']),
    ...mapState('student', ['allStudent']),
    ...mapState('auth', ['currentUser']),
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
  summary!: ICandidateVote[];
  currentUser!: AUser;
  rep1!: any;
  rep2!: any;
  getAllCandidate!: () => Promise<void>;
  getAllVoteRep!: () => Promise<void>;
  async created() {
    await this.getAllVoteRep();
    await this.getAllCandidate();
    
  }
  get collegeName() {
    return this.currentUser?.student.college || '';
  }
  get collegeCandidates() {
    return this.summary.filter((c) => c.candidate.student?.college == this.collegeName);
  }
  tab = 'representative';
  filter = '';
}
</script>

<style lang="sass">
.my-card
  /* height or max-height is important */
  // height: 100%
  // max-height: 700px
  width: 100%
  max-width: 1500px
</style>
