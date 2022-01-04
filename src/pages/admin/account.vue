<template>
  <q-page>
    <div class="">
      <div class="q-gutter-y-sm" style="width:100%, max-width: 1000px">
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
                    <q-card style="width: 450px">
                      <q-card-section class="row">
                        <div class="text-h6">Create new Account</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section class="q-gutter-md">
                        <q-input
                          v-model="inputAccount.FName"
                          dense
                          outlined
                          label="First Name"
                        >
                        </q-input>
                        <q-input
                          v-model="inputAccount.MName"
                          dense
                          outlined
                          label="Middle Initial"
                        >
                        </q-input>
                        <q-input
                          v-model="inputAccount.LName"
                          dense
                          outlined
                          label="Last Name"
                        >
                        </q-input>
                        <q-input
                          outlined
                          v-model="inputAccount.idNum"
                          label="ID Number"
                        />
                        <q-input
                          outlined
                          v-model="inputAccount.email"
                          label="Email"
                          type="email"
                        />
                        <q-select
                          outlined
                          v-model="inputAccount.department"
                          :options="options"
                          label="Department"
                        />
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="red-10"
                          v-close-popup
                          @click="resetModel()"
                        />
                        <q-btn flat label="Add" color="primary" @click="onAddAccount" />
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
                      <q-card style="width: 350px">
                        <q-card-section class="row">
                          <div class="text-h6">Edit Account</div>
                          <q-space />
                          <q-btn flat round dense icon="close" v-close-popup />
                        </q-card-section>

                        <q-card-section class="q-gutter-md">
                          <q-input
                            v-model="inputAccount.FName"
                            dense
                            outlined
                            label="First Name"
                          >
                          </q-input>
                          <q-input
                            v-model="inputAccount.MName"
                            dense
                            outlined
                            label="Middle Initial"
                          >
                          </q-input>
                          <q-input
                            v-model="inputAccount.LName"
                            dense
                            outlined
                            label="Last Name"
                          >
                          </q-input>
                          <q-input
                            outlined
                            v-model="inputAccount.idNum"
                            label="ID Number"
                          />
                          <q-input
                            outlined
                            v-model="inputAccount.email"
                            label="Email"
                            type="email"
                          />
                          <q-select
                            outlined
                            v-model="inputAccount.department"
                            :options="options"
                            label="Department"
                          />
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

          <!-------------------------------------------------------------------------------------->

          <!------------------------------------------candidate Panel--------------------------------->
          <q-tab-panel name="candidate" class="bg-white">
            <q-table
              class="my-sticky-header-table"
              title="Candidate Account List"
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
                    @click="addCandidate = true"
                  />
                  <q-dialog v-model="addCandidate" persistent>
                    <q-card style="width: 500px">
                      <q-card-section class="row">
                        <div class="text-h6">Create new Account</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section class="q-gutter-md">
                        <q-input
                          v-model="inputCandidateAccount.FName"
                          dense
                          outlined
                          label="First Name"
                        >
                        </q-input>
                        <q-input
                          v-model="inputCandidateAccount.MName"
                          dense
                          outlined
                          label="Middle Initial"
                        >
                        </q-input>
                        <q-input
                          v-model="inputCandidateAccount.LName"
                          dense
                          outlined
                          label="Last Name"
                        >
                        </q-input>
                        <q-input
                          outlined
                          v-model="inputCandidateAccount.idNum"
                          label="ID Number"
                        />
                        <q-input
                          outlined
                          v-model="inputCandidateAccount.email"
                          label="Email"
                          type="email"
                        />
                        <q-select
                          outlined
                          v-model="inputCandidateAccount.level"
                          :options="options_level"
                          label="Year Level"
                        />
                        <q-input
                          outlined
                          v-model="inputCandidateAccount.course"
                          label="Course"
                          type="course"
                        />
                        <q-select
                          outlined
                          v-model="inputCandidateAccount.department"
                          :options="options"
                          label="Department"
                        />
                        <q-file
                          v-model="filesImages"
                          outlined
                          label="Pick a Profile Picture"
                          multiple
                          accept=".jpg, image/*"
                        >
                          <template v-slot:prepend>
                            <q-icon name="camera" />
                          </template>
                        </q-file>
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
                    <q-dialog v-model="editRowCandidate" persistent>
                      <q-card style="width: 350px">
                        <q-card-section class="row">
                          <div class="text-h6">Edit Account</div>
                          <q-space />
                          <q-btn flat round dense icon="close" v-close-popup />
                        </q-card-section>

                        <q-card-section class="q-gutter-md">
                          <q-input
                            v-model="inputCandidateAccount.FName"
                            dense
                            outlined
                            label="First Name"
                          >
                          </q-input>
                          <q-input
                            v-model="inputCandidateAccount.MName"
                            dense
                            outlined
                            label="Middle Initial"
                          >
                          </q-input>
                          <q-input
                            v-model="inputCandidateAccount.LName"
                            dense
                            outlined
                            label="Last Name"
                          >
                          </q-input>
                          <q-input
                            outlined
                            v-model="inputCandidateAccount.idNum"
                            label="ID Number"
                          />
                          <q-input
                            outlined
                            v-model="inputCandidateAccount.email"
                            label="Email"
                            type="email"
                          />
                          <q-select
                            outlined
                            v-model="inputCandidateAccount.level"
                            :options="options_level"
                            label="Year Level"
                          />
                          <q-input
                            outlined
                            v-model="inputCandidateAccount.course"
                            label="Course"
                            type="course"
                          />
                          <q-select
                            outlined
                            v-model="inputCandidateAccount.department"
                            :options="options"
                            label="Department"
                          />

                          <q-file
                            v-model="filesImages"
                            outlined
                            label="Pick a Profile Picture"
                            multiple
                            accept=".jpg, image/*"
                          >
                            <template v-slot:prepend>
                              <q-icon name="camera" />
                            </template>
                          </q-file>
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
                            <div class="text-overline">Mindanao State University</div>
                            <div class="text-h5 q-mt-sm q-mb-xs">Basam C. Serad</div>
                            <div class="text-caption text-grey">Prime Minister</div>
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
                          Assessing clients needs and present suitable promoted products.
                          Liaising with and persuading targeted doctors to prescribe our
                          products utilizing effective sales skills.
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
import { AccountInfo } from "src/store/accounts/state";
import { CandidateAccountInfo } from "src/store/candidateAccounts/state";
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  computed: {
    ...mapState("account", ["allAccount"]),
    ...mapState("candidate", ["allCandidateAccount"]),
  },
  methods: {
    ...mapActions("account", ["addAccount", "editAccount", "deleteAccount"]),
    ...mapActions("candidate", [
      "addCandidateAccount",
      "editCandidateAccount",
      "deleteCandidateAccount",
    ]),
  },
})
export default class ManageAccount extends Vue {
  //--------------------------------------------------------Table Column for student account
  allAccount!: AccountInfo[];
  addAccount!: (payload: AccountInfo) => Promise<void>;
  editAccount!: (payload: AccountInfo) => Promise<void>;
  deleteAccount!: (payload: AccountInfo) => Promise<void>;

