<template>
  <q-page>
    <div class="q-pl-md">
      <div class="text-h5 q-pa-sm q-pt-md text-bold">
        <q-icon name="ballot" color="primary" style="font-size: 3rem" />
        Election Page
      </div>
    </div>

    <!--separator-->
    <!-- <div class="row q-col-gutter-lg">
      <div class="col">
        <q-toolbar>
          <q-toolbar-title class="text-overline text-weight-bold">
            Recent Elections
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </div> -->
    <!--separator-->
    <!-----------Recent Election Ballot-------------->
    <div class="row q-pa-sm">
      <q-table
        class="my-sticky-header-table"
        title="Election List"
        :grid="$q.screen.xs"
        :rows="allElection"
        :columns="columns"
        row-key="name"
        hide-bottom
        ><template v-slot:top-right>
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
                @click="addNewElection = true"
              />
              <q-tooltip :offset="[0, 10]">Add Election</q-tooltip>
            </div>

            <q-dialog v-model="addNewElection" persistent>
              <q-card style="width: 700px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6">Create new Election</div>
                  <q-space />
                  <q-btn
                    flat
                    round
                    dense
                    icon="close"
                    color="primary"
                    v-close-popup
                    @click="resetModel()"
                  />
                </q-card-section>

                <q-card-section>
                  <div>
                    <div class="row">
                      <div class="col-12 col-md-3">Election type *</div>
                      <div class="col-12 col-md-9">
                        <q-select
                          filled
                          v-model="inputElection.election_type"
                          :options="election_type"
                          :dense="dense"
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val && val.length > 0) ||
                              'Please type something',
                          ]"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 col-md-3">Academic Year *</div>
                      <div class="col-12 col-md-9">
                        <q-input
                          outlined
                          dense
                          v-model="inputElection.academic_yr"
                          hint="current academic year"
                          mask="#### - ####"
                          fill-mask
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val && val.length > 0) ||
                              'Please type something',
                          ]"
                        />
                      </div>
                    </div>

                    <div class="row q-pt-xs">
                      <div class="col-3">Start Time *</div>
                      <div class="q-gutter-lg q-py-sm row">
                        <div class="col-5">
                          <q-input
                            v-model="inputElection.start_date"
                            :dense="dense"
                            filled
                            type="date"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please enter the date',
                            ]"
                            hint="Native date"
                          />
                        </div>
                        <div class="col-5">
                          <q-input
                            v-model="inputElection.start_time"
                            :dense="dense"
                            filled
                            type="time"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please enter the time',
                            ]"
                            hint="Native time"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row q-pt-xs">
                      <div class="col-3">End Time *</div>
                      <div class="q-gutter-lg q-py-sm row">
                        <div class="col-5">
                          <q-input
                            v-model="inputElection.end_date"
                            :dense="dense"
                            filled
                            type="date"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please enter the date',
                            ]"
                            hint="Native date"
                          />
                        </div>
                        <div class="col-5">
                          <q-input
                            v-model="inputElection.end_time"
                            :dense="dense"
                            filled
                            type="time"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please enter the time',
                            ]"
                            hint="Native time"
                          />
                        </div>
                      </div>
                    </div>

                    <div align="right">
                      <q-btn
                        flat
                        label="Cancel"
                        color="red-10"
                        v-close-popup
                        @click="resetModel()"
                      />
                      <q-btn
                        flat
                        label="Submit"
                        color="primary"
                        @click="onaddElection()"
                      />
                    </div>
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
                color="warning"
                icon="edit"
                size="sm"
                flat
                dense
                @click="openEditDialog(props.row)"
                ><q-tooltip class="bg-warning text-black" :offset="[10, 10]">
                  Edit
                </q-tooltip></q-btn
              >
              <q-dialog v-model="editRowElection" persistent>
                <q-card style="width: 800px; max-width: 100vw" class="q-pa-md">
                  <q-card-section class="row">
                    <div class="text-h6">Create new Election</div>
                    <q-space />
                    <q-btn
                      flat
                      round
                      dense
                      icon="close"
                      color="primary"
                      v-close-popup
                      @click="resetModel()"
                    />
                  </q-card-section>
                  <q-card-section>
                    <div>
                      <div class="row">
                        <div class="col-12 col-md-3">Election type *</div>
                        <div class="col-12 col-md-9">
                          <q-select
                            filled
                            v-model="inputElection.election_type"
                            :options="election_type"
                            :dense="dense"
                            lazy-rules
                            :rules="[(val) => (val && val.length > 0) || '']"
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-md-3">Academic Year *</div>
                        <div class="col-12 col-md-9">
                          <q-input
                            filled
                            v-model="inputElection.academic_yr"
                            :dense="dense"
                            hint="current academic year"
                            mask="#### - ####"
                            fill-mask
                            lazy-rules
                            :rules="[(val) => (val && val.length > 0) || '']"
                          />
                        </div>
                      </div>

                      <div class="row q-pt-xs">
                        <div class="col-3">Start Time *</div>
                        <div class="q-gutter-lg q-py-sm row">
                          <div class="col-5">
                            <q-input
                              v-model="inputElection.start_date"
                              :dense="dense"
                              filled
                              type="date"
                              lazy-rules
                              :rules="[(val) => (val && val.length > 0) || '']"
                              hint="Native date"
                            />
                          </div>
                          <div class="col-5">
                            <q-input
                              v-model="inputElection.start_time"
                              :dense="dense"
                              filled
                              type="time"
                              lazy-rules
                              :rules="[(val) => (val && val.length > 0) || '']"
                              hint="Native time"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row q-pt-xs">
                        <div class="col-3">End Time *</div>
                        <div class="q-gutter-lg q-py-sm row">
                          <div class="col-5">
                            <q-input
                              v-model="inputElection.end_date"
                              :dense="dense"
                              filled
                              type="date"
                              lazy-rules
                              :rules="[(val) => (val && val.length > 0) || '']"
                              hint="Native date"
                            />
                          </div>
                          <div class="col-5">
                            <q-input
                              v-model="inputElection.end_time"
                              :dense="dense"
                              filled
                              type="time"
                              lazy-rules
                              :rules="[(val) => (val && val.length > 0) || '']"
                              hint="Native time"
                            />
                          </div>
                        </div>
                      </div>

                      <div align="right">
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
                          @click="onEditElection()"
                        />
                      </div>
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
                @click="deleteSpecificElection(props.row)"
                ><q-tooltip class="bg-red-10" :offset="[10, 10]">
                  Delete
                </q-tooltip></q-btn
              >
            </div>
          </q-td>
        </template>
        <template #body-cell-status="props">
          <q-td :props="props">
            <q-chip
              flat
              color="white"
              :text-color="colorManipulation(props.row.status)"
              :label="labelManipulation(props.row.status)"
            />
          </q-td>
        </template>
      </q-table>
    </div>
    <!----------------------------------------------->
  </q-page>
