<template>
  <q-page>
    <div>
      <div style="width:100%, max-width: 1200px">
        <q-tabs
          v-model="tab"
          align="justify"
          narrow-indicator
          active-color="white"
          active-bg-color="primary"
        >
          <q-tab
            class="text-caption text-primary"
            name="student"
            label="Student Account"
            icon="lock"
          />
          <q-tab
            class="text-caption text-primary"
            name="representative"
            label="Representatives Account"
            icon="lock"
          />
          <q-tab
            class="text-caption text-primary"
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
                    <q-card style="width: 1100px; max-width: 100vw">
                      <q-card-section class="row">
                        <div class="text-h6">Create new Account</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section>
                        <div class="row q-pl-md q-pr-lg">
                          <q-form @submit="onaddAccount()">
                            <div class="row">
                              <!--C O L U M N-->
                              <div class="col-12 col-md">
                                <div class="text-overline text-bold">
                                  Account Type
                                  <div class="q-gutter-y-md-4">
                                    <q-file
                                      outlined
                                      accept=".jpg, image/*"
                                      v-model="imageAttachement"
                                      style="width: 300px"
                                      label="Pick a Profile Pic (Max: 1MB)"
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
                                        v-model="inputStudent.first_name"
                                        dense
                                        outlined
                                        label="First Name"
                                        lazy-rules
                                        :rules="[
                                          (val) =>
                                            (val && val.length > 0) || '',
                                        ]"
                                      />
                                    </div>
                                    <div class="col-12 col-md">
                                      <q-input
                                        v-model="inputStudent.middle_name"
                                        dense
                                        outlined
                                        label="Middle Name"
                                      />
                                    </div>
                                    <div class="col-12 col-md">
                                      <q-input
                                        v-model="inputStudent.last_name"
                                        dense
                                        outlined
                                        label="Last Name"
                                        lazy-rules
                                        :rules="[
                                          (val) =>
                                            (val && val.length > 0) || '',
                                        ]"
                                      />
                                    </div>
                                    <div class="col-12 col-md">
                                      <q-input
                                        v-model="inputStudent.suffix"
                                        dense
                                        outlined
                                        label="Suffix"
                                      />
                                    </div>
                                  </div>

                                  <div class="q-gutter-x-xs row">
                                    <div class="col-12 col-md">
                                      <q-input
                                        outlined
                                        dense
                                        v-model="inputStudent.school_id"
                                        label="ID Number"
                                        lazy-rules
                                        :rules="[
                                          (val) =>
                                            (val && val.length > 0) || '',
                                        ]"
                                      />
                                    </div>
                                    <div class="col-12 col-md">
                                      <q-input
                                        outlined
                                        dense
                                        v-model="inputStudent.email"
                                        label="Email"
                                        type="email"
                                        lazy-rules
                                        :rules="[
                                          (val) =>
                                            (val && val.length > 0) || '',
                                        ]"
                                      />
                                    </div>
                                    <div class="col-12 col-md">
                                      <q-input
                                        outlined
                                        dense
                                        v-model="inputStudent.yr_admitted"
                                        label="Year Admitted"
                                        lazy-rules
                                        :rules="[
                                          (val) =>
                                            (val && val.length > 0) || '',
                                        ]"
                                      />
                                    </div>
                                  </div>

                                  <div class="q-gutter-xs row">
                                    <div class="col-12 col-md">
                                      <q-input
                                        outlined
                                        dense
                                        v-model="inputStudent.course"
                                        label="Course"
                                        hint="Ex. BS Information Technology"
                                        lazy-rules
                                        :rules="[
                                          (val) =>
                                            (val && val.length > 0) || '',
                                        ]"
                                      />
                                    </div>
                                    <div class="col-12 col-md">
                                      <q-input
                                        outlined
                                        dense
                                        v-model="inputStudent.department"
                                        label="Department"
                                        hint="Ex. Department of Information Technology"
                                        lazy-rules
                                        :rules="[
                                          (val) =>
                                            (val && val.length > 0) || '',
                                        ]"
                                      />
                                    </div>
                                    <div class="col-12 col-md">
                                      <q-select
                                        outlined
                                        dense
                                        v-model="inputStudent.college"
                                        :options="options"
                                        label="College"
                                        lazy-rules
                                        :rules="[
                                          (val) =>
                                            (val && val.length > 0) || '',
                                        ]"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="q-pt-md" align="right">
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
                                    type="submit"
                                  />
                                </div>
                              </div>
                            </div>
                          </q-form>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-dialog>
                </div>
                <q-btn color="primary" icon-right="archive" no-caps />
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
                            <div class="col-12 col-md">
                              <div class="text-overline text-bold">
                                Account Type
                                <div class="q-gutter-y-md-4">
                                  <q-file
                                    outlined
                                    v-model="imageAttachement"
                                    accept=".jpg, image/*"
                                    style="width: 300px"
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
                                      v-model="inputStudent.first_name"
                                      dense
                                      outlined
                                      label="First Name"
                                      lazy-rules
                                      :rules="[
                                        (val) => (val && val.length > 0) || '',
                                      ]"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      v-model="inputStudent.middle_name"
                                      dense
                                      outlined
                                      label="Middle Name"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      v-model="inputStudent.last_name"
                                      dense
                                      outlined
                                      label="Last Name"
                                      lazy-rules
                                      :rules="[
                                        (val) => (val && val.length > 0) || '',
                                      ]"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      v-model="inputStudent.suffix"
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
                                      v-model="inputStudent.school_id"
                                      label="ID Number"
                                      lazy-rules
                                      :rules="[
                                        (val) => (val && val.length > 0) || '',
                                      ]"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputStudent.email"
                                      label="Email"
                                      type="email"
                                      lazy-rules
                                      :rules="[
                                        (val) => (val && val.length > 0) || '',
                                      ]"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputStudent.yr_admitted"
                                      label="Year Admitted"
                                      lazy-rules
                                      :rules="[
                                        (val) => (val && val.length > 0) || '',
                                      ]"
                                    />
                                  </div>
                                </div>

                                <div class="q-gutter-xs q-gutter-y-md row">
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputStudent.course"
                                      label="Course"
                                      hint="Ex. BS Information Technology"
                                      lazy-rules
                                      :rules="[
                                        (val) => (val && val.length > 0) || '',
                                      ]"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputStudent.department"
                                      label="Department"
                                      hint="Ex. Department of Information Technology"
                                      lazy-rules
                                      :rules="[
                                        (val) => (val && val.length > 0) || '',
                                      ]"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-select
                                      outlined
                                      dense
                                      v-model="inputStudent.college"
                                      :options="options"
                                      label="College"
                                      lazy-rules
                                      :rules="[
                                        (val) => (val && val.length > 0) || '',
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
                        style="width: 500px; max-width: 60vw"
                        flat
                        bordered
                      >
                        <q-card-section class="bg-primary text-white">
                          <div class="text-h6">
                            Student Account Information
                            <q-btn
                              round
                              flat
                              dense
                              icon="close"
                              class="float-right"
                              color="grey-2"
                              v-close-popup
                            ></q-btn>
                          </div>
                        </q-card-section>
                        <q-card-section horizontal>
                          <q-card-section class="q-pt-xs col">
                            <div class="text-caption">Student Name:</div>
                            <div class="text-h5 q-mt-sm q-mb-xs">
                              {{ inputUser.student?.last_name }},
                              {{ inputUser.student?.first_name }}
                              {{ inputUser.student?.middle_name }}
                              {{ inputUser.student?.suffix }}
                            </div>
                            <div class="text-captio q-pt-sm">Username:</div>
                            <div class="text-bold q-mt-sm q-mb-xs">
                              {{ inputUser.username }}
                            </div>
                            <div class="text-caption">Password:</div>
                            <div class="text-bold q-mt-sm q-mb-xs">
                              {{ inputUser.password }}
                            </div>
                          </q-card-section>
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-tab-panel>
          <!-------------------------------------------------------------------------------------------------------------->

          <!------------------------------------------candidate Panel--------------------------------------------------->
          <q-tab-panel name="representative" class="bg-white">
            <RepresentativeAccount />
          </q-tab-panel>

          <!---------------------------------------S S G MEMBER Panel-------------------------------->
          <q-tab-panel name="ssg" class="bg-white">
            <ssg-account />
          </q-tab-panel>
        </q-tab-panels>
        <br />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { StudentDto, MediaDto, UserDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import RepresentativeAccount from 'components/Account/representative.vue';
import SsgAccounts from 'components/Account/ssgAccount.vue';
import { FILE } from 'dns';

@Options({
  components: {
    RepresentativeAccount,
    SsgAccounts,
  },
  computed: {
    ...mapState('student', ['allStudent']),
    ...mapState('account', ['allAccount']),
  },
  methods: {
    ...mapActions('student', [
      'addStudent',
      'editStudent',
      'getAllStudent',
    ]),
    ...mapActions('account', [
      'addAccount',
      'editAccount',
      'deleteAccount',
      'getAllUser',
    ]),
    ...mapActions('media', ['uploadMedia']),
  },
})
export default class ManageAccount extends Vue {
  //--------------------------------------------------------Table Column for student account
  addAccount!: (payload: UserDto) => Promise<void>;
  editAccount!: (payload: UserDto) => Promise<void>;
  deleteAccount!: (payload: UserDto) => Promise<void>;
  allStudent!: StudentDto[];
  allAccount!: UserDto[];
  addStudent!: (payload: StudentDto) => Promise<void>;
  editStudent!: (payload: StudentDto) => Promise<void>;
  getAllStudent!: () => Promise<void>;
  getAllUser!: () => Promise<void>;

  uploadMedia!: (payload: File) => Promise<MediaDto>;

  async mounted() {
    await this.getAllStudent();
    await this.getAllUser();
  }
  columns = [
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
    {
      name: 'id',
      align: 'center',
      label: 'School ID',
      field: (row: UserDto) => row.student?.school_id,
    },
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: UserDto) =>
        row.student?.last_name +
        ', ' +
        row.student?.first_name +
        ' ' +
        row.student?.middle_name +
        ' ' +
        row.student?.suffix,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: (row: UserDto) => row.student?.email,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: UserDto) => row.student?.course,
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: (row: UserDto) => row.student?.department,
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: UserDto) => row.student?.college,
    },
    {
      name: 'status',
      align: 'center',
      label: 'Status',
      field: (row: UserDto) => row.student?.student_type,
      color: 'green',
    },
  ];

  filter = '';
  imageAttachement: File = new File([], '');
  loading = false;
  showDetails = false;
  showSSGDetails = false;
  tab = 'student';
  addNewAccount = false;
  updateAccount = false;
  editRowAccount = false;

  //---------------------------------------------------for student
  inputUser: UserDto = {
    username: '',
    password: '',
    userType: 'voter',
    status: '',
  };
  inputStudent: any = {
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    email: '',
    yr_admitted: '',
    college: '',
    course: '',
    department: '',
    student_type: 'Regular',
  };

  //---------------------------------------------------for Candidate

  options = [
    'College of Agriculture',
    'College of Business Administration and Accounting',
    'College of Education',
    'College of Engineering',
    'College of Fisheries',
    'College of Forestry and Environmental Studies',
    'College of Health Science',
    'College of Hotel and Restaurant Management',
    'College of Information and Computing Sciences',
    'College of Law',
    'College of Medicine',
    'College of Natural Science and Mathematics',
    'College of Public Affair',
    'College of Social Sciences and Humanities',
    'College of Sports, Physical Education and Recreation',
    'King Faisal Center for Islamic, Arabic and Asian Studies',
  ];

  options_level = ['1st Year', '2nd Year', '3nd Year', '4th Year'];

  //------------------------------------------functions for Student Account
  async onaddAccount() {
    //upload picture
    try {
      if (this.imageAttachement.size > 0) {
        this.loading = true;
        const media = await this.uploadMedia(this.imageAttachement as File);
        const profile: any = await this.addStudent({
          ...this.inputStudent,
          url: media.id,
        });

        await this.addAccount({
          ...this.inputUser,
          student: profile.student_id,
        });
        this.$q.notify({
          type: 'positive',
          message: 'Account is successfully added.',
        });
      } else {
        await this.addStudent(this.inputStudent);
        this.$q.notify({
          type: 'positive',
          message: 'Student has been added without account.',
        });
      }
    } catch (error) {
      this.$q.notify({
        type: 'negative',
        message: 'Error!.',
      });
    }

    this.addNewAccount = false;
    this.resetModel();
    this.loading = false;
  }

  async onEditAccount() {
    this.loading = true;
    const media = await this.uploadMedia(this.imageAttachement as File);
    await this.editStudent({ ...this.inputStudent, url: media.id });
    this.editRowAccount = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully edited.',
    });
  }

  openEditDialog(val: StudentDto) {
    this.editRowAccount = true;
    this.inputStudent = { ...val };
  }

  openDetailDialog(val: UserDto) {
    this.showDetails = true;
    this.inputUser = { ...val };
  }

  deleteSpecificAccount(val: UserDto) {
    this.$q
      .dialog({
        message: 'Are you sure you want to delete the account?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteAccount(val.account_id as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted.',
        });
      });
  }

  resetModel() {
    this.inputStudent = {
      first_name: '',
      middle_name: '',
      last_name: '',
      suffix: '',
      email: '',
      yr_admitted: '',
      college: '',
      course: '',
      department: '',
      student_type: 'Regular',
    };
    this.imageAttachement = new File([], 'Select File');
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
