<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12 col-md-4 q-pa-md">
        <div class="q-pa-md text-overline text-bold">
          Voting Information
          <q-separator />
        </div>
        <q-card>
          <div class="q-pa-md q-gutter-y-md">
              Your <strong>College Representative</strong> shows here
            <div class="col text-caption">
              1st representative: <strong>{{ selected }}</strong>
            </div>
            <div class="col text-caption">
              2nd representative: <strong>{{ selected }}</strong>
            </div>
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
              College Representative
            </div>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <q-table
              class="my-sticky-header-table"
              :rows="allVoteRep"
              :columns="columns"
              row-key="name"
              :selected-rows-label="selected"
              selection="single"
              v-model:selected="selected"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { StudentDto, VoteRepDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('voteRep', ['allVoteRep']),
  },
  methods: {
    ...mapActions('voteRep', ['addVoteRep', 'getAllVoteRep']),
  },
})
export default class studentVote extends Vue {
  addVoteRep!: (payload: VoteRepDto) => Promise<void>;
  getAllVoteRep!: () => Promise<void>;
  allVoteRep!: VoteRepDto[];
  allStudent!: StudentDto[];

  async mounted() {
    await this.getAllVoteRep();
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
  selected = [];

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