</template>

<script lang="ts">
import { ElectionDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('election', ['allElection']),
  },
  methods: {
    ...mapActions('election', [
      'addElection',
      'editElection',
      'deleteElection',
      'getAllElection',
    ]),
  },
})
export default class ManageElection extends Vue {
  addElection!: (payload: ElectionDto) => Promise<void>;
  editElection!: (payload: ElectionDto) => Promise<void>;
  deleteElection!: (payload: ElectionDto) => Promise<void>;
  getAllElection!: () => Promise<void>;
  allElection!: ElectionDto[];

  async mounted() {
    await this.getAllElection();
  }

  columns = [
    { name: 'action', align: 'center', field: 'action' },
    {
      name: 'name',
      required: true,
      label: 'Election Name',
      align: 'left',
      field: (row: ElectionDto) => row.election_type + ', ' + row.academic_yr,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'start',
      required: true,
      label: 'Election Start',
      align: 'left',
      field: (row: ElectionDto) => row.start_date + ', ' + row.start_time,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'end',
      required: true,
      label: 'Election End',
      align: 'left',
      field: (row: ElectionDto) => row.end_date + ', ' + row.end_time,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'status',
      required: true,
      label: 'Election Status',
      align: 'left',
      field: (row: ElectionDto) => row.status,
      format: (val: string) => `${val}`,
      sortable: true,
    },
  ];
  addNewElection = false;
  editRowElection = false;
  dense = true;
  filter = '';

  election_type = ['College Representatives', 'SSG Election'];

  inputElection: ElectionDto = {
    election_name: '',
    academic_yr: '',
    election_type: '',
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    status: '',
  };

  async onaddElection() {
    await this.addElection({ ...this.inputElection, status: 'Inactive' });
    this.addNewElection = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'An Election is succcessfully Added.',
    });
  }

  async onEditElection() {
    await this.editElection(this.inputElection);
    this.editRowElection = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificElection(val: ElectionDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteElection(val.election_id as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: ElectionDto) {
    this.editRowElection = true;
    this.inputElection = { ...val };
  }

  resetModel() {
    this.inputElection = {
      election_name: '',
      academic_yr: '',
      election_type: '',
      start_date: '',
      start_time: '',
      end_date: '',
      end_time: '',
      status: '',
    };
  }

  colorManipulation(status: string) {
    if (status === 'Election Done') {
      return 'grey';
    }
    if (status === 'Active') {
      return 'positive';
    }
    if (status === 'Inactive') {
      return 'red';
    }
  }
  labelManipulation(status: string) {
    if (status === 'Election Done') {
      return 'Election Done';
    }
    if (status === 'Active') {
      return 'Active';
    }
    if (status === 'Inactive') {
      return 'Inactive';
    }
  }
}
</script>

<style>
.my-sticky-header-table {
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
}
</style>
