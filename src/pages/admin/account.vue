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
          <q-tab name="student" label="Student Account" icon="lock" />
          <q-tab name="candidate" label="Candidate Account" icon="lock" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-white text-center">
          <q-tab-panel name="student">
            <q-table
              class="my-sticky-header-table"
              title="Student Account List"
              :grid="$q.screen.xs"
              :columns="columns"
              :rows="allAccount"
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
                    <q-card style="width: 700px; max-width: 100vw">
                      <q-card-section class="row">
                        <div class="text-h6">Create new Account</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section class="q-gutter-md">
                        <div class="q-gutter-xs row">
                          <div class="col">
                            <q-input
                              v-model="inputAccount.FName"
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
                          <div class="col">
                            <q-input
                              v-model="inputAccount.MName"
                              dense
                              outlined
                              label="Middle Initial"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
                          </div>
                          <div class="col">
                            <q-input
                              v-model="inputAccount.LName"
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
                        </div>

                        <div class="q-gutter-xs row">
                          <div class="col">
                            <q-input
                              outlined
                              dense
                              v-model="inputAccount.idNum"
                              label="ID Number"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
                          </div>
                          <div class="col">
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
                        </div>

                        <div class="q-pl-xs">
                          <q-select
                            outlined
                            dense
                            v-model="inputAccount.department"
                            :options="options"
                            label="Department"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Does not accept empty input',
                            ]"
                          />
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
                          label="Add"
                          color="primary"
                          @click="onAddAccount"
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
                      <q-card style="width: 700px; max-width: 100vw">
                        <q-card-section class="row">
                          <div class="text-h6">Edit Account</div>
                          <q-space />
                          <q-btn flat round dense icon="close" v-close-popup />
                        </q-card-section>

                        <q-card-section class="q-gutter-md">
                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-input
                                v-model="inputAccount.FName"
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
                            <div class="col">
                              <q-input
                                v-model="inputAccount.MName"
                                dense
                                outlined
                                label="Middle Initial"
                                lazy-rules
                                :rules="[
                                  (val) =>
                                    (val && val.length > 0) ||
                                    'Does not accept empty input',
                                ]"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                v-model="inputAccount.LName"
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
                          </div>

                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-input
                                outlined
                                dense
                                v-model="inputAccount.idNum"
                                label="ID Number"
                                lazy-rules
                                :rules="[
                                  (val) =>
                                    (val && val.length > 0) ||
                                    'Does not accept empty input',
                                ]"
                              />
                            </div>
                            <div class="col">
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
                          </div>

                          <div class="q-pl-xs">
                            <q-select
                              outlined
                              dense
                              v-model="inputAccount.department"
                              :options="options"
                              label="Department"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
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
          <br />

          <!-------------------------------------------------------------------------------------------------------------->

          <!------------------------------------------candidate Panel--------------------------------------------------->
          <q-tab-panel name="candidate" class="bg-white">
            <q-table
              class="my-sticky-header-table"
              title="Candidate Account List"
              :grid="$q.screen.xs"
              :columns="C_columns"
              :rows="allCandidateAccount"
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
                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-input
                                v-model="inputCandidateAccount.FName"
                                dense
                                outlined
                                label="First Name"
                              >
                              </q-input>
                            </div>

                            <div class="col">
                              <q-input
                                v-model="inputCandidateAccount.MName"
                                dense
                                outlined
                                label="Middle Initial"
                              >
                              </q-input>
                            </div>

                            <div class="col">
                              <q-input
                                v-model="inputCandidateAccount.LName"
                                dense
                                outlined
                                label="Last Name"
                              >
                              </q-input>
                            </div>
                          </div>

                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-input
                                outlined
                                dense
                                v-model="inputCandidateAccount.idNum"
                                label="ID Number"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                outlined
                                dense
                                v-model="inputCandidateAccount.email"
                                label="Email"
                                type="email"
                              />
                            </div>
                          </div>

                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-select
                                outlined
                                dense
                                v-model="inputCandidateAccount.level"
                                :options="options_level"
                                label="Year Level"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                outlined
                                dense
                                v-model="inputCandidateAccount.course"
                                label="Course"
                                type="course"
                              />
                            </div>
                          </div>

                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-select
                                outlined
                                dense
                                v-model="inputCandidateAccount.department"
                                :options="options"
                                label="Department"
                              />
                            </div>

                            <div class="col">
                              <q-file
                                v-model="filesImages"
                                outlined
                                dense
                                label="Pick a Profile Picture"
                                multiple
                                accept=".jpg, image/*"
                              >
                                <template v-slot:prepend>
                                  <q-icon name="camera" />
                                </template>
                              </q-file>
                            </div>
                          </div>
                          <div class="row q-gutter-xs">
                            <q-select
                                outlined
                                dense
                                v-model="inputCandidateAccount.position"
                                style="width: 900px; max-width: 100vw"
                                :options="position"
                                label="Position"
                              />
                            <q-input
                              v-model="inputCandidateAccount.saying"
                              filled
                              type="textarea"
                              label="Campaign Sayings"
                              style="width: 900px; max-width: 100vw"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Please type something',
                              ]"
                            />
                          </div>
                        </q-card-section>

                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="red-10"
                          v-close-popup
                          @click="resetModelCandidate()"
                        />
                        <q-btn
                          flat
                          label="Add"
                          color="primary"
                          @click="onAddCandidateAccount()"
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
                      @click="openCandidateEditDialog(props.row)"
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
                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-input
                                v-model="inputCandidateAccount.FName"
                                dense
                                outlined
                                label="First Name"
                              >
                              </q-input>
                            </div>

                            <div class="col">
                              <q-input
                                v-model="inputCandidateAccount.MName"
                                dense
                                outlined
                                label="Middle Initial"
                              >
                              </q-input>
                            </div>

                            <div class="col">
                              <q-input
                                v-model="inputCandidateAccount.LName"
                                dense
                                outlined
                                label="Last Name"
                              >
                              </q-input>
                            </div>
                          </div>

                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-input
                                outlined
                                dense
                                v-model="inputCandidateAccount.idNum"
                                label="ID Number"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                outlined
                                dense
                                v-model="inputCandidateAccount.email"
                                label="Email"
                                type="email"
                              />
                            </div>
                          </div>

                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-select
                                outlined
                                dense
                                v-model="inputCandidateAccount.level"
                                :options="options_level"
                                label="Year Level"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                outlined
                                dense
                                v-model="inputCandidateAccount.course"
                                label="Course"
                                type="course"
                              />
                            </div>
                          </div>

                          <div class="q-gutter-xs row">
                            <div class="col">
                              <q-select
                                outlined
                                dense
                                v-model="inputCandidateAccount.department"
                                :options="options"
                                label="Department"
                              />
                            </div>

                            <div class="col">
                              <q-file
                                v-model="filesImages"
                                outlined
                                dense
                                label="Pick a Profile Picture"
                                multiple
                                accept=".jpg, image/*"
                              >
                                <template v-slot:prepend>
                                  <q-icon name="camera" />
                                </template>
                              </q-file>
                            </div>
                          </div>
                          <div class="row q-gutter-xs">
                            <q-select
                                outlined
                                dense
                                v-model="inputCandidateAccount.position"
                                style="width: 900px; max-width: 100vw"
                                :options="position"
                                label="Position"
                              />
                            <q-input
                              v-model="inputCandidateAccount.saying"
                              filled
                              type="textarea"
                              label="Campaign Sayings"
                              style="width: 900px; max-width: 100vw"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Please type something',
                              ]"
                            />
                          </div>
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="red-10"
                            v-close-popup
                            @click="resetModelCandidate()"
                          />
                          <q-btn
                            flat
                            label="Save"
                            color="primary"
                            @click="onEditCandidateAccount()"
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
import { UserDto } from "src/services/rest-api";
import { CandidateDto } from "src/services/rest-api";
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('account', ['allAccount']),
    ...mapState('candidate', ['allCandidateAccount']),
  },
  methods: {
    ...mapActions("account", [
      "addAccount",
      "editAccount",
      "deleteAccount",
      "getAllUser",
    ]),
    ...mapActions('candidate', [
      'addCandidateAccount',
      'editCandidateAccount',
      'deleteCandidateAccount',
    ]),
  },
})
export default class ManageAccount extends Vue {
  //--------------------------------------------------------Table Column for student account
  allAccount!: UserDto[];
  addAccount!: (payload: UserDto) => Promise<void>;
  editAccount!: (payload: UserDto) => Promise<void>;
  deleteAccount!: (payload: UserDto) => Promise<void>;
  getAllUser!: () => Promise<void>;

