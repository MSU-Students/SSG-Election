<template>
  <q-page>
    <div class="q-pa-sm">
      <div class="q-gutter-y-md" style="width:100%, max-width: 1000px">
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
                    @click="onNewAccount()"
                  />
                  <q-dialog v-model="add" persistent>
                    <q-card style="width: 450px">
                      <q-card-section class="row">
                        <div class="text-h6">Add Account</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section class="q-gutter-md">
                        <q-input
                          v-model="presentAccount.FName"
                          dense
                          outlined
                          label="First Name"
                        >
                        </q-input>
                        <q-input
                          v-model="presentAccount.MName"
                          dense
                          outlined
                          label="Middle Initial"
                        >
                        </q-input>
                        <q-input
                          v-model="presentAccount.LName"
                          dense
                          outlined
                          label="Last Name"
                        >
                        </q-input>
                        <q-input
                          outlined
                          v-model="presentAccount.idNum"
                          label="ID Number"
                        />
                        <q-input
                          outlined
                          v-model="presentAccount.email"
                          label="Email"
                          type="email"
                        />
                        <q-select
                          outlined
                          v-model="presentAccount.department"
                          :options="options"
                          label="Department"
                        />
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn flat label="Cancel" color="red-10" v-close-popup />
                        <q-btn flat label="Add" color="primary" v-close-popup />
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
                      @click="onEditAccount(props.row)"
                    />
                    <q-dialog v-model="editRow" persistent>
                      <q-card style="width: 350px">
                        <q-card-section class="row">
                          <div class="text-h6">Edit Account</div>
                          <q-space />
                          <q-btn flat round dense icon="close" v-close-popup />
                        </q-card-section>

                        <q-card-section class="q-gutter-md">
                          <q-input
                            v-model="presentAccount.FName"
                            dense
                            outlined
                            label="First Name"
                          >
                          </q-input>
                          <q-input
                            v-model="presentAccount.MName"
                            dense
                            outlined
                            label="Middle Initial"
                          >
                          </q-input>
                          <q-input
                            v-model="presentAccount.LName"
                            dense
                            outlined
                            label="Last Name"
                          >
                          </q-input>
                          <q-input
                            outlined
                            v-model="presentAccount.idNum"
                            label="ID Number"
                          />
                          <q-input
                            outlined
                            v-model="presentAccount.email"
                            label="Email"
                            type="email"
                          />
                          <q-select
                            outlined
                            v-model="presentAccount.department"
                            :options="options"
                            label="Department"
                          />
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn flat label="Cancel" color="red-10" v-close-popup />
                          <q-btn flat label="Save" color="primary" v-close-popup />
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
                      @click="onDeleteAccount(props.row)"
                    />
                    <q-dialog v-model="confirmDelete" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <q-avatar
                            size="sm"
                            icon="warning"
                            color="red"
                            text-color="white"
                          />
                          <span class="q-ml-sm"
                            >Confirm Delete {{ presentAccount.FName }}?</span
                          >
                        </q-card-section>
                        <q-card-actions align="right">
                          <q-btn flat label="Cancel" color="primary" v-close-popup />
                          <q-btn
                            flat
                            label="Delete"
                            color="primary"
                            @click="onConfirmDelete"
                            v-close-popup
                          />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
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
                    @click="onNewAccount()"
                  />
                  <q-dialog v-model="add" persistent>
                    <q-card style="width: 500px">
                      <q-card-section class="row">
                        <div class="text-h6">Add Account</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section class="q-gutter-md">
                        <q-input
                          v-model="presentCandidateAccount.FName"
                          dense
                          outlined
                          label="First Name"
                        >
                        </q-input>
                        <q-input
                          v-model="presentCandidateAccount.MName"
                          dense
                          outlined
                          label="Middle Initial"
                        >
                        </q-input>
                        <q-input
                          v-model="presentCandidateAccount.LName"
                          dense
                          outlined
                          label="Last Name"
                        >
                        </q-input>
                        <q-input
                          outlined
                          v-model="presentCandidateAccount.idNum"
                          label="ID Number"
                        />
                        <q-input
                          outlined
                          v-model="presentCandidateAccount.email"
                          label="Email"
                          type="email"
                        />
                        <q-select
                          outlined
                          v-model="presentCandidateAccount.level"
                          :options="options_level"
                          label="Year Level"
                        />
                        <q-input
                          outlined
                          v-model="presentCandidateAccount.course"
                          label="Course"
                          type="course"
                        />
                        <q-select
                          outlined
                          v-model="presentCandidateAccount.department"
                          :options="options"
                          label="Department"
                        />
                        <q-file
                          v-model="filesImages"
                          outlined
                          label="Pick a Profile Picture"
                          multiple
                          accept=".jpg, image/*"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="camera" />
                          </template>
                        </q-file>
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn flat label="Cancel" color="red-10" v-close-popup />
                        <q-btn
                          flat
                          label="Add"
                          color="primary"
                          @click="onSaveAccount"
                          v-close-popup
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
                      @click="onEditAccount(props.row)"
                    />
                    <q-dialog v-model="editRow" persistent>
                      <q-card style="width: 350px">
                        <q-card-section class="row">
                          <div class="text-h6">Edit Account</div>
                          <q-space />
                          <q-btn flat round dense icon="close" v-close-popup />
                        </q-card-section>

                        <q-card-section class="q-gutter-md">
                          <q-input
                            v-model="presentCandidateAccount.FName"
                            dense
                            outlined
                            label="First Name"
                          >
                          </q-input>
                          <q-input
                            v-model="presentCandidateAccount.MName"
                            dense
                            outlined
                            label="Middle Initial"
                          >
                          </q-input>
                          <q-input
                            v-model="presentCandidateAccount.LName"
                            dense
                            outlined
                            label="Last Name"
                          >
                          </q-input>
                          <q-input
                            outlined
                            v-model="presentCandidateAccount.idNum"
                            label="ID Number"
                          />
                          <q-input
                            outlined
                            v-model="presentCandidateAccount.email"
                            label="Email"
                            type="email"
                          />
                          <q-select
                            outlined
                            v-model="presentCandidateAccount.level"
                            :options="options_level"
                            label="Year Level"
                          />
                          <q-input
                            outlined
                            v-model="presentCandidateAccount.course"
                            label="Course"
                            type="course"
                          />
                          <q-select
                            outlined
                            v-model="presentCandidateAccount.department"
                            :options="options"
                            label="Department"
                          />

                          <q-file
                            v-model="filesImages"
                            outlined
                            label="Pick a Profile Picture"
                            multiple
                            accept=".jpg, image/*"
                            @rejected="onRejected"
                          >
                            <template v-slot:prepend>
                              <q-icon name="camera" />
                            </template>
                          </q-file>
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn flat label="Cancel" color="red-10" v-close-popup />
                          <q-btn
                            flat
                            label="Save"
                            color="primary"
                            @click="onEditAccount"
                            v-close-popup
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
                      @click="onDeleteAccount(props.row)"
                    />
                    <q-dialog v-model="confirmDelete" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <q-avatar
                            size="sm"
                            icon="warning"
                            color="red"
                            text-color="white"
                          />
                          <span class="q-ml-sm"
                            >Confirm Delete {{ presentAccount.FName }}?</span
                          >
                        </q-card-section>
                        <q-card-actions align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="primary"
                            v-close-popup="cancelEnabled"
                            :disable="!cancelEnabled"
                          />
                          <q-btn
                            flat
                            label="Delete"
                            color="primary"
                            @click="onConfirmDelete"
                            v-close-popup
                          />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
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
    ...mapState("account", ["account", "activeAccount"]),
  },
  methods: {
    ...mapActions("account", ["newAccount", "editAccount", "deleteAccount"]),
  },
})
export default class ManageAccount extends Vue {
  //--------------------------------------------------------Table Column for student account
  account!: AccountInfo[];
  newAccount!: (account: AccountInfo) => Promise<void>;
  editAccount!: (account: AccountInfo) => Promise<void>;
  deleteAccount!: (account: AccountInfo) => Promise<void>;

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

  account2!: CandidateAccountInfo[];
  newCandidateAccount!: (account: CandidateAccountInfo) => Promise<void>;
  editCandidateAccount!: (account: CandidateAccountInfo) => Promise<void>;
  deleteCandidateAccount!: (account: CandidateAccountInfo) => Promise<void>;

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
  add = false;
  editRow = false;

  //---------------------------------------------------for student
  defaultAccount: AccountInfo = {
    FName: "",
    MName: "",
    LName: "",
    idNum: "",
    department: "",
    email: "",
    username: "",
    password: "",
  };
  presentAccount = { ...this.defaultAccount };

  //---------------------------------------------------for Candidate
  defaultCandidateAccount: CandidateAccountInfo = {
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
  presentCandidateAccount = { ...this.defaultCandidateAccount };

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
  onNewAccount() {
    this.presentAccount = { ...this.defaultAccount };
    this.editRow = false;
    this.add = true;
  }

  onEditAccount(account: AccountInfo) {
    this.presentAccount = { ...account };
    this.editRow = true;
    this.add = false;
  }

  onDeleteAccount(account: AccountInfo) {
    this.presentAccount = { ...account };
    this.confirmDelete = true;
  }
  async onSaveAccount() {
    if (!this.editRow) {
      await this.newAccount(this.presentAccount);
    } else {
      await this.editAccount(this.presentAccount);
    }
  }
  async onConfirmDelete() {
    await this.deleteAccount(this.presentAccount);
    this.confirmDelete = true;
  }

  //----------------------------------------------functions for Candidate Account
  onNewCandidateAccount() {
    this.presentCandidateAccount = { ...this.defaultCandidateAccount };
    this.editRow = false;
    this.add = true;
  }

  onEditCandidateAccount(account2: CandidateAccountInfo) {
    this.presentCandidateAccount = { ...account2 };
    this.editRow = true;
    this.add = false;
  }

  onDeleteCandidateAccount(account2: CandidateAccountInfo) {
    this.presentCandidateAccount = { ...account2 };
    this.confirmDelete = true;
  }

  async onSaveCandidateAccount() {
    if (!this.editRow) {
      await this.newCandidateAccount(this.presentCandidateAccount);
    } else {
      await this.editCandidateAccount(this.presentCandidateAccount);
    }
  }
  async onConfirmCandidateDelete() {
    await this.deleteCandidateAccount(this.presentCandidateAccount);
    this.confirmDelete = true;
  }

  //----------------------------File Picker
  onItemClick() {
    console.log("Clicked!");
  }

  onRejected(rejectedEntries: string | any[]) {
    this.$q.notify({
      type: "negative",
      message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
    });
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
