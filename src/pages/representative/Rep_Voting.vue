<template>
  <q-page>
    <div class="q-pa-sm">
      <!--separator-->
      <div class="row q-col-gutter-lg">
        <div class="col">
          <q-toolbar>
            <q-toolbar-title class="text-overline text-weight-bold">
              Select your Candidates
            </q-toolbar-title>
          </q-toolbar>
        </div>
      </div>
      <!--separator-->
      <div class="row q-gutter-sm">
        <div class="col">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="prime" label="Prime Minister" />
              <q-tab name="secretary" label="Secretary General" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="prime">
                <div class="row">
                  <div
                    v-for="rep in primePosition"
                    v-bind:key="rep.representative_id"
                  >
                    <div class="col-12 col-md q-pa-xs">
                      <q-card
                        class="cursor-pointer"
                        style="width: 290px; max-width: 100vw"
                      >
                        <div class="q-pa-md">
                          <div class="row">
                            <div class="col-4 q-gutter-sm">
                              <div class="text-center" v-if="rep">
                                <q-avatar size="70px">
                                  <q-img
                                    square
                                    v-if="rep.student?.url"
                                    :src="`http://localhost:3000/media/${rep.student?.url}`"
                                  />
                                  <q-img
                                    v-if="!rep.student?.url"
                                    src="~assets/images/MSU.jpg"
                                    class="q-pb-sm"
                                  />
                                </q-avatar>
                              </div>
                            </div>
                            <div class="col-8 q-pa-sm">
                              <div class="text-body text-bold text-uppercase">
                                {{ rep.student?.first_name }}
                                {{ rep.student?.last_name }}
                              </div>
                              <div class="text-caption">
                                {{ rep.student?.course }}
                              </div>
                              <div class="text-caption">
                                {{ rep.student?.yr_admitted }}
                              </div>
                              <div class="text-caption">
                                {{ rep.election?.academic_yr }}
                              </div>
                            </div>
                          </div>
                          <q-separator inset dark /><br />
                          <div class="row">
                            <div class="col">
                              <q-card-section class="text-overline">
                                <q-btn
                                  unelevated
                                  square
                                  dense
                                  push
                                  color="primary"
                                  label="Vote"
                                  class="full-width absolute-bottom"
                                  @click="onaddBallot(rep)"
                                />
                              </q-card-section>
                            </div>
                          </div>
                        </div>
                      </q-card>
                    </div>
                  </div>
                </div>
              </q-tab-panel>
              <q-tab-panel name="secretary">
                <div class="row">
                  <div
                    v-for="rep in secretaryPosition"
                    v-bind:key="rep.representative_id"
                  >
                    <div class="col-12 col-md q-pa-xs">
                      <q-card
                        class="cursor-pointer"
                        style="width: 290px; max-width: 100vw"
                      >
                        <div class="q-pa-md">
                          <div class="row">
                            <div class="col-4 q-gutter-sm">
                              <div class="text-center">
                                <q-avatar size="70px">
                                  <!-- <q-img
                                    square
                                    :src="`http://localhost:3000/media/${rep.student?.url}`"
                                    v-for="mode in fitModes"
                                    :key="mode"
                                    style="max-width: 300px; height: 70px"
                                    :fit="mode"
                                    font-size="82px"
                                    color="teal"
                                    text-color="white"
                                    icon="account_circle"
                                  /> -->
                                  <q-img
                                    square
                                    v-if="rep.student?.url"
                                    :src="`http://localhost:3000/media/${rep.student?.url}`"
                                  />
                                  <q-img
                                    v-if="!rep.student?.url"
                                    src="~assets/images/MSU.jpg"
                                    class="q-pb-sm"
                                  />
                                </q-avatar>
                              </div>
                            </div>
                            <div class="col-8 q-pa-sm">
                              <div class="text-body text-bold text-uppercase">
                                {{ rep.student?.first_name }}
                                {{ rep.student?.last_name }}
                              </div>
                              <div class="text-caption">
                                {{ rep.student?.course }}
                              </div>
                              <div class="text-caption">
                                {{ rep.student?.yr_admitted }}
                              </div>
                              <div class="text-caption">
                                {{ rep.election?.academic_yr }}
                              </div>
                            </div>
                          </div>
                          <q-separator inset dark /><br />
                          <div class="row">
                            <div class="col">
                              <q-card-section class="text-overline">
                                <q-btn
                                  unelevated
                                  square
                                  dense
                                  push
                                  color="primary"
                                  label="Vote"
                                  class="full-width absolute-bottom"
                                  @click="onaddBallotSect(rep)"
                                />
                              </q-card-section>
                            </div>
                          </div>
                        </div>
                      </q-card>
                    </div>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
          <q-separator vertical />
        </div>
        <div class="col">
          <q-card>
            <q-card-section class="q-gutter-sm">
              <q-table
                title="Prime Minister"
                :rows="allVoteTemp"
                :columns="columns"
                class="my-sticky-header-table"
                :rows-per-page-options="[0]"
                row-key="temp_tally_id"
                hide-bottom
              />
              <q-table
                title="Secretary General"
                :rows="allSectTemp"
                :columns="columns"
                class="my-sticky-header-table"
                :rows-per-page-options="[0]"
                row-key="temp_tally_id"
                hide-bottom
              />
            </q-card-section>
            <q-card-section>
              <div class="row q-gutter-x-sm q-pa-sm">
                <div class="col">
                  <q-btn
                    unelevated
                    square
                    dense
                    push
                    color="positive"
                    class="full-width"
                    label="Submit Vote"
                    icon="check"
                    @click="submitVote()"
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
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { date } from 'quasar';
import {
  StudentDto,
  RepresentativeDto,
  VoteSsgDto,
  ElectionDto,
} from 'src/services/rest-api';
import { SectTemp } from 'src/store/secretaryTemp/state';
import { VoteTemp } from 'src/store/VoteTemp/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapGetters, mapState } from 'vuex';
const timeStamp = Date.now();
const currentDate = date.formatDate(timeStamp, 'YYYY-MM-DD');
const currentTime = date.formatDate(timeStamp, 'HH:mm');
@Options({
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('candidate', ['allRepresentative']),
    ...mapState('voteSsg', ['allVoteSsg']),
    ...mapState('VoteTemp', ['allVoteTemp']),
    ...mapGetters('representative', ['primePosition', 'secretaryPosition']),
    ...mapState('voteSsg', ['getHighestVote']),
    ...mapState('SecretaryTemp', ['allSectTemp']),
    ...mapState('election', ['allElection', 'activeElection']),
  },
  methods: {
    ...mapActions('representative', [
      'addRepresentative',
      'getAllRepresentative',
    ]),
    ...mapActions('voteSsg', ['addVoteSsg', 'getAllVoteSsg', 'getAllVoteSsg']),
    ...mapActions('VoteTemp', ['addVoteTemp', 'deleteVoteTemp', 'clear']),
    ...mapActions('SecretaryTemp', ['addSectTemp', 'deleteSectTemp']),
    ...mapActions('election', ['getAllElection', 'getActiveElection']),
  },
})
export default class studentVote extends Vue {
  getAllElection!: () => Promise<void>;
  getActiveElection!: () => Promise<void>;
  allElection!: ElectionDto[];
  addVoteSsg!: (payload: VoteSsgDto) => Promise<void>;
  getAllVoteSsg!: () => Promise<void>;
  allVoteSsg!: VoteSsgDto[];
  getHighestVote!: VoteSsgDto[];
  getAllRepresentative!: () => Promise<void>;
  allRepresentative!: RepresentativeDto[];
  allStudent!: StudentDto[];
  allVoteTemp!: VoteTemp[];
  clear!: () => Promise<void>;
  addVoteTemp!: (payload: VoteTemp) => Promise<void>;
  allSectTemp!: SectTemp[];
  addSectTemp!: (payload: SectTemp) => Promise<void>;
  primePosition!: RepresentativeDto[];
  secretaryPosition!: RepresentativeDto[];
  activeElection!: ElectionDto;
  async mounted() {
    await this.getAllRepresentative();
    await this.getAllVoteSsg();
    await this.getActiveElection();
    if (!this.activeElection) {
      this.$q
        .dialog({
          title: 'Election has not started yet',
          message: 'Please try again later',
          persistent: true,
        })
        .onOk(async () => {
          await this.$router.replace('/R_Nominee');
        })
        .onCancel(() => {
          // console.log('Cancel')
        });
    }
    console.log(this.allVoteTemp);
  }
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: VoteTemp) =>
        row.last_name + ', ' + row.first_name + ' ' + row.middle_name,
    },
    {
      name: 'position',
      align: 'center',
      label: 'Candidacy',
      field: (row: RepresentativeDto) => row.position,
    },
    {
      name: 'collge',
      align: 'center',
      label: 'college',
      field: (row: any) => row.college,
    },
  ];
  tab = 'prime';
  fitModes = ['scale-down'];
  prime = [];
  secretary = [];
  onResetClick() {
    this.prime = [];
    this.secretary = [];
  }
  clearSelection() {
    this.clear();
  }
  inputTemp: VoteTemp = {
    first_name: '',
    middle_name: '',
    last_name: '',
    course: '',
    yr_admitted: '',
    academic_yr: '',
  };
  async onaddBallot(data: RepresentativeDto) {
    if (data.student && data.election) {
      await this.addVoteTemp({
        ...data.student,
        primeStudentId: data.student?.student_id,
        academic_yr: data.election?.academic_yr,
      } as VoteTemp);
    }
  }
  async onaddBallotSect(data: RepresentativeDto) {
    if (data.student) {
      await this.addSectTemp({
        ...data.student,
        secretaryStudentId: data.student?.student_id,
      } as SectTemp);
    }
  }
  async submitVote() {
    const vote = this.allVoteTemp[0];
    const sect = this.allSectTemp[0];
    if (this.allVoteTemp.length < 0 || this.allSectTemp.length < 0) {
      this.$q
        .dialog({
          message: 'Submit vote?',
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          this.inputVoteSsg.prime = vote.primeStudentId;
          this.inputVoteSsg.secretary = sect.secretaryStudentId;
          this.inputVoteSsg.academic_yr = vote.academic_yr;
          await this.addVoteSsg({
            ...this.inputVoteSsg,
          });
          await this.$router.replace('/R_Result');
          this.$q.notify({
            type: 'positive',
            message: 'You have successfully voted.',
          });
        });
      this.resetModel();
    } else {
      this.$q.dialog({
        message: 'You have to vote both prime minister and secretary',
      });
    }
  }
  inputVoteSsg: any = {
    date: currentDate,
    time: currentTime,
  };
  resetModel() {
    this.inputVoteSsg = {
      date: currentDate,
      time: currentTime,
    };
  }
}
</script>
<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%
  max-height: 700px
  width: 100%
  max-width: 1400px
</style>