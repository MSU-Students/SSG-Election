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
              virtual-scroll
              row-key="name"
              :loading="loading"
              :rows-per-page-options="[0]"
              :filter="filter"
            >
              <template v-slot:top-right>
                <div class="q-gutter-sm row">
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
                  <div>
                    <q-btn
                      color="primary"
                      dense
                      flat
                      icon="add"
                      @click="addNewAccount = true"
                    />
                    <q-tooltip :offset="[0, 8]">Add Account</q-tooltip>
                  </div>
                  <q-dialog v-model="addNewAccount" persistent>
                    <q-card style="width: 1100px; max-width: 100vw">
                      <q-card-section class="row">
                        <q-toolbar>
                          <div class="text-h6">Create New Account</div>
                          <q-space />
                          <q-btn
                            flat
                            round
                            dense
                            icon="close"
                            color="primary"
                            v-close-popup
                          />
                        </q-toolbar>
                      </q-card-section>

                      <q-card-section>
                        <div class="row q-pl-lg">
                          <q-form @submit="onaddAccount()">
                            <div class="row">
                              <!--C O L U M N-->
                              <div class="col-12 col-md q-pr-md">
                                <div class="text-overline text-bold">
                                  Profile Picture
                                  <div class="q-gutter-y-md-4">
                                    <q-file
                                      outlined
                                      accept=".jpg, image/*"
                                      v-model="imageAttachement"
                                      class="width: 300px"
                                      label="Pick a Profile Pic (Max: 1MB)"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 col-md-8">
                                <div class="text-overline text-bold">
                                  Student Information
                                  <div class="q-gutter-xs q-gutter-y-lg row">
                                    <div class="col-12 col-md">
                                      <q-input
                                        v-model="inputStudent.first_name"
                                        dense
                                        outlined
                                        label="First Name"
                                        lazy-rules
                                        :rules="[(val) => (val && val.length > 0) || '']"
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
                                        :rules="[(val) => (val && val.length > 0) || '']"
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
                                        mask="#########"
                                        fill-mask
                                        label="ID Number"
                                        lazy-rules
                                        :rules="[(val) => (val && val.length > 0) || '']"
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
                                        :rules="[(val) => (val && val.length > 0) || '']"
                                      />
                                    </div>
                                    <div class="col-12 col-md">
                                      <q-input
                                        outlined
                                        dense
                                        v-model="inputStudent.yr_admitted"
                                        mask="####"
                                        fill-mask
                                        label="Year Admitted"
                                        lazy-rules
                                        :rules="[(val) => (val && val.length > 0) || '']"
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
                                        :rules="[(val) => (val && val.length > 0) || '']"
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
                                        :rules="[(val) => (val && val.length > 0) || '']"
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
                                        :rules="[(val) => (val && val.length > 0) || '']"
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
                                    :loading="loading"
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
                <q-btn-dropdown
                  flat
                  color="white"
                  text-color="primary"
                  dropdown-icon="import_export"
                >
                  <q-list>
                    <q-item clickable v-close-popup @click="showAccountDialog(false)">
                      <q-item-section avatar>
                        <q-avatar icon="file_upload" color="white" text-color="primary" />
                      </q-item-section>
                      <q-item-section @update:model-value="fileChoose($event)">
                        <q-item-label>Import</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator inset />
                    <q-item clickable v-close-popup @click="exportTable"
                      ><q-item-section avatar>
                        <q-avatar
                          icon="file_download"
                          color="white"
                          text-color="primary"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Export</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </template>

              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div class="q-gutter-sm">
                    <q-btn
                      round
                      color="warning"
                      icon="edit"
                      size="sm"
                      flat
                      dense
                      @click="openEditDialog(props.row.student)"
                      ><q-tooltip class="bg-warning text-black" :offset="[10, 10]">
                        Edit
                      </q-tooltip></q-btn
                    >
                    <q-dialog v-model="editRowAccount" persistent>
                      <q-card style="width: 1100px; max-width: 100vw">
                        <q-card-section class="row">
                          <q-toolbar>
                            <div class="text-h6">Edit Account</div>
                            <q-space />
                            <q-btn
                              flat
                              round
                              dense
                              icon="close"
                              color="primary"
                              v-close-popup
                            />
                          </q-toolbar>
                        </q-card-section>

                        <q-card-section>
                          <div class="row q-pl-md q-pr-lg">
                            <!--C O L U M N-->
                            <div class="col-12 col-md q-pr-sm">
                              <div class="text-overline text-bold">
                                Profile Picture
                                <div class="q-gutter-y-md-4">
                                  <q-file
                                    outlined
                                    v-model="imageAttachement"
                                    accept=".jpg, image/*"
                                    class="width: 300px"
                                    label="Pick a Profile Pic (Max: 1MB)"
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
                                      :rules="[(val) => (val && val.length > 0) || '']"
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
                                      :rules="[(val) => (val && val.length > 0) || '']"
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
                                      mask="#########"
                                      fill-mask
                                      label="ID Number"
                                      lazy-rules
                                      :rules="[(val) => (val && val.length > 0) || '']"
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
                                      :rules="[(val) => (val && val.length > 0) || '']"
                                    />
                                  </div>
                                  <div class="col-12 col-md">
                                    <q-input
                                      outlined
                                      dense
                                      v-model="inputStudent.yr_admitted"
                                      mask="####"
                                      fill-mask
                                      label="Year Admitted"
                                      lazy-rules
                                      :rules="[(val) => (val && val.length > 0) || '']"
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
                                      :rules="[(val) => (val && val.length > 0) || '']"
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
                                      :rules="[(val) => (val && val.length > 0) || '']"
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
                                      :rules="[(val) => (val && val.length > 0) || '']"
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
                      ><q-tooltip class="bg-red-10" :offset="[10, 10]">
                        Delete
                      </q-tooltip></q-btn
                    >
                    <q-btn
                      round
                      color="primary"
                      icon="more_vert"
                      size="md"
                      flat
                      dense
                      @click="openDetailDialog(props.row)"
                      ><q-tooltip class="bg-primary" :offset="[10, 10]">
                        Details
                      </q-tooltip></q-btn
                    >
                    <q-dialog v-model="showDetails">
                      <div
                        v-bind:class="{
                          'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
                        }"
                        class="col-12 col-md-6 flex content-center q-pt-lg"
                        v-if="inputUser"
                      >
                        <q-card
                          class="shadow-10"
                          color="primary"
                          v-bind:style="
                            $q.screen.lt.sm ? { width: '100%' } : { height: '100%' }
                          "
                        >
                          <q-card-section>
                            <q-avatar size="80px" class="absolute-center shadow-4">
                              <q-img
                                square
                                v-if="inputUser.student?.url"
                                :src="`http://localhost:3000/media/${inputUser.student?.url}`"
                              />
                              <q-img
                                v-if="!inputUser.student?.url"
                                src="~assets/images/MSU.jpg"
                                class="q-pb-sm"
                              />
                            </q-avatar>
                          </q-card-section>
                          <q-card-section>
                            <div class="q-pt-lg">
                              <div class="col text-h6 ellipsis flex justify-center">
                                <div
                                  class="text-h4 text-warning q-my-none text-weight-bold"
                                >
                                  <div
                                    class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-uppercase"
                                  >
                                    {{ inputUser.student?.first_name }}
                                    {{ inputUser.student?.middle_name }}
                                    {{ inputUser.student?.last_name }}
                                    {{ inputUser.student?.suffix }}
                                  </div>
                                </div>
                              </div>
                              <q-separator />
                              <div class="q-gutter-sm row">
                                <div class="col-md-4 q-pa-sm">
                                  <div class="text-caption q-pt-sm">Username:</div>
                                  <div
                                    class="text-bold q-mt-sm q-mb-xs text-uppercase text-primary"
                                  >
                                    {{ inputUser.username }}
                                  </div>
                                </div>
                                <div class="col-md-4 q-pa-sm">
                                  <div class="text-caption q-pt-sm">Password:</div>
                                  <div
                                    class="text-bold q-mt-sm q-mb-xs text-uppercase text-primary"
                                  >
                                    {{ inputUser.password }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </q-card-section>
                          <!-- <q-card class="my-card"
                        style="width: 500px; max-width: 60vw"
                        flat
                        bordered>
                        <q-card-section class="bg-primary text-white">
                          <div class="text-h6">
                            Student Account Information
                            <q-btn
                              round
                              flat
                              dense
                              icon="close"
                              class="float-right"
                              color="grey"
                              v-close-popup
                            ></q-btn>
                          </div>
                        </q-card-section>
                        <q-card-section horizontal>
                          <q-card-section class="q-pt-xs col">
                            <div class="text-caption">Student Name:</div>
                            <div class="text-h5 q-mt-sm q-mb-xs bold">
                              {{ inputUser.student?.last_name }},
                              {{ inputUser.student?.first_name }}
                              {{ inputUser.student?.middle_name }}
                              {{ inputUser.student?.suffix }}
                            </div>
                            <div class="text-captio q-pt-sm">Username:</div>
                            <div class="text-bold q-mt-sm q-mb-xs text-uppercase">
                              {{ inputUser.username }}
                            </div>
                            <div class="text-caption">Password:</div>

                            <div class="text-bold q-mt-sm q-mb-xs text-uppercase">
                              {{ inputUser.password }}
                            </div>
                          </q-card-section>
                        </q-card-section> -->
                        </q-card>
                      </div>
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
            <SsgAccounts />
          </q-tab-panel>
        </q-tab-panels>
        <br />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { exportFile } from 'quasar';
import { StudentDto, MediaDto, UserDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import RepresentativeAccount from 'components/Account/representative.vue';
import SsgAccounts from 'components/Account/ssgAccount.vue';
import studentResult from './Result.vue';

function wrapCsvValue(val: string, formatFn?: (v: string, r: any) => string, row?: any) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val;
  formatted = formatted === void 0 || formatted === null ? '' : String(formatted);
  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')
  return `"${formatted}"`;
}

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
      'deleteStudent',
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
  deleteStudent!: (payload: UserDto) => Promise<void>;
  getAllStudent!: () => Promise<void>;
  getAllUser!: () => Promise<void>;

  uploadMedia!: (payload: File) => Promise<MediaDto>;

  async mounted() {
    await this.getAllStudent();
    await this.getAllUser();
  }
  columns = [
    { name: 'action', align: 'center', label: '', field: 'action' },
    {
      name: 'id',
      align: 'left',
      label: 'ID Number',
      field: (row: UserDto) => row.student?.school_id,
      sortable: true,
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
      sortable: true,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: (row: UserDto) => row.student?.email,
      sortable: true,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: UserDto) => row.student?.course,
      sortable: true,
    },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: (row: UserDto) => row.student?.department,
      sortable: true,
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: UserDto) => row.student?.college,
      sortable: true,
    },
    {
      name: 'type',
      align: 'center',
      label: 'Student Type',
      field: (row: UserDto) => row.student?.student_type,
      color: 'green',
      sortable: true,
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
  inputStudent: StudentDto = {
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
    'College of Business Administration and Accountancy',
    'College of Education',
    'College of Engineering',
    'College of Fisheries',
    'College of Forestry and Environmental Studies',
    'College of Health Sciences',
    'College of Hotel and Restaurant Management',
    'College of Information and Computing Sciences',
    'College of Law',
    'College of Medicine',
    'College of Natural Sciences and Mathematics',
    'College of Public Affairs',
    'College of Social Sciences and Humanities',
    'College of Sports, Physical Education and Recreation',
    'King Faisal Center for Islamic, Arabic and Asian Studies',
  ];

  //------------------------------------------functions for Student Account
  async onaddAccount() {
    //upload picture
    try {
      //if there is a profile picture
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
        const profile: any = await this.addStudent({
          ...this.inputStudent,
        });
        await this.addAccount({
          ...this.inputUser,
          student: profile.student_id,
        });
        this.$q.notify({
          type: 'positive',
          message: 'Account has been save (No Profile)',
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
    try {
      if (this.imageAttachement.size > 0) {
        this.loading = true;
        const media = await this.uploadMedia(this.imageAttachement as File);
        await this.editStudent({ ...this.inputStudent, url: media.id });
        this.$q.notify({
          type: 'positive',
          message: 'Successfully edited.',
        });
      } else {
        await this.editStudent(this.inputStudent);
        this.$q.notify({
          type: 'positive',
          message: 'Successfully edited.',
        });
      }
    } catch (error: any) {
      this.$q.notify({
        type: 'positive',
        message: error.message,
      });
    }

    this.editRowAccount = false;
    this.resetModel();
  }

  openEditDialog(val: StudentDto) {
    this.editRowAccount = true;
    this.inputStudent = { ...val };
  }

  openDetailDialog(val: UserDto) {
    this.showDetails = true;
    this.inputUser = { ...val };
  }
  mapUserProfile(user: StudentDto) {
    return this.allAccount.filter((s) => user.student_id === s.student?.student_id);
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

  colorManipulation(student_type: string) {
    if (student_type === 'Regular') {
      return 'warning';
    }
    if (student_type === 'Representative') {
      return 'positive';
    }
  }

  //---------------Export Table
  exportTable() {
    // naive encoding to csv format
    const header = [
      wrapCsvValue('Student ID'),
      wrapCsvValue('Name'),
      wrapCsvValue('Email'),
      wrapCsvValue('Course'),
      wrapCsvValue('Department'),
      wrapCsvValue('College'),
      wrapCsvValue('Username'),
      wrapCsvValue('Password'),
    ];
    const rows = [header.join(',')].concat(
      this.allAccount.map((c) =>
        [
          wrapCsvValue(String(c.student?.school_id)),
          wrapCsvValue(
            String(
              c.student?.last_name +
                ', ' +
                c.student?.first_name +
                ' ' +
                c.student?.middle_name +
                ' ' +
                c.student?.suffix
            )
          ),
          wrapCsvValue(String(c.student?.email)),
          wrapCsvValue(String(c.student?.course)),
          wrapCsvValue(String(c.student?.department)),
          wrapCsvValue(String(c.student?.college)),
          wrapCsvValue(c.username),
          wrapCsvValue(c.password),
        ].join(',')
      )
    );
    const status = exportFile('category-export.csv', rows.join('\r\n'), 'text/csv');
    if (status !== true) {
      this.$q.notify({
        message: 'Browser denied file download...',
        color: 'negative',
        icon: 'warning',
      });
    }
  }

  //----------------Import
  file = [];
  isUpload = false;
  showAccount!: boolean;
  showAccountDialog!: (show: boolean) => void;

  hideDialog() {
    this.file = [];
  }

  fileChoose(val: any) {
    this.file = val;
  }

  async upload() {
    this.isUpload = true;
    const profile: any = await this.addStudent({
      ...this.inputStudent,
      ...this.file,
    });
    await this.addAccount({
      ...this.inputUser,
      student: profile.student_id,
    });
    this.isUpload = false;
    this.showAccountDialog(false);
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%
  max-height: 435px
  width: 100%
  max-width: 1500px


  .q-table__top,
  .q-table__bottom,

 thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: white

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
