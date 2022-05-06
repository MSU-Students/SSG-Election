<template>
  <q-page>
    <div class="q-pa-sm">
      <!--separator-->
      <div class="row q-col-gutter-lg">
        <div class="col">
          <q-toolbar>
            <q-toolbar-title class="text-overline text-weight-bold"
              >Election Campaign</q-toolbar-title
            >
          </q-toolbar>
        </div>
      </div>
      <!--separator-->
      <div class="row">
        <div class="col-12 col-md">
          <div class="row">
            <div v-for="data in allCandidate" v-bind:key="data.candidate_id">
              <div class="col-12 col-md q-pa-xs">
                <q-card
                  class="my-card cursor-pointer"
                  style="width: 300px; max-width: 70vw"
                >
                  <div class="q-pa-md">
                    <div class="row">
                      <div class="col-4">
                        <div class="q-pb-md text-center">
                          <q-img
                            square
                            :src="`http://localhost:3000/media/${data.student?.url}`"
                            v-for="mode in fitModes"
                            :key="mode"
                            style="max-width: 300px; height: 150px"
                            :fit="mode"
                            font-size="82px"
                            color="teal"
                            text-color="white"
                            icon="account_circle"
                          />
                        </div>
                      </div>
                      <div class="col-8 q-pa-sm">
                        <div class="text-weight-bold">
                          {{ data.student?.first_name }}
                          {{ data.student?.middle_name }}.
                          {{ data.student?.last_name }}
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
                        <q-card-section class="text-overline">
                          <q-btn
                            unelevated
                            square
                            dense
                            color="secondary"
                            label="Vote"
                            class="full-width absolute-bottom"
                            @click="onaddBalot()"
                          />
                        </q-card-section>
                      </div>
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </div>
          <q-separator vertical />
        </div>

        <div class="col-12 col-md">
          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                College Representative
              </div>
            </q-card-actions>
            <q-separator />
            <q-card-actions>
              <q-table
                :rows="allCandidate"
                :columns="columns"
                class="my-sticky-header-table"
                title="Selected Candidate"
                :rows-per-page-options="[0]"
                row-key="temp_tally_id"
                hide-bottom
              />
            </q-card-actions>
            <q-card-section>
              <q-card-section class="text-overline" style="text-align: center">
                <div class="row q-gutter-sm">
                  <div class="col">
                    <q-btn
                      unelevated
                      square
                      dense
                      push
                      color="primary"
                      class="full-width"
                      label="Submit Vote"
                      icon="check"
                      @click="submitVote"
                    />
                  </div>
                  <div class="col">
                    <q-btn
                      unelevated
                      square
                      dense
                      outline
                      class="text-primary full-width"
                      label="Clear Selection"
                      @click="resetModel"
                    />
                  </div>
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { CandidateDto, VoteRepDto } from 'src/services/rest-api';
import { TempRep } from 'src/store/tempRep/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('candidate', ['allCandidate']),
    ...mapState('voteRep', ['allVoteRep']),
    ...mapState('tempRep', ['allTempRep']),
  },
  methods: {
    ...mapActions('candidate', ['getAllCandidate']),
    ...mapActions('voteRep', ['addVoteRep', 'getAllvoteRep']),
    ...mapActions('tempRep', ['addTempRep', 'deleteTempRep']),
  },
})
export default class ManageElection extends Vue {
  addVoteRep!: (payload: VoteRepDto) => Promise<void>;
  allVoteRep!: VoteRepDto[];
  getAllCandidate!: () => Promise<void>;
  allCandidate!: CandidateDto[];
  allTempRep!: TempRep[];
  addTempRep!: (payload: TempRep) => Promise<void>;
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

  columns = [
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
      name: 'level',
      align: 'center',
      label: 'Year Admitted',
      field: (row: any) => row.student?.yr_admitted,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.student?.course,
    },
  ];
  selected = [];
  addNewVoteRep = false;

  onResetClick() {
    this.selected = [];
  }

  submitVote(val: VoteRepDto) {
    this.$q
      .dialog({
        message: 'Submit vote?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.addVoteRep(val.vote_rep_id as any);
        this.$q.notify({
          type: 'warning',
          message: 'You have successfully voted',
        });
      });
  }

  tempInput: TempRep = {
    position_type: '',
    platform: '',
  };

  async onaddBalot() {
    await this.addTempRep(this.tempInput);
  }

  async onaddVoteRep() {
    await this.addVoteRep(this.inputVoteRep);
    this.addNewVoteRep = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'An Election is succcessfully Added.',
    });
  }

  inputVoteRep: VoteRepDto = {
    rep1_name: '',
    rep2_name: '',
    academic_yr: '',
    date: '',
    time: '',
  };
  resetModel() {
    this.inputVoteRep = {
      rep1_name: '',
      rep2_name: '',
      academic_yr: '',
      date: '',
      time: '',
    };
  }
}
</script>

<style>
.my-card {
  height: 100%;
  max-height: 900px;
}
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
