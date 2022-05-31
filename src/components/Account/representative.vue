<template>
  <div>
    <q-table
      class="my-sticky-header-table"
      title="Representative Account List"
      :grid="$q.screen.xs"
      :columns="RepresentativeColumn"
      :rows="allCollegeRepresentative"
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

          <q-btn
            label="Add Account"
            color="primary"
            dense
            flat
            icon="add"
            @click="addNewCandidate = true"
          />
          <q-dialog v-model="addNewCandidate" persistent>
            <q-card style="width: 900px; max-width: 100vw">
              <q-card-section class="row">
                <q-toolbar>
                  <div class="text-h6">Create New Account</div>
                  <q-space />
                  <q-btn
                    flat
                    round
                    dense
                    icon="close"
                    @click="resetModelCandidate()"
                    v-close-popup
                  />
                </q-toolbar>
              </q-card-section>

              <q-card-section class="q-gutter-sm">
                <div class="q-gutter-xs">
                  <q-select
                    :options="allStudent"
                    option-label="school_id"
                    option-value="student_id"
                    map-options
                    emit-value
                    v-model="inputRepresentative.voterep"
                    dense
                    outlined
                    label="Select ID Number"
                  >
                  </q-select>
                </div>
                <div align="right">
                  <q-btn
                    flat
                    label="Cancel"
                    color="red-10"
                    @click="resetModelCandidate()"
                    v-close-popup
                  />
                  <q-btn
                    flat
                    label="Save"
                    color="primary"
                    @click="onaddCandidateAccount()"
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="blue"
              icon="edit"
              size="sm"
              flat
              dense
              @click="openEditCandidateDialog(props.row)"
            />

            <!---------EDIT CANDIDATE----------->
            <q-dialog v-model="editRowCandidate" persistent>
              <q-card style="width: 800px; max-width: 100vw">
                <q-card-section class="row">
                  <div class="text-h6">Edit Account</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-sm">
                  <div class="row q-gutter-xs">
                    <div class="col">
                      <q-select
                        :options="allStudent"
                        option-label="school_id"
                        option-value="student_id"
                        map-options
                        emit-value
                        v-model="inputRepresentative.voterep"
                        dense
                        outlined
                        label="Select ID Number"
                      >
                      </q-select>
                    </div>

                    <div class="col">
                      <q-select
                        :options="allElection"
                        option-label="academic_yr"
                        option-value="election_id"
                        map-options
                        emit-value
                        v-model="inputRepresentative.voterep"
                        dense
                        outlined
                        label="Select Year Elected"
                      >
                      </q-select>
                    </div>
                  </div>
                  <div class="q-gutter-xs">
                    <q-select
                      outlined
                      dense
                      :options="position"
                      v-model="inputRepresentative.position"
                      label="Running for: "
                    />
                  </div>
                  <div class="q-gutter-xs">
                    <q-input
                      v-model="inputRepresentative.academic_yr"
                      dense
                      outlined
                      label="Year"
                    >
                    </q-input>
                  </div>
                  <div class="q-gutter-xs">
                    <q-input
                      v-model="inputRepresentative.platform"
                      type="textarea"
                      dense
                      outlined
                      label="Platform"
                    >
                    </q-input>
                  </div>
                  <div align="right">
                    <q-btn
                      flat
                      label="Cancel"
                      color="red-10"
                      @click="resetModelCandidate()"
                      v-close-popup
                    />
                    <q-btn
                      flat
                      label="Save"
                      color="primary"
                      @click="onEditCandidateAccount()"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </q-dialog>
            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="deleteSpecificCandidateAccount(props.row)"
            />

            <q-btn
              round
              color="blue"
              icon="more_vert"
              size="md"
              flat
              dense
              @click="openDetailDialog(props.row)"
            />
            <q-dialog v-model="showDetails">
              <q-card
                class="my-card"
                style="width: 700px; max-width: 60vw"
                flat
                bordered
              >
                <q-card-section>
                  <div class="text-h6">
                    Representative Information
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
                      {{ inputRepresentative.candidate?.student?.college }}
                      -
                      {{ inputRepresentative.candidate?.student?.course }}
                    </div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      {{ inputRepresentative.candidate?.student?.last_name }},
                      {{ inputRepresentative.candidate?.student?.first_name }}
                      {{ inputRepresentative.candidate?.student?.middle_name }}
                    </div>
                    <div class="text-caption text-grey">
                      {{ inputRepresentative.position }}
                    </div>
                  </q-card-section>

                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      square
                      :src="`http://localhost:3000/media/${inputRepresentative.candidate?.student?.url}`"
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
                    {{ inputRepresentative }}
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
  RepresentativeDto,
  VoteRepDto,
} from 'src/services/rest-api';
import { ICandidateVote } from 'src/store/vote-rep/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapGetters, mapState, Payload } from 'vuex';

@Options({
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('election', ['allElection']),
    ...mapState('representative', ['allRepresentative']),
    ...mapGetters('voteRep', ['collegeRepresentatives']),
    ...mapState('voteRep', ['summary']),
  },
  methods: {
    ...mapActions('voteRep', ['getAllVoteRep']),
    ...mapActions('representative', [
      'addRepresentative',
      'editRepresentative',
      'deleteRepresentative',
      'getAllRepresentative',
    ]),
  },
})
export default class ManageAccount extends Vue {
  //--------------------------------------------------------Table Column for student account
  allStudent!: StudentDto[];
  allElection!: ElectionDto[];
  getAllElection!: () => Promise<void>;
  getAllVoteRep!: () => Promise<void>;

  collegeRepresentatives!: ICandidateVote[];
  summary!: ICandidateVote[];

  allRepresentative!: RepresentativeDto[];
  addRepresentative!: (payload: any) => Promise<void>;
  editRepresentative!: (payload: RepresentativeDto) => Promise<void>;
  deleteRepresentative!: (payload: RepresentativeDto) => Promise<void>;
  getAllRepresentative!: () => Promise<void>;

  async mounted() {
    await this.getAllRepresentative();
    await this.getAllVoteRep();
    await this.addRepresentative(this.allCollegeRepresentative);
    console.log('getAllRepresentative', this.allCollegeRepresentative);
  }
  //-----------------------------------------------Table Column for candidate account
  RepresentativeColumn = [
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
    {
      name: 'id',
      align: 'center',
      label: 'ID Number',
      field: (row: ICandidateVote) => row.candidate.student?.school_id,
    },
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: ICandidateVote) =>
        row.candidate.student?.last_name +
        ', ' +
        row.candidate.student?.first_name +
        ' ' +
        row.candidate.student?.middle_name,
    },

    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: ICandidateVote) => row.candidate.student?.college,
    },
    {
      name: 'position',
      align: 'center',
      label: 'Student Status',
      field: (row: ICandidateVote) => row.candidate.student?.student_type,
    },
    {
      name: 'votes',
      align: 'center',
      label: 'Votes',
      field: (row: ICandidateVote) => row.votes.length,
    },
  ];

  filter = '';
  imageAttachement: File[] | File = [];
  loading = false;
  showDetails = false;
  showSSGDetails = false;
  //candidate
  addNewCandidate = false;
  editRowCandidate = false;
  updateCandidate = false;

  inputRepresentative: RepresentativeDto = {
    platform: '',
    position: '',
    academic_yr: '',
  };

  //---------------------------------------------------for Candidate

  position = ['Prime Minister', 'Executive Sectretary'];

  get allCollegeRepresentative() {
    return this.collegeRepresentatives.filter((i) => !!i.votes.length);
  }

  async onaddCandidateAccount() {
    await this.addRepresentative(this.inputRepresentative);
    this.addNewCandidate = false;
    this.resetModelCandidate();
    this.$q.notify({
      type: 'positive',
      message: 'Account is Successfully Added!.',
    });
  }

  async onEditCandidateAccount() {
    await this.editRepresentative(this.inputRepresentative);
    this.editRowCandidate = false;
    this.resetModelCandidate();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  openEditCandidateDialog(val: RepresentativeDto) {
    this.editRowCandidate = true;
    this.inputRepresentative = { ...val };
  }
  openDetailDialog(val: RepresentativeDto) {
    this.showDetails = true;
    this.inputRepresentative = { ...val };
  }

  deleteSpecificCandidateAccount(val: RepresentativeDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteRepresentative(val.representative_id as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  resetModelCandidate() {
    this.inputRepresentative = {
      platform: '',
      position: '',
      academic_yr: '',
    };
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
