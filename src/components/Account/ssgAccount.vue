<template>
  <div>
    <q-table
      class="my-sticky-header-table"
      title="SSG Account List"
      :grid="$q.screen.xs"
      :columns="SSG_Column"
      :rows="allSsgMember"
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
        <div>
          <q-btn
            color="primary"
            dense
            flat
            icon="verified"
            :disable="allOfficers.length < 0"
            @click="onProclaimAllOfficers()"
          >
            <q-tooltip :offset="[0, 8]">Proclaim Candidates</q-tooltip>
          </q-btn>
        </div>
      </template>

      <template v-slot:body-cell-Details="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="primary"
              icon="more_vert"
              size="md"
              flat
              dense
              @click="openSsgDetailDialog(props.row)"
              ><q-tooltip class="bg-primary" :offset="[10, 10]">
                Details
              </q-tooltip></q-btn
            >
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
                      {{ inputSsg.student?.college }} -
                      {{ inputSsg.student?.course }}
                    </div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      {{ inputSsg.student?.last_name }},
                      {{ inputSsg.student?.first_name }}
                      {{ inputSsg.student?.middle_name }}
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
import { IRepresentativeVote } from 'src/store/vote-ssg/state';

@Options({
  components: {
    RepresentativeAccount,
  },
  computed: {
    ...mapState('ssgMember', ['allSsgMember']),
    ...mapState('voteSsg', ['allVoteSsg', 'summary']),
    ...mapGetters('voteSsg', ['SsgOfficials']),
  },
  methods: {
    ...mapActions('ssgMember', [
      'addSsgMember',
      'addProclaimSsgMember',
      'getAllSsgMember',
    ]),
  },
})
export default class ManageAccount extends Vue {
  //--------------------------------------------------------Table Column for student account
  summary!: IRepresentativeVote[];
  allSsgMember!: SsgMemberDto[];
  getAllSsgMember!: () => Promise<void>;

  addProclaimSsgMember!: (payload: any) => Promise<void>;
  addSsgMember!: (payload: any) => Promise<void>;
  proclaimAllOfficers!: (payload: IRepresentativeVote[]) => Promise<void>;
  SsgOfficials!: IRepresentativeVote[];
  async mounted() {
    await this.getAllSsgMember();
  }

  //-----------------------------------------------Table Column for candidate account
  SSG_Column = [
    { name: 'action', align: 'center', field: 'action' },
    {
      name: 'id',
      align: 'left',
      label: 'ID Number',
      field: (row: any) => row.student?.school_id,
      sortable: true,
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
      sortable: true,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: (row: any) => row.student?.email,
      sortable: true,
    },
    {
      name: 'level',
      align: 'center',
      label: 'Year Admitted',
      field: (row: any) => row.student?.yr_admitted,
      sortable: true,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.student?.course,
      sortable: true,
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: (row: any) => row.student?.department,
      sortable: true,
    },
    {
      name: 'election_yr',
      align: 'center',
      label: 'Year Elected',
      field: (row: any) => row.election?.start_date,
      sortable: true,
    },
    {
      name: 'position',
      align: 'center',
      label: 'SSG Position',
      field: 'position_type',
      sortable: true,
    },
    { name: 'Details', align: 'center', label: '', field: 'Details' },
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

  
  openSsgDetailDialog(val: SsgMemberDto) {
    this.showSSGDetails = true;
  }

  get allOfficers() {
    return this.SsgOfficials.filter((i) => !!i.votes.length);
  }

  isLoading = true;
  async onProclaimAllOfficers() {
    this.isLoading = true;
    this.$q
      .dialog({
        title: 'Do you want to proclaim the final candidates?',
        message:
          'Make sure that the Election for Prime Minister and Executive Secretary is over',
        color: 'negative',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.addProclaimSsgMember(this.allOfficers);
        this.isLoading = false;
        this.$q.notify({
          type: 'positive',
          message: 'Candidates has been proclaimed!.',
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