  columns = [
    { name: "action", align: "center", field: "action" },
    {
      name: "id",
      align: "center",
      label: "ID Number",
      field: "id",
    },
    {
      name: "name",
      required: true,
      label: "Name",
      align: "left",
      field: (row: AccountInfo) => row.LName + ", " + row.FName + " " + row.MName,
      format: (val: string) => `${val}`,
    },
    {
      name: "email",
      align: "center",
      label: "Email",
      field: "email",
    },
    {
      name: "department",
      align: "center",
      label: "Department",
      field: "department",
    },
    { name: "username", align: "center", label: "Username", field: "username" },
    { name: "password", align: "center", label: "password", field: "password" },
  ];

  //-----------------------------------------------Table Column for candidate account

  allCandidateAccount!: CandidateAccountInfo[];
  newCandidateAccount!: (payload: CandidateAccountInfo) => Promise<void>;
  editCandidateAccount!: (payload: CandidateAccountInfo) => Promise<void>;
  deleteCandidateAccount!: (payload: CandidateAccountInfo) => Promise<void>;

  C_columns = [
    { name: "action", align: "center", field: "action" },
    {
      name: "id",
      align: "center",
      label: "ID Number",
      field: "id",
    },
    {
      name: "name",
      required: true,
      label: "Name",
      align: "left",
      field: (row: AccountInfo) => row.LName + ", " + row.FName + " " + row.MName,
      format: (val: string) => `${val}`,
    },
    {
      name: "email",
      align: "center",
      label: "Email",
      field: "email",
    },
    {
      name: "level",
      align: "center",
      label: "Year Level",
      field: "level",
    },
    {
      name: "course",
      align: "center",
      label: "Course",
      field: "course",
    },
    {
      name: "department",
      align: "center",
      label: "Department",
      field: "department",
    },
    { name: "username", align: "center", label: "Username", field: "username" },
    { name: "password", align: "center", label: "password", field: "password" },
    { name: "Details", align: "center", label: "Details", field: "Details" },
  ];

