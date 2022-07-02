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
        <template #body-cell-status="props">
          <q-td :props="props">
            <q-chip
              flat
              color="white"
              :text-color="colorManipulation(props.row.voter_status)"
              :label="labelManipulation(props.row.voter_status)"
            />
          </q-td>
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
      name: 'year',
      align: 'center',
      label: 'Year Admitted',
      field: (row: StudentDto) => row.yr_admitted,
      sortable: true,
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: (row: StudentDto) => row.department,
      sortable: true,
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: StudentDto) => row.college,
      sortable: true,
    },

    {
      name: 'status',
      align: 'center',
      label: 'Voting Status',
      field: (row: StudentDto) => row.voter_status,
      sortable: true,
    },
  ];

  colorManipulation(voter_status: string) {
    if (voter_status === 'Voted') {
      return 'positive';
    }
    if (voter_status === 'Not vote yet') {
      return 'grey';
    }
  }
  labelManipulation(voter_status: string) {
    if (voter_status === 'Voted') {
      return 'Voted';
    }
    if (voter_status === 'Not vote yet') {
      return 'Not vote yet';
    }
  }
}
</script>

<style>
.my-sticky-header-table {
  height: 100%;
  max-height: 3000px;
  width: 100%;
  max-width: 3500px;
}
</style>
