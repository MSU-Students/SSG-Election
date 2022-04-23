div
<template>
  <q-page>
    <div class="">
      <div style="width:100%, max-width: 1200px">
        <q-tabs
          v-model="tab"
          class="bg-primary text-white"
          align="justify"
          narrow-indicator
        >
          <q-tab
            class="text-caption"
            name="student"
            label="Student Account"
            icon="lock"
          />
          <q-tab
            class="text-caption"
            name="representative"
            label="Representatives Account"
            icon="lock"
          />
          <q-tab
            class="text-caption"
            name="ssg"
            label="SSG Account"
            icon="lock"
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-white text-center">
          <q-tab-panel name="student">
            <q-table
              class="my-sticky-header-table"
              title="Student Account List"
              :grid="$q.screen.xs"
              :columns="columns"
              :rows="allStudent"
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
                    @click="addNewAccount = true"
                  />
                  <q-dialog v-model="addNewAccount" persistent>
                    <q-card style="width: 1100px; max-width: 100vw">
                      <q-card-section class="row">
                        <div class="text-h6">Create new Account</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section>
                        <div class="row q-pl-md q-pr-lg">
                          <!--C O L U M N-->
                          <div class="col-12 col-md-4">
                            <div class="text-overline text-bold">
                              Account Type
                              <div class="q-gutter-y-md">
                                <q-file
                                  outlined
                                  v-model="file"
                                  label="Pick a Profile Pic"
                                  style="max-width: 300px"
                                />

                                <q-select
                                  outlined
                                  dense
                                  v-model="inputAccount.student_type"
                                  :options="student_type"
                                  label="Select Account type"
                                  hint="change student status"
                                  style="max-width: 300px"
                                  lazy-rules
                                  :rules="[
                                    (val) =>
                                      (val && val.length > 0) ||
                                      'Does not accept empty input',
                                  ]"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-8">
                            <div class="text-overline text-bold">
                              Student Information
                              <div class="q-gutter-xs row">
                                <div class="col-12 col-md">
                                  <q-input
                                    v-model="inputAccount.first_name"
                                    dense
                                    outlined
                                    label="First Name"
                                    lazy-rules
                                    :rules="[
                                      (val) =>
                                        (val && val.length > 0) ||
                                        'Does not accept empty input',
                                    ]"
                                  />
                                </div>
                                <div class="col-12 col-md">
                                  <q-input
                                    v-model="inputAccount.middle_name"
                                    dense
                                    outlined
                                    label="Middle Initial"
                                  />
                                </div>
                                <div class="col-12 col-md">
                                  <q-input
                                    v-model="inputAccount.last_name"
                                    dense
                                    outlined
                                    label="Last Name"
                                    lazy-rules
                                    :rules="[
                                      (val) =>
                                        (val && val.length > 0) ||
                                        'Does not accept empty input',
                                    ]"
                                  />
                                </div>
                                <div class="col-12 col-md">
                                  <q-input
                                    v-model="inputAccount.suffix"
                                    dense
                                    outlined
                                    label="Suffix"
                                  />
                                </div>
                              </div>

                              <div class="q-gutter-xs row">
                                <div class="col-12 col-md">
                                  <q-input
                                    outlined
                                    dense
                                    v-model="inputAccount.school_id"
                                    label="ID Number"
                                    lazy-rules
                                    :rules="[
                                      (val) =>
                                        (val && val.length > 0) ||
                                        'Does not accept empty input',
                                    ]"
                                  />
                                </div>
                                <div class="col-12 col-md">
                                  <q-input
                                    outlined
                                    dense
                                    v-model="inputAccount.email"
                                    label="Email"
                                    type="email"
                                    lazy-rules
                                    :rules="[
                                      (val) =>
                                        (val && val.length > 0) ||
                                        'Does not accept empty input',
                                    ]"
                                  />
                                </div>
                                <div class="col-12 col-md">
                                  <q-input
                                    outlined
                                    dense
                                    v-model="inputAccount.yr_admitted"
                                    label="Year Admitted"
                                    lazy-rules
                                    :rules="[
                                      (val) =>
                                        (val && val.length > 0) ||
                                        'Does not accept empty input',
                                    ]"
                                  />
                                </div>
                              </div>

                              <div class="q-gutter-xs row">
                                <div class="col-12 col-md">
                                  <q-input
                                    outlined
                                    dense
                                    v-model="inputAccount.course"
                                    label="Course"
                                    hint="BS Information Technology"
                                    lazy-rules
                                    :rules="[
                                      (val) =>
                                        (val && val.length > 0) ||
                                        'Does not accept empty input',
                                    ]"
                                  />
                                </div>
                                <div class="col-12 col-md">
                                  <q-input
                                    outlined
                                    dense
                                    v-model="inputAccount.department"
                                    label="Department"
                                    hint="Department of Information Technology"
                                    lazy-rules
                                    :rules="[
                                      (val) =>
                                        (val && val.length > 0) ||
                                        'Does not accept empty input',
                                    ]"
                                  />
                                </div>
                                <div class="col-12 col-md">
                                  <q-select
                                    outlined
                                    dense
                                    v-model="inputAccount.college"
                                    :options="options"
                                    label="College"
                                    hint="College of Information and Computing Sciences"
                                    lazy-rules
                                    :rules="[
                                      (val) =>
                                        (val && val.length > 0) ||
                                        'Does not accept empty input',
                                    ]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="red-10"
                          v-close-popup
                          @click="resetModel()"
                        />
                        <q-btn
                          flat
                          label="Save"
                          color="primary"
                          @click="onaddAccount"
                        />
                      </q-card-actions>
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
                      @click="openEditDialog(props.row)"
                    />
                    <q-dialog v-model="editRowAccount" persistent>
                      <q-card style="width: 1100px; max-width: 100vw">
                        <q-card-section class="row">
                          <div class="text-h6">Edit Account</div>
                          <q-space />
                          <q-btn flat round dense icon="close" v-close-popup />
                        </q-card-section>

                        <q-card-section>
                          <div class="row q-pl-md q-pr-lg">
                            <!--C O L U M N-->
                            <div class="col-12 col-md-4">
                              <div class="text-overline text-bold">
                                Account Type
                                <div class="q-gutter-y-md">
                                  <q-file
                                    outlined
                                    v-model="file"
                                    label="Pick a Profile Pic"
                                  />

                                  <q-select
                                    outlined
                                    dense
                                    v-model="inputAccount.student_type"
                                    :options="student_type"
                                    label="Select Account type"
                                    hint="change student status"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-md-8">
                              <div class="text-overline text-bold">
                                Student Information

                                <div class="q-gutter-x-xs q-gutter-y-lg row">
                                  <div class="col-12 col-md">
                                    <q-input
                                      v-model="inputAccount.first_name"
                                      dense
                                      outlined
                                      label="First Name"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      v-model="inputAccount.middle_name"
                                      dense
                                      outlined
                                      label="Middle Initial"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      v-model="inputAccount.last_name"
                                      dense
                                      outlined
                                      label="Last Name"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      v-model="inputAccount.suffix"
                                      dense
                                      outlined
                                      label="Suffix"
                                    />
                                  </div>
                                </div>

                                <div class="q-gutter-xs q-gutter-y-md row">
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputAccount.school_id"
                                      label="ID Number"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputAccount.email"
                                      label="Email"
                                      type="email"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputAccount.yr_admitted"
                                      label="Year Admitted"
                                    />
                                  </div>
                                </div>

                                <div class="q-gutter-xs q-gutter-y-md row">
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputAccount.course"
                                      label="Course"
                                      hint="BS Information Technology"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputAccount.department"
                                      label="Department"
                                      hint="Department of Information Technology"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-select
                                      outlined
                                      dense
                                      v-model="inputAccount.college"
                                      :options="options"
                                      label="College"
                                      hint="College of Information and Computing Sciences"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="red-10"
                            v-close-popup
                            @click="resetModel()"
                          />
                          <q-btn
                            flat
                            label="Save"
                            color="primary"
                            @click="onEditAccount()"
                          />
                        </q-card-actions>
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
                      @click="deleteSpecificAccount(props.row)"
                    />
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-tab-panel>
          <!-------------------------------------------------------------------------------------------------------------->

          <!------------------------------------------candidate Panel--------------------------------------------------->
          <q-tab-panel name="representative" class="bg-white">
            <q-table
              class="my-sticky-header-table"
              title="Representative Account List"
              :grid="$q.screen.xs"
              :columns="CandidateColumn"
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
                        <div class="text-h6">Create new Account</div>
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
                              v-model="inputCandidate.student"
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
                              v-model="inputCandidate.election"
                              dense
                              outlined
                              label="Select Election Year"
                            >
                            </q-select>
                          </div>
                        </div>
                        <div class="q-gutter-xs">
                          <q-select
                            outlined
                            dense
                            :options="position"
                            v-model="inputCandidate.position_type"
                            label="Student Status"
                          />
                        </div>
                        <div class="q-gutter-xs">
                          <q-input
                            v-model="inputCandidate.platform"
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
                                v-model="inputCandidate.student"
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
                                v-model="inputCandidate.election"
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
                              v-model="inputCandidate.position_type"
                              label="Student Status"
                            />
                          </div>
                          <div class="q-gutter-xs">
                            <q-input
                              v-model="inputCandidate.platform"
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
                  </div>
                </q-td>
              </template>

              <template v-slot:body-cell-Details="props">
                <q-td :props="props">
                  <div class="q-gutter-sm">
                    <q-btn
                      round
                      color="blue"
                      icon="more_vert"
                      size="md"
                      flat
                      dense
                      @click="Details = true"
                    />
                    <q-dialog v-model="Details">
                      <q-card class="my-card" flat bordered>
                        <q-card-section>
                          <div class="text-h6">
                            Candidate Info
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
                            <div class="text-overline">
                              Mindanao State University
                            </div>
                            <div class="text-h5 q-mt-sm q-mb-xs">
                              Basam C. Serad
                            </div>
                            <div class="text-caption text-grey">
                              Prime Minister
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
                          Assessing clients needs and present suitable promoted
                          products. Liaising with and persuading targeted
                          doctors to prescribe our products utilizing effective
                          sales skills.
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-tab-panel>
        </q-tab-panels>
        <br />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ElectionDto, StudentDto } from 'src/services/rest-api';
import { CandidateDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('election', ['allElection']),
    ...mapState('candidate', ['allCandidate']),
  },
  methods: {
    ...mapActions('student', [
      'addStudent',
      'editStudent',
      'deleteStudent',
      'getAllStudent',
    ]),
    ...mapActions('candidate', [
      'addCandidate',
      'editCandidate',
      'deleteCandidate',
      'getAllCandidate',
    ]),
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
  addCandidate!: (payload: CandidateDto) => Promise<void>;
  editCandidate!: (payload: CandidateDto) => Promise<void>;
  deleteCandidate!: (payload: CandidateDto) => Promise<void>;
  getAllCandidate!: () => Promise<void>;

  async mounted() {
    await this.getAllStudent();
    await this.getAllCandidate();
  }
  columns = [
    { name: 'action', align: 'center', field: 'action' },
    {
      name: 'id',
      align: 'center',
      label: 'School ID',
      field: 'school_id',
    },
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: StudentDto) =>
        row.last_name +
        ', ' +
        row.first_name +
        ' ' +
        row.middle_name +
        ' ' +
        row.suffix,
      format: (val: string) => `${val}`,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: 'email',
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: 'course',
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: 'department',
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: 'college',
    },
    {
      name: 'status',
      align: 'center',
      label: 'Status',
      field: 'student_type',
      color: 'green',
    },
    { name: 'Details', align: 'center', label: 'Details', field: 'Details' },
  ];

  //-----------------------------------------------Table Column for candidate account

  CandidateColumn = [
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
  ];

  filter = '';
  file = null;
  Details = false;
  tab = 'student';
  addNewAccount = false;
  updateAccount = false;
  editRowAccount = false;
  //candidate
  addNewCandidate = false;
  editRowCandidate = false;
  updateCandidate = false;

  //---------------------------------------------------for student
  inputAccount: StudentDto = {
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    email: '',
    yr_admitted: '',
    college: '',
    course: '',
    department: '',
    student_type: 'regular',
  };

  inputCandidate: CandidateDto = {
    position_type: '',
    platform: '',
  };

  //---------------------------------------------------for Candidate

  position = ['Prime Minister', 'Executive Sectretary'];
  student_type = ['Regular', 'Representative'];
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

  options_level = ['1st Year', '2nd Year', '3nd Year', '4th Year'];

  //------------------------------------------functions for Student Account
  async onaddAccount() {
    await this.addStudent(this.inputAccount);
    this.addNewAccount = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Account is Successfully Added!.',
    });
  }

  async onEditAccount() {
    await this.editStudent(this.inputAccount);
    this.editRowAccount = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  openEditDialog(val: StudentDto) {
    this.editRowAccount = true;
    this.inputAccount = { ...val };
  }

  deleteSpecificAccount(val: StudentDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteStudent(val.student_id as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  resetModel() {
    this.inputAccount = {
      first_name: '',
      middle_name: '',
      last_name: '',
      suffix: '',
      email: '',
      yr_admitted: '',
      college: '',
      course: '',
      department: '',
      student_type: 'regular',
    };
  }

  async onaddCandidateAccount() {
    await this.addCandidate(this.inputCandidate);
    this.addNewCandidate = false;
    this.resetModelCandidate();
    this.$q.notify({
      type: 'positive',
      message: 'Account is Successfully Added!.',
    });
  }

  async onEditCandidateAccount() {
    await this.editCandidate(this.inputCandidate);
    this.editRowCandidate = false;
    this.resetModelCandidate();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  openEditCandidateDialog(val: CandidateDto) {
    this.editRowCandidate = true;
    this.inputCandidate = { ...val };
  }

  deleteSpecificCandidateAccount(val: CandidateDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteCandidate(val.candidate_id as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  resetModelCandidate() {
    this.inputCandidate = {
      position_type: '',
      platform: '',
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
