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
                                  accept=".jpg, image/*"
                                  v-model="imageAttachement"
                                  label="Pick a Profile Pic (Max: 1mb)"
                                  style="max-width: 300px"
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

                              <div class="q-gutter-x-xs row">
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
                          :loading="loading"
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
                                    v-model="imageAttachement"
                                    accept=".jpg, image/*"
                                    label="Pick a Profile Pic (Max: 1mb)"
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
                      <div class="text-caption">
                        Student Name:
                      </div>
                      <div class="text-h5 q-mt-sm q-mb-xs">
                        {{ inputAccount.last_name }},
                        {{ inputAccount.first_name }}
                        {{ inputAccount.middle_name }}.
                      </div>
                      <div class="text-captio q-pt-sm">
                        Username:
                      </div>
                      <div class="text-bold q-mt-sm q-mb-xs">
                        fr34f
                      </div>
                      <div class="text-caption">
                       Password:
                      </div>
                      <div class="text-bold q-mt-sm q-mb-xs">
                        seg54
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
import { StudentDto, MediaDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import RepresentativeAccount from 'components/Account/representative.vue';
import SsgAccounts from 'components/Account/ssgAccount.vue';

@Options({
  components: {
    RepresentativeAccount,
    SsgAccounts,
  },
  computed: {
    ...mapState('student', ['allStudent']),
  },
  methods: {
    ...mapActions('student', [
      'addStudent',
      'editStudent',
      'deleteStudent',
      'getAllStudent',
    ]),
    ...mapActions('media', ['uploadMedia']),
  },
})
export default class ManageAccount extends Vue {
  //--------------------------------------------------------Table Column for student account
  allStudent!: StudentDto[];
  addStudent!: (payload: StudentDto) => Promise<void>;
  editStudent!: (payload: StudentDto) => Promise<void>;
  deleteStudent!: (payload: StudentDto) => Promise<void>;
  getAllStudent!: () => Promise<void>;

  uploadMedia!: (payload: File) => Promise<MediaDto>;

  async mounted() {
    await this.getAllStudent();
  }
  columns = [
    { name: 'action', align: 'center',label: 'Action', field: 'action' },
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

  //---------------------------------------------------for student
  inputAccount: any = {
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
    url: '',
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
    //upload picture
    this.loading = true;
    const media = await this.uploadMedia(this.imageAttachement as File);
    const res: any = await this.addStudent({
      ...this.inputAccount,
      url: media.id,
    });
    this.addNewAccount = false;
    this.resetModel();
    this.loading = false;
    this.$q.notify({
      type: 'positive',
      message: 'Account is Successfully Added!.',
    });
  }

  async onEditAccount() {
    this.loading = true;
    const media = await this.uploadMedia(this.imageAttachement as File);
    await this.editStudent({ ...this.inputAccount, url: media.id });
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

  openDetailDialog(val: StudentDto) {
    this.showDetails = true;
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
      url: '',
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
