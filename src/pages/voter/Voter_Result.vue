<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-pl-xl">
        <div class="text-h5 q-pb-md text-bold">
          <q-icon name="how_to_vote" color="primary" style="font-size: 3rem" />
          Election Result
        </div>
      </div>
      <div class="">
        <q-card>
          <div class="q-pa-sm q-gutter-x-sm row">
            <div class="col-12 col-md">
              <q-table
                :grid="$q.screen.xs"
                title="College Representatives"
                class="my-sticky-header-table"
                :rows="allVoteRep"
                :columns="representative"
                row-key="name"
                :filter="filter"
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
            <div class="col-12 col-md">
              <q-card>
                <div class="q-pa-md text-center text-bold text-primary">
                  College Representative in Graph
                </div>
                <representative-result />
              </q-card>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import RepresentativeResult from 'components/Charts/representativeResult.vue';
import { VoteRepDto, StudentDto } from 'src/services/rest-api';
@Options({
  components: { RepresentativeResult },
  computed: {
    ...mapState('voteRep', ['allVoteRep']),
    ...mapState('student', ['allStudent']),
  },
  methods: {
    ...mapActions('voteRep', ['getAllVoteRep']),
  },
})
export default class studentResult extends Vue {
  allStudent!: StudentDto[];
  allVoteRep!: VoteRepDto[];
  getAllVoteRep!: () => Promise<void>;
  async mounted() {
    await this.getAllVoteRep();
  }

  tab = 'representative';
  filter = '';

  representative = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: any) =>
        row.student?.last_name + ', ' + row.student?.first_name,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.student?.course,
    },

    {
      name: 'level',
      align: 'center',
      label: 'Year Level',
      field: (row: any) => row.student?.yr_admitted,
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: (row: any) => row.student?.department,
    },
    { name: 'vote', align: 'vote', label: 'Total Vote', field: 'vote' },
  ];
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