  allCandidateAccount!: CandidateDto[];
  addCandidateAccount!: (payload: CandidateDto) => Promise<void>;
  editCandidateAccount!: (payload: CandidateDto) => Promise<void>;
  deleteCandidateAccount!: (payload: CandidateDto) => Promise<void>;

  columns = [
    { name: 'action', align: 'center', field: 'action' },
    {
      name: 'id',
      align: 'center',
      label: 'ID Number',
      field: 'id',
    },
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: AccountInfo) =>
        row.LName + ', ' + row.FName + ' ' + row.MName + ' ' + row.SName,
      format: (val: string) => `${val}`,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: 'email',
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: 'department',
    },
    { name: 'username', align: 'center', label: 'Username', field: 'username' },
    { name: 'password', align: 'center', label: 'password', field: 'password' },
  ];

  //-----------------------------------------------Table Column for candidate account

  C_columns = [
    { name: 'action', align: 'center', field: 'action' },
    {
      name: 'id',
      align: 'center',
      label: 'ID Number',
      field: 'id',
    },
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: CandidateAccountInfo) =>
        row.LName + ', ' + row.FName + ' ' + row.MName + ' ' + row.SName,
      format: (val: string) => `${val}`,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: 'email',
    },
    {
      name: 'level',
      align: 'center',
      label: 'Year Level',
      field: 'level',
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
    { name: 'username', align: 'center', label: 'Username', field: 'username' },
    { name: 'password', align: 'center', label: 'password', field: 'password' },
    { name: 'Details', align: 'center', label: 'Details', field: 'Details' },
  ];

  Details = false;
  tab = ['students'];
  confirmDelete = false;
  cancelEnabled = true;
  addNewAccount = false;
  editRowAccount = false;
  //candidate
  addNewCandidate = false;
  editRowCandidate = false;

  //---------------------------------------------------for student
  inputAccount: AccountInfo = {
    FName: '',
    MName: '',
    LName: '',
    SName: '',
    idNum: '',
    department: '',
    email: '',
    username: '',
    password: '',
  };

  //---------------------------------------------------for Candidate
  inputCandidateAccount: CandidateAccountInfo = {
    FName: '',
    MName: '',
    LName: '',
    SName: '',
    idNum: '',
    department: '',
    level: '',
    course: '',
    email: '',
    username: '',
    password: '',
    position: '',
    saying: '',
  };

  filter = '';
  filesImages = null;

  position = [
    'Prime Minister',
    'Executive Sectretary',
  ]

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
  async onAddAccount() {
    await this.addAccount({ ...this.inputAccount });
    this.addNewAccount = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Account is Successfully Added.',
    });
  }

  async onAddCandidateAccount() {
    await this.addCandidateAccount({ ...this.inputCandidateAccount });
    this.addNewCandidate = false;
    this.resetModelCandidate();
    this.$q.notify({
      type: 'positive',
      message: 'Account is Successfully Added!.',
    });
  }

  async onEditAccount() {
    await this.editAccount(this.inputAccount);
    this.editRowAccount = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Changed.',
    });
  }

  async onEditCandidateAccount() {
    await this.editCandidateAccount(this.inputCandidateAccount);
    this.editRowCandidate = false;
    this.resetModelCandidate();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Changed!.',
    });
  }

  deleteSpecificAccount(val: AccountInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteAccount(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted!',
        });
      });
  }

  deleteSpecificCandidateAccount(val: CandidateAccountInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteCandidateAccount(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted!',
        });
      });
  }

  openEditDialog(val: AccountInfo) {
    this.editRowAccount = true;
    this.inputAccount = { ...val };
  }

  resetModel() {
    this.inputAccount = {
      FName: '',
      MName: '',
      LName: '',
      SName: '',
      idNum: '',
      department: '',
      email: '',
      username: '',
      password: '',
    };
  }

  openCandidateEditDialog(val: CandidateAccountInfo) {
    this.editRowCandidate = true;
    this.inputCandidateAccount = { ...val };
  }

  resetModelCandidate() {
    this.inputCandidateAccount = {
      FName: '',
      MName: '',
      LName: '',
      SName: '',
      idNum: '',
      department: '',
      level: '',
      course: '',
      email: '',
      username: '',
      password: '',
      position: '',
      saying: '',
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
