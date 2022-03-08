<template>
  <q-page>
    <div class="q-pl-lg">
      <div class="text-h5 q-pa-lg text-bold">
        <q-icon name="ballot" color="primary" style="font-size: 3rem" />
        Election Page
      </div>
    </div>
    <q-separator />

    <!--separator-->
    <div class="row q-col-gutter-lg">
      <div class="col">
        <q-toolbar>
          <q-toolbar-title class="text-overline text-weight-bold">
            Recent Elections
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </div>
    <!--separator-->
    <!-----------Recent Election Ballot-------------->
    <div class="row q-pt-md q-pa-md">
      <q-table
        class="my-sticky-header-table"
        title="Recent Election"
        :grid="$q.screen.xs"
        :rows="allElection"
        :columns="columns"
        row-key="name"
        hide-bottom
        ><template v-slot:top-right>
          <q-btn
            color="primary"
            icon-right="add"
            label="Add new election"
            no-caps
            to="/Ballot"
            @click="addNewElection = true"
          />

          <q-dialog v-model="addNewElection" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="row">
                <div class="text-h6">Create new Election</div>
                <q-space />
                <q-btn
                  flat
                  round
                  dense
                  icon="close"
                  v-close-popup
                  @click="resetModel()"
                />
              </q-card-section>

              <q-card-section>
                <div>
                  <div class="row">
                    <div class="col-12 col-md-3">Election Name *</div>
                    <div class="col-12 col-md-9">
                      <q-input
                        filled
                        v-model="inputElection.electionName"
                        :dense="dense"
                        lazy-rules
                        :rules="[
                          (val) => (val && val.length > 0) || 'Please type something',
                        ]"
                      />
                    </div>
                    <div>
                      <q-toggle
                        v-model="inputElection.electionAgreement"
                        label="I accept the terms and agreement"
                      />
                    </div>
                  </div>
                  <div class="row q-pt-md">
                    <div class="col-12 col-md-3">instructions *</div>
                    <div class="col-12 col-md-9">
                      <q-input
                        v-model="inputElection.Instruction"
                        filled
                        type="textarea"
                        lazy-rules
                        :rules="[
                          (val) => (val && val.length > 0) || 'Please type something',
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-pt-md">
                    <div class="col-12 col-md-3">Start Time *</div>
                    <div class="q-gutter-lg q-py-sm row">
                      <div class="col-5">
                        <q-input
                          v-model="inputElection.startdate"
                          :dense="dense"
                          filled
                          type="date"
                          lazy-rules
                          :rules="[
                            (val) => (val && val.length > 0) || 'Please enter the date',
                          ]"
                          hint="Native date"
                        />
                      </div>
                      <div class="col-5">
                        <q-input
                          v-model="inputElection.starttime"
                          :dense="dense"
                          filled
                          type="time"
                          lazy-rules
                          :rules="[
                            (val) => (val && val.length > 0) || 'Please enter the time',
                          ]"
                          hint="Native time"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row q-pt-md">
                    <div class="col-3">End Time *</div>
                    <div class="q-gutter-lg q-py-sm row">
                      <div class="col-5">
                        <q-input
                          v-model="inputElection.enddate"
                          :dense="dense"
                          filled
                          type="date"
                          lazy-rules
                          :rules="[
                            (val) => (val && val.length > 0) || 'Please enter the date',
                          ]"
                          hint="Native date"
                        />
                      </div>
                      <div class="col-5">
                        <q-input
                          v-model="inputElection.endtime"
                          :dense="dense"
                          filled
                          type="time"
                          lazy-rules
                          :rules="[
                            (val) => (val && val.length > 0) || 'Please enter the time',
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
                            label="Save"
                            color="primary"
                            @click="onaddElection"
                          />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
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
                <q-dialog v-model="editRowElection" persistent>
                  <q-card
                    style="width: 800px; max-width: 100vw"
                    class="q-pa-md"
                  >
                    <q-card-section>
                <div>
                  <div class="row">
                    <div class="col-12 col-md-3">Election Name *</div>
                    <div class="col-12 col-md-9">
                      <q-input
                        filled
                        v-model="inputElection.electionName"
                        :dense="dense"
                        lazy-rules
                        :rules="[
                          (val) => (val && val.length > 0) || 'Please type something',
                        ]"
                      />
                    </div>
                    <div>
                      <q-toggle
                        v-model="inputElection.electionAgreement"
                        label="I accept the terms and agreement"
                      />
                    </div>
                  </div>
                  <div class="row q-pt-md">
                    <div class="col-12 col-md-3">instructions *</div>
                    <div class="col-12 col-md-9">
                      <q-input
                        v-model="inputElection.Instruction"
                        filled
                        type="textarea"
                        lazy-rules
                        :rules="[
                          (val) => (val && val.length > 0) || 'Please type something',
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-pt-md">
                    <div class="col-12 col-md-3">Start Time *</div>
                    <div class="q-gutter-lg q-py-sm row">
                      <div class="col-5">
                        <q-input
                          v-model="inputElection.startdate"
                          :dense="dense"
                          filled
                          type="date"
                          lazy-rules
                          :rules="[
                            (val) => (val && val.length > 0) || 'Please enter the date',
                          ]"
                          hint="Native date"
                        />
                      </div>
                      <div class="col-5">
                        <q-input
                          v-model="inputElection.starttime"
                          :dense="dense"
                          filled
                          type="time"
                          lazy-rules
                          :rules="[
                            (val) => (val && val.length > 0) || 'Please enter the time',
                          ]"
                          hint="Native time"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row q-pt-md">
                    <div class="col-3">End Time *</div>
                    <div class="q-gutter-lg q-py-sm row">
                      <div class="col-5">
                        <q-input
                          v-model="inputElection.enddate"
                          :dense="dense"
                          filled
                          type="date"
                          lazy-rules
                          :rules="[
                            (val) => (val && val.length > 0) || 'Please enter the date',
                          ]"
                          hint="Native date"
                        />
                      </div>
                      <div class="col-5">
                        <q-input
                          v-model="inputElection.endtime"
                          :dense="dense"
                          filled
                          type="time"
                          lazy-rules
                          :rules="[
                            (val) => (val && val.length > 0) || 'Please enter the time',
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
                            label="Save"
                            color="primary"
                            @click="onaddElection"
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
                />
              </div>
            </q-td>
          </template>
        
      </q-table>
    </div>
    <!----------------------------------------------->
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { ElectionInfo } from "src/store/election/state";
import { mapActions, mapState } from "vuex";
@Options({
  computed: {
    ...mapState("election", ["allElection"]),
  },
  methods: {
    ...mapActions("election", ['addElection',
      'editElection',
      'deleteElection',]),
  },
})
export default class ManageElection extends Vue {
  addElection!: (payload: ElectionInfo) => Promise<void>;
  editElection!: (payload: ElectionInfo) => Promise<void>;
  deleteElection!: (payload: ElectionInfo) => Promise<void>;
  allElection!: ElectionInfo[];

