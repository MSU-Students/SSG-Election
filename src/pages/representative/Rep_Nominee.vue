<template>
  <div class="q-pa-md">
    <!--separator-->
    <div class="row q-col-gutter-lg">
      <div class="col">
        <q-toolbar>
          <q-toolbar-title class="text-overline text-weight-bold"
            >Election Campaign</q-toolbar-title
          >
        </q-toolbar>
      </div>
    </div>
    <!--separator-->
    <q-card class="my-my-card">
      <q-tabs
        v-model="tab"
        dense
        class="bg-deep-orange-1"
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
          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="secretary">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script lang="ts">
import {
  RepresentativeDto,
  StudentDto,
  ElectionDto,
} from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('representative', ['allRepresentative']),
    ...mapState('student', ['allStudent']),
    ...mapState('election', ['allElection']),
  },
  methods: {
    ...mapActions('representative', ['getAllRepresentative']),
  },
})
export default class ManageElection extends Vue {
  getAllRepresentative!: () => Promise<void>;
  allRepresentative!: RepresentativeDto[];
  allElection!: ElectionDto[];

  getAllStudent!: () => Promise<void>;
  allStudent!: StudentDto[];

  async mounted() {
    await this.getAllRepresentative();
  }

  filter = '';
  tab = 'prime';
  showDetails = false;
  addNewCandidate = false;
  editRowCandidate = false;
  dense = true;

  student_type = ['Regular', 'Representative'];
  fitModes = ['scale-down'];

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
      field: (row: any) => row.yr_admitted,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.course,
    },
  ];
}
</script>

<style>
.my-card {
  height: 100%;
  max-height: 700px;
}
.bg-img {
  background-color: #f3eee8;
}
.q-carousel {
  background-color: #f3eee8;
}
.my-sticky-header-table {
  height: 200px;
  width: 100%;
  max-width: 1300px;
}
.my-sticky-table {
  width: 250px;
}
</style>
