<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12 col-md-4 q-pa-md">
        <div class="q-pa-md text-overline text-bold">
          Voting Information
          <q-separator />
        </div>
        <q-card>
          <div class="col q-pa-md text-caption">
            Prime Minister: <strong>{{ prime }}</strong>
          </div>

          <div class="col q-pa-md text-caption">
            Secretary General: <strong>{{ secretary }}</strong>
          </div>
          <q-separator />
          <div class="row justify-end q-pa-sm q-pr-md">
            <q-btn
              dense
              class="text-overline"
              label="Submit Vote"
              color="primary"
              @click="submitVote"
            />

            <q-btn
              flat
              dense
              style="color: maroon"
              label="Reset"
              @click="onResetClick"
              class="text-overline q-ml-md"
            />
          </div>
        </q-card>
      </div>
      <div class="col-12 col-md-8 q-px-lg q-gutter-y-md">
        <div class="q-pt-lg q-mt-lg text-overline text-bold">
          Select Candidates
          <q-separator />
        </div>
        <q-card>
          <q-card-actions class="bg-deep-orange-1">
            <div class="text-bold text-subtitle2 q-pl-md">
              <q-icon name="people" color="primary" />
              Prime Minister
            </div>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <q-table
              class="my-sticky-header-table"
              :rows="allReresentative"
              :columns="columns"
              row-key="name"
              :selected-rows-label="prime"
              selection="single"
              v-model:selected="prime"
            />
          </q-card-actions>
        </q-card>

        <q-card>
          <q-card-actions class="bg-deep-orange-1">
            <div class="text-bold text-subtitle2 q-pl-md">
              <q-icon name="people" color="primary" />
              Secretary General
            </div>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <q-table
              class="my-sticky-header-table"
              :rows="allReresentative"
              :columns="columns"
              row-key="name"
              :selected-rows-label="secretary"
              selection="single"
              v-model:selected="secretary"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { StudentDto, RepresentativeDto, VoteSsgDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('candidate', ['allRepresentative']),
    ...mapState('voteSsg', ['allVoteSsg']),
  },
  methods: {
    ...mapActions('representative', ['addRepresentative', 'getAllRepresentative']),
    ...mapActions('voteSsg', ['addVoteSsg', 'getAllVoteSsg']),
  },
})
export default class studentVote extends Vue {
  addVoteSsg!: (payload: VoteSsgDto) => Promise<void>;
  getAllVoteSsg!: () => Promise<void>;
  allVoteSsg!: VoteSsgDto[];

  getAllRepresentative!: () => Promise<void>;
  allReresentative!: RepresentativeDto[];

  allStudent!: StudentDto[];

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
  prime = [];
  secretary = [];

  onResetClick() {
    this.prime = [];
    this.secretary = [];
  }

  submitVote(val: VoteSsgDto) {
    this.$q
      .dialog({
        message: 'Submit vote?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.addVoteSsg(val.vote_ssg_id as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
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
