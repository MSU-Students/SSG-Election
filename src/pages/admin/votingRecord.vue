<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        title="Student Voting Record"
        :grid="$q.screen.xs"
        :rows="allVoteRep"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-bottom
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { VoteRepDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('voteRep', ['allVoteRep']),
  },
  methods: {
    ...mapActions('voteRep', ['addVoteRep', 'getAllvoteRep']),
  },
})
export default class VotingRecord extends Vue {
  allVoteRep!: VoteRepDto[];
  getAllvoteRep!: () => Promise<void>;
  async mounted() {
    await this.getAllvoteRep();
  }

  filter = '';
  columns = [
    {
      name: 'action',
      align: 'center',
      label: 'ID Number',
      field: (row: VoteRepDto) => row.student?.school_id,
      sortable: true,
    },
    {
      name: 'name',
      required: true,
      label: 'Student Name',
      align: 'left',
      field: (row: VoteRepDto) =>
        row.student?.first_name + ' ' + row.student?.last_name,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'action',
      align: 'center',
      label: 'College',
      field: (row: VoteRepDto) => row.student?.college,
      sortable: true,
    },
    {
      name: 'action',
      align: 'center',
      label: 'Voting Status',
      field: (row: VoteRepDto) => row.student?.college,
      sortable: true,
    },
  ];
}
</script>

<style>
.my-sticky-header-table {
  height: 100%;
  max-height: 700px;
  width: 100%;
  max-width: 1500px;
}
</style>
