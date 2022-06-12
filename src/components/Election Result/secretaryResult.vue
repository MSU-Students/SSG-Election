<template>
  <div>
    <q-table
      :grid="$q.screen.xs"
      title="College Representative"
      class="my-sticky-header-table"
      :rows="allExecutiveSecretary"
      :columns="prime"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:top-right>
        <div class="row">
          <q-input
            outlined
            rounded
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';
import {
  VoteSsgDto,
} from 'src/services/rest-api';
import { ICandidateVote } from 'src/store/vote-rep/state';
import { IRepresentativeVote } from 'src/store/vote-ssg/state';
@Options({
  computed: {
    ...mapState('voteSsg', ['allVoteSsg', 'summary']),
  },
})
export default class studentResult extends Vue {
  summary!: IRepresentativeVote[];

  filter = '';

  prime = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: IRepresentativeVote) =>
        row.representative.student?.last_name +
        ', ' +
        row.representative.student?.first_name +
        ' ' +
        row.representative.student?.middle_name,
      sortable: true,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: IRepresentativeVote) => row.representative.student?.course,
      sortable: true,
    },

    {
      name: 'level',
      align: 'center',
      label: 'Year Level',
      field: (row: IRepresentativeVote) => row.representative.student?.yr_admitted,
      sortable: true,
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: IRepresentativeVote) => row.representative.student?.college,
      sortable: true,
    },
    {
      name: 'vote',
      align: 'vote',
      label: 'Total Vote',
      field: (row: IRepresentativeVote) => row.votes.length,
      sortable: true,
    },
  ];

  get executiveSecretary() {
    return this.summary.filter(
      (es) => es.representative.position == 'Executive Secretary'
    );
  }

  get allExecutiveSecretary() {
    return this.executiveSecretary.filter((i) => !!i.votes.length);
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%
  max-height: 600px
  width: 100%
  max-width: 1500px
</style>
