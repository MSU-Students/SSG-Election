<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="width:100%, max-width: 1000px">
        <q-card>
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
                :rows="rows"
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
                      @click="add = true"
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
                            outlined
                            v-model="name"
                            label="Full Name"
                            hint="(first name, middle initial, last name)"
                          />
                          <q-input outlined v-model="username" label="ID Number" />
                          <q-input outlined v-model="email" label="Email" type="email" />
                          <q-select
                            outlined
                            v-model="department"
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
                        @click="editRow = true"
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
                              outlined
                              v-model="name"
                              label="Full Name"
                              hint="(first name, middle initial, last name)"
                            />
                            <q-input outlined v-model="username" label="ID Number" />
                            <q-input
                              outlined
                              v-model="email"
                              label="Email"
                              type="email"
                            />
                            <q-select
                              outlined
                              v-model="department"
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
                        @click="dialog = true"
                      />
                      <q-dialog v-model="dialog" persistent>
                        <q-card style="width: 300px">
                          <q-card-section class="row items-center">
                            <q-avatar
                              size="sm"
                              icon="warning"
                              color="red-10"
                              text-color="white"
                            />
                            <span class="q-ml-sm">Confirm Delete?</span>
                          </q-card-section>
                          <q-card-actions align="right">
                            <q-btn
                              flat
                              label="Cancel"
                              color="primary"
                              v-close-popup="cancelEnabled"
                              :disable="!cancelEnabled"
                            />
                            <q-btn flat label="Confirm" color="primary" v-close-popup />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                    </div>
                  </q-td>
                </template>
              </q-table>
            </q-tab-panel>
            <br />

            <!--Candidate Panel-->
            <q-tab-panel name="candidate" class="bg-white">
              <q-table
                class="my-sticky-header-table"
                title="Candidate Account List"
                :rows="C_rows"
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
                      @click="add = true"
                    />

                    <!--candidate Add Account-->
                    <q-dialog v-model="add" persistent>
                      <q-card style="width: 500px">
                        <q-card-section class="row">
                          <div class="text-h6">Add Account</div>
                          <q-space />
                          <q-btn flat round dense icon="close" v-close-popup />
                        </q-card-section>

                        <q-card-section class="q-gutter-md">
                          <q-input
                            outlined
                            v-model="name"
                            label="Full Name"
                            hint="(first name, middle initial, last name)"
                          />
                          <q-input outlined v-model="username" label="ID Number" />
                          <q-input outlined v-model="email" label="Email" type="email" />
                          <q-select
                            outlined
                            v-model="level"
                            :options="options_level"
                            label="Year Level"
                          />
                          <q-input
                            outlined
                            v-model="course"
                            label="Course"
                            type="course"
                          />
                          <q-select
                            outlined
                            v-model="department"
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
                        @click="editRow = true"
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
                              outlined
                              v-model="name"
                              label="Full Name"
                              hint="(first name, middle initial, last name)"
                            />
                            <q-input outlined v-model="username" label="ID Number" />
                            <q-input
                              outlined
                              v-model="email"
                              label="Email"
                              type="email"
                            />
                            <q-select
                              outlined
                              v-model="level"
                              :options="options_level"
                              label="Year Level"
                            />
                            <q-input
                              outlined
                              v-model="course"
                              label="Course"
                              type="course"
                            />
                            <q-select
                              outlined
                              v-model="department"
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
                        @click="dialog = true"
                      />
                      <q-dialog v-model="dialog" persistent>
                        <q-card style="width: 300px">
                          <q-card-section class="row items-center">
                            <q-avatar
                              size="sm"
                              icon="warning"
                              color="red-10"
                              text-color="white"
                            />
                            <span class="q-ml-sm">Confirm Delete?</span>
                          </q-card-section>
                          <q-card-actions align="right">
                            <q-btn
                              flat
                              label="Cancel"
                              color="primary"
                              v-close-popup="cancelEnabled"
                              :disable="!cancelEnabled"
                            />
                            <q-btn flat label="Confirm" color="primary" v-close-popup />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                    </div>
                  </q-td>
                </template>
              </q-table>
            </q-tab-panel>
          </q-tab-panels>
          <br />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
interface IRow {
  name: string;
}
@Options({})
export default class ManageAccount extends Vue {
  //for student account
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
      field: (row: IRow) => row.name,
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
  rows = [
    {
      name: "Arifah U. Abdulbasit",
      id: "201812291",
      email: "arifahabdulbasit@gmail.com",
      department: "College of Information and Computing Sciences",
      username: "aBjH45",
      password: "12345",
    },
    {
      name: "Najmah A. Omar",
      id: "201811518",
      email: "najmahomar@gmail.com",
      department: "College of Information and Computing Sciences",
      username: "aBjH45",
      password: "12345",
    },
    {
      name: "Anisah I. Dayaan",
      id: "201811942",
      email: "arifahabdulbasit@gmail.com",
      department: "College of Information and Computing Sciences",
      username: "aBjH45",
      password: "12345",
    },
  ];

  //for candidate account
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
      field: (row: IRow) => row.name,
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
  ];

  C_rows = [
    {
      name: "Arifah U. Abdulbasit",
      id: "201812291",
      email: "arifahabdulbasit@gmail.com",
      level: "4th Year",
      course: "BS-Information Technology",
      department: "College of Information and Computing Sciences",
      username: "aBjH45",
      password: "12345",
    },
    {
      name: "Najmah A. Omar",
      id: "201811518",
      email: "najmahomar@gmail.com",
      level: "4th Year",
      course: "BS-Information Technology",
      department: "College of Information and Computing Sciences",
      username: "aBjH45",
      password: "12345",
    },
    {
      name: "Anisah I. Dayaan",
      id: "201811942",
      email: "anisahdayaan@gmail.com",
      level: "4th Year",
      course: "BS-Information Technology",
      department: "College of Information and Computing Sciences",
      username: "aBjH45",
      password: "12345",
    },
  ];

  tab = ["students"];
  dialog = false;
  cancelEnabled = true;
  add = false;
  editRow = false;
  name = "";
  username = "";
  password = "";
  email = "";
  course = "";
  level = "";
  department = "";
  filter = "";
  options = [
    "College of Information and Computing Sciences",
    "College of Health Sciences",
    "College of Engineering",
    "College of Forestry",
    "College of law",
    "College of Fisheries",
    "College of Agriculture",
    "College of Natural Science and Mathematics",
  ];
  options_level = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  onItemClick() {
    console.log("Clicked!");
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 400px
  width: 1200px


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
