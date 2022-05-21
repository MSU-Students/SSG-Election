<template>
  <div>
    <q-table
      class="my-sticky-header-table"
      title="SSG Account List"
      :grid="$q.screen.xs"
      :columns="SSG_Column"
      :rows="allCandidate"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
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

      <template v-slot:body-cell-Details="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="blue"
              icon="description"
              size="md"
              flat
              dense
              @click="openSsgDetailDialog(props.row)"
            />
            <q-dialog v-model="showSSGDetails">
              <q-card
                class="my-card"
                style="width: 700px; max-width: 60vw"
                flat
                bordered
              >
                <q-card-section>
                  <div class="text-h6">
                    SSG Member Information
                    <q-btn
                      round
                      flat
                      dense
                      icon="close"
                      class="float-right"
                      color="grey-8"
                      v-close-popup
                    ></q-btn>
                  </div>
                </q-card-section>
                <q-card-section horizontal>
                  <q-card-section class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="text-caption">
                      {{ inputSsg.votessg?.student?.college }} -
                      {{ inputSsg.votessg?.student?.course }}
                    </div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      {{ inputSsg.votessg?.student?.last_name }},
                      {{ inputSsg.votessg?.student?.first_name }}
                      {{ inputSsg.votessg?.student?.middle_name }}
                    </div>
                    <div class="text-caption text-grey">
                      {{ inputSsg.position }}
                    </div>
                  </q-card-section>

                  <q-card-section class="col-5 flex flex-center">
                    <q-avatar
                      square
                      size="120px"
                      font-size="82px"
                      color="teal"
                      text-color="white"
                      icon="account_circle"
                    />
                  </q-card-section>
                </q-card-section>

                <q-separator />

                <q-card-section>
                  <div class="text-italic text-h5">
                    "{{ inputSsg.academic_yr }}"
                  </div>
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import {
  ElectionDto,
  StudentDto,
  SsgMemberDto,
  MediaDto,
  RepresentativeDto,
  CandidateDto,
} from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapGetters, mapState } from 'vuex';
import RepresentativeAccount from 'components/Account/representative.vue';

@Options({
  components: {
    RepresentativeAccount,
  },
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('election', ['allElection']),
    ...mapState('representative', ['allRepresentative']),
    ...mapState('ssgMember', ['allSsgMember']),
    ...mapState('candidate', ['allCandidate']),
  },
  methods: {
    ...mapActions('student', [
      'addStudent',
      'editStudent',
      'deleteStudent',
      'getAllStudent',
    ]),
    ...mapActions('representative', [
      'addRepresentative',
      'editRepresentative',
      'deleteRepresentative',
      'getAllRepresentative',
    ]),
    ...mapActions('ssgMember', ['getAllSsgMember']),
    ...mapActions('candidate', ['getAllCandidate']),
    ...mapActions('media', ['uploadMedia']),
  },
})
export default class ManageAccount extends Vue {
  //--------------------------------------------------------Table Column for student account
  allElection!: ElectionDto[];
  allStudent!: StudentDto[];
  addStudent!: (payload: StudentDto) => Promise<void>;
  editStudent!: (payload: StudentDto) => Promise<void>;
  deleteStudent!: (payload: StudentDto) => Promise<void>;
  getAllStudent!: () => Promise<void>;

  allCandidate!: CandidateDto[];
  allRepresentative!: RepresentativeDto[];
  addRepresentative!: (payload: RepresentativeDto) => Promise<void>;
  editRepresentative!: (payload: RepresentativeDto) => Promise<void>;
  deleteRepresentative!: (payload: RepresentativeDto) => Promise<void>;
  getAllRepresentative!: () => Promise<void>;

  allSsgMember!: SsgMemberDto[];
  getAllSsgMember!: () => Promise<void>;

  uploadMedia!: (payload: File) => Promise<MediaDto>;

  async mounted() {
    await this.getAllStudent();
    await this.getAllRepresentative();
    await this.getAllSsgMember();
  }

  //-----------------------------------------------Table Column for candidate account
  SSG_Column = [
    { name: 'action', align: 'center', field: 'action' },
    {
      name: 'id',
      align: 'center',
      label: 'ID Number',
      field: (row: any) => row.student?.school_id,
    },
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
      name: 'email',
      align: 'center',
      label: 'Email',
      field: (row: any) => row.student?.email,
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
    {
      name: 'election_yr',
      align: 'center',
      label: 'Year Elected',
      field: (row: any) => row.election?.start_date,
    },
    {
      name: 'position',
      align: 'center',
      label: 'Student Status',
      field: 'position_type',
    },
    { name: 'Details', align: 'center', label: 'Details', field: 'Details' },
  ];

  filter = '';
  imageAttachement: File[] | File = [];
  loading = false;
  showDetails = false;
  showSSGDetails = false;
  tab = 'student';
  addNewAccount = false;
  updateAccount = false;
  editRowAccount = false;
  //candidate
  addNewCandidate = false;
  editRowCandidate = false;
  updateCandidate = false;

  addNewSsg = false;
  editRowSsg = false;
  updateSsg = false;

  //---------------------------------------------------for student
  inputSsg: SsgMemberDto = {
    position: '',
    academic_yr: '',
  };

  //---------------------------------------------------for Candidate

  position = ['Prime Minister', 'Executive Sectretary'];
  statusOptions = ['Active', 'Inactive'];
  options = [
    'College of Agriculture',
    'College of Business Administration and Accounting',
    'College of Education',
    'College of Engineering',
    'College of Fisheries',
    'College of Forestry and Environmental Studies',
    'College of Health Science',
    'College of Hotel and Restaurant Management',
    'College of Information and Computing Science',
    'College of Law',
    'College of Medicine',
    'College of Natural Science and Mathematics',
    'College of Public Affair',
    'College of Social Science and Humanities',
    'College of Sports, Physical Education and Recreation',
    'King Faisal Center for Islamic, Arabic and Asian Studies',
  ];

  openSsgDetailDialog(val: SsgMemberDto) {
    this.showSSGDetails = true;
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


  .q-table__top,
  .q-table__bottom,

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
