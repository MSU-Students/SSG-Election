<template>
  <q-page>
    <div class="q-pa-sm">
      <!--separator-->
      <div class="row q-col-gutter-lg">
        <div class="col">
          <q-toolbar>
            <q-toolbar-title class="text-overline text-weight-bold"
              >Select your Candidates</q-toolbar-title
            >
          </q-toolbar>
        </div>
      </div>
      <!--separator-->
      <div class="row q-gutter-sm">
        <div class="col-12 col-md">
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
            </q-tab-panels>
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
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  StudentDto,
  RepresentativeDto,
  VoteSsgDto,
} from 'src/services/rest-api';
import { TempRep } from 'src/store/tempRep/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapGetters, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('candidate', ['allRepresentative']),
    ...mapState('voteSsg', ['allVoteSsg']),
    ...mapState('tempRep', ['allTempRep']),
    ...mapGetters('representative', ['primePosition', 'secretaryPosition']),
  },
  methods: {
    ...mapActions('representative', [
      'addRepresentative',
      'getAllRepresentative',
    ]),
    ...mapActions('voteSsg', ['addVoteSsg', 'getAllVoteSsg', 'getAllVoteSsg']),
    ...mapActions('tempRep', ['addTempRep', 'deleteTempRep', 'clear']),
  },
})
export default class studentVote extends Vue {
  addVoteSsg!: (payload: VoteSsgDto) => Promise<void>;
  getAllVoteSsg!: () => Promise<void>;
  allVoteSsg!: VoteSsgDto[];

  getAllRepresentative!: () => Promise<void>;
  allRepresentative!: RepresentativeDto[];

  allStudent!: StudentDto[];
  allTempRep!: TempRep[];
  clear!: () => Promise<void>;
  addTempRep!: (payload: TempRep) => Promise<void>;

  primePosition!: RepresentativeDto[];
  secretaryPosition!: RepresentativeDto[];

  async mounted() {
    await this.getAllRepresentative();
    await this.getAllVoteSsg();
  }

  columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: TempRep) =>
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

  async onaddBallot(data: RepresentativeDto) {
    if (data.student) {
      await this.addTempRep({
        ...data.student,
        student_id: data.student?.student_id,
        temp_tally_id: 0,
      } as TempRep);
    }
  }
  addNewVoteSsg = false;

  async submitVote() {
    const prime = this.allTempRep[0];
    const secretary = this.allTempRep[1];

    this.$q
      .dialog({
        message: 'Submit vote?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        //copy from
        this.inputVoteSsg.prime = prime.student_id;
        this.inputVoteSsg.secretary = secretary.student_id;

        await this.addVoteSsg(this.inputVoteSsg);
        await this.$router.replace('/R_Result');
        this.addNewVoteSsg = false;
        this.resetModel();
        this.$q.notify({
          type: 'positive',
          message: 'You have successfully voted.',
        });
      });
  }

  inputVoteSsg: any = {
    prime_name: '',
    secretary_name: '',
    academic_yr: '',
    date: '',
    time: '',
  };

  resetModel() {
    this.inputVoteSsg = {
      rep2: '',
      rep1: '',
      academic_yr: '',
      date: '',
      time: '',
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
  max-width: 1500px
</style>
