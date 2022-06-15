<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        title="Student  Voting Record"
        :grid="$q.screen.xs"
        :columns="columns"
        :rows="allStudent"
        virtual-scroll
        row-key="name"
        :rows-per-page-options="[0]"
        :filter="filter"
      >
        <template v-slot:top-right>
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
        </template>
      </q-table>
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
    ...mapActions('student', ['addVoteRep', 'getAllStudent']),
  },
})
export default class VotingRecord extends Vue {
  allVoteRep!: VoteRepDto[];
  getAllStudent!: () => Promise<void>;
  allStudent!: StudentDto[];

  async mounted() {
    await this.getAllStudent();
  }

  filter = '';
  columns = [
    {
      name: 'action',
      align: 'center',
      label: 'ID Number',
      field: (row: StudentDto) => row.school_id,
      sortable: true,
    },
    {
      name: 'name',
      required: true,
      label: 'Student Name',
      align: 'left',
      field: (row: StudentDto) => row.first_name + ' ' + row.last_name,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'action',
      align: 'center',
      label: 'College',
      field: (row: StudentDto) => row.college,
      sortable: true,
    },
    {
      name: 'action',
      align: 'center',
      label: 'Voting Status',
      field: (row: StudentDto) => row.voter_status,
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
