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
                <div class="text-h6">Prime Minister</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="secretary">
                <div class="text-h6">Secretary</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('candidate', ['allRepresentative']),
    ...mapState('voteSsg', ['allVoteSsg']),
    ...mapState('tempRep', ['allTempRep']),
  },
  methods: {
    ...mapActions('representative', [
      'addRepresentative',
      'getAllRepresentative',
    ]),
    ...mapActions('voteSsg', ['addVoteSsg', 'getAllVoteSsg']),
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
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: (row: any) => row.student?.department,
    },
  ];
  tab = 'prime';
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
    if (this.allTempRep.length >= 2) {
      this.$q.notify({
        type: 'warning',
        message: 'You have reached the maximum vote!',
      });
    }
  }

  submitVote(val: VoteSsgDto) {
    const prime = this.allTempRep[0];
    const secretary = this.allTempRep[1];
    this.$q
      .dialog({
        message: 'Submit vote?',
        cancel: true,
        persistent: true,
      })
      .onOk(async (data: RepresentativeDto) => {
        if (data.student) {
          await this.inputVoteSsg({
            ...data.student,
            student_id: data.student.student_id,
          });
        }
        this.inputVoteSsg.prime_name = prime;
        this.inputVoteSsg.secretary_name = secretary;
        await this.addVoteSsg(val.vote_ssg_id as any);
        await this.$router.replace('/r_result');
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