  Details = false;
  tab = ["students"];
  confirmDelete = false;
  cancelEnabled = true;
  addNewAccount = false;
  editRowAccount = false;
  //candidate
  addCandidate = false;
  editRowCandidate = false;

  //---------------------------------------------------for student
  inputAccount: AccountInfo = {
    FName: "",
    MName: "",
    LName: "",
    idNum: "",
    department: "",
    email: "",
    username: "",
    password: "",
  };

  //---------------------------------------------------for Candidate
  inputCandidateAccount: CandidateAccountInfo = {
    FName: "",
    MName: "",
    LName: "",
    idNum: "",
    department: "",
    level: "",
    course: "",
    email: "",
    username: "",
    password: "",
  };

  filter = "";
  filesImages = null;

  options = [
    "College of Agriculture",
    "College of Business Administration and Accounting",
    "College of Education",
    "College of Engineering",
    "College of Fisheries",
    "College of Forestry and Environmental Studies",
    "College of Health Science",
    "College of Hotel and Restaurant Management",
    "College of Information and Computing Science",
    "College of Law",
    "College of Medicine",
    "College of Natural Science and Mathematics",
    "College of Public Affair",
    "College of Social Science and Humanities",
    "College of Sports, Physical Education and Recreation",
    "King Faisal Center for Islamic, Arabic and Asian Studies",
  ];

  options_level = ["1st Year", "2nd Year", "3nd Year", "4th Year"];

  //------------------------------------------functions for Student Account
  async onAddAccount() {
    await this.addAccount({ ...this.inputAccount });
    this.addNewAccount = false;
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "Account is Successfully Added.",
    });
  }

  async onEditAccount() {
    await this.editAccount(this.inputAccount);
    this.editRowAccount = false;
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "Successfully Changed.",
    });
  }

  deleteSpecificAccount(val: AccountInfo) {
    this.$q
      .dialog({
        message: "Confirm to delete?",
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteAccount(val);
        this.$q.notify({
          type: "positive",
          message: "Successfully deleted!",
        });
      });
  }

  openEditDialog(val: AccountInfo) {
    this.editRowAccount = true;
    this.inputAccount = { ...val };
  }

  resetModel() {
    this.inputAccount = {
      FName: "",
      MName: "",
      LName: "",
      idNum: "",
      department: "",
      email: "",
      username: "",
      password: "",
    };
  }

  //----------------------------------------------functions for Candidate Account
  async onAddCandidateAccount() {
    await this.addAccount({ ...this.inputAccount });
    this.addCandidate = false;
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "Account is Successfully Added!.",
    });
  }

  async onEditCandidateAccount() {
    await this.editAccount(this.inputAccount);
    this.editRowCandidate = false;
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "Successfully Changed!.",
    });
  }

  deleteSpecificCandidateAccount(val: CandidateAccountInfo) {
    this.$q
      .dialog({
        message: "Confirm to delete?",
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteAccount(val);
        this.$q.notify({
          type: "positive",
          message: "Successfully deleted!",
        });
      });
  }

  openCandidateEditDialog(val: CandidateAccountInfo) {
    this.editRowCandidate = true;
    this.inputAccount = { ...val };
  }

  resetModelCandidate() {
    this.inputCandidateAccount = {
      FName: "",
      MName: "",
      LName: "",
      idNum: "",
      department: "",
      level: "",
      course: "",
      email: "",
      username: "",
      password: "",
    };
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 400px
  width: 1220px


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
