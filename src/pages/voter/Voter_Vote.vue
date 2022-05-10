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
      <div class="row q-gutter-sm">
        <div class="col-12 col-md">
          <q-card class="my-card q-pa-sm">
            <div class="row">
              <div v-for="data in allCandidate" v-bind:key="data.candidate_id">
                <div class="col-12 col-md q-pa-xs">
                  <q-card
                    class=" cursor-pointer"
                    style="width: 270px; max-width: 60vw"
                  >
                    <div class="q-pa-md">
                      <div class="row">
                        <div class="col-4 q-pa-sm">
                          <div class="text-center">
                            <q-img
                              square
                              :src="`http://localhost:3000/media/${data.student?.url}`"
                              v-for="mode in fitModes"
                              :key="mode"
                              style="max-width: 300px; height: 70px"
                              :fit="mode"
                              font-size="82px"
                              color="teal"
                              text-color="white"
                              icon="account_circle"
                            />
                          </div>
                        </div>
                        <div class="col-8 q-pa-sm">
                          <div class="text-body text-bold">
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
                              @click="
                                tempInput.first_name = data.student?.first_name;
                                tempInput.middle_name = data.student?.middle_name;
                                tempInput.last_name = data.student?.last_name;
                                tempInput.course = data.student?.course;
                                tempInput.yr_admitted = data.student?.yr_admitted;
                                onaddBalot();
                              "
                            />
                          </q-card-section>
                        </div>
                      </div>
                    </div>
                  </q-card>
                </div>
              </div>
            </div>
          </q-card>
          <q-separator vertical />
        </div>

        <div class="col-12 col-md">
          <q-card>
            <q-card-actions>
              <q-table
                :rows="allTempRep"
                :columns="columns"
                class="my-sticky-header-table"
                :rows-per-page-options="[0]"
                row-key="temp_tally_id"
                hide-bottom
              />
            </q-card-actions>
            <div class="row q-gutter-x-sm q-pa-sm">
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
                  @click="clearSelection"
                />
              </div>
            </div>
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
      field: (row: TempRep) =>
        row.last_name +
        ', ' +
        row.first_name +
        ' ' +
        row.middle_name,
    },
    {
      name: 'level',
      align: 'center',
      label: 'Year Admitted',
      field: (row: any) => row.yr_admitted,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.course,
    },
  ];
  selected = [];
  addNewVoteRep = false;

  clearSelection() {
    window.location.reload();
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

  tempInput: any = {
    temp_tally_id: 0,
    first_name: '',
    middle_name: '',
    last_name: '',
    course: '',
    yr_admitted: '',
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