  columns = [
    { name: "action", align: "center", field: "action" },
    {
      name: "name",
      required: true,
      label: "Election Name",
      align: "left",
      field: (row: ElectionInfo) => row.electionName,
      format: (val: string) => `${val}`,
    },

    {
      name: "start",
      align: "center",
      label: "Election Start",
      field: "start",
    },
    {
      name: "end",
      align: "center",
      label: "Election End",
      field: "end",
    },
  ];
  addNewElection = false;
  editRowElection = false;
  dense = true;

  inputElection: ElectionInfo = {
    electionID: "",
    electionName: "",
    electionAgreement: "",
    Instruction: "",
    startdate: "",
    starttime: "",
    enddate: "",
    endtime: "",
  };

  async onaddElection() {
    await this.addElection(this.inputElection);
    this.addNewElection = false;
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "An Election is succcessfully Added.",
    });
  }

  
  async onEditInventory() {
    await this.editElection(this.inputElection);
    this.editRowElection = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificElection(val: ElectionInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteElection(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: ElectionInfo) {
    this.editRowElection = true;
    this.inputElection = { ...val };
  }

  resetModel() {
    this.inputElection = {
      electionID: "",
      electionName: "",
      electionAgreement: "",
      Instruction: "",
      startdate: "",
      starttime: "",
      enddate: "",
      endtime: "",
    };
  }
}
</script>

<style>
.my-sticky-header-table {
  height: 100%;
  max-height: 700px;
  width: 100%;
  max-width: 1300px;
}
</style>
