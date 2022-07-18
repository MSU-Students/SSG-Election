<template>
  <q-page>
    <div class="q-pl-lg">
      <div class="text-h5 q-pa-md text-bold">
        <q-icon name="touch_app" color="primary" style="font-size: 3rem" />
        Assign Officers
      </div>
    </div>
    <div class="q-pa-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          active-color="white"
          active-bg-color="primary"
          narrow-indicator
          align="justify"
        >
          <q-tab name="judiciary" label="Judiciary" />
          <q-tab name="parliament" label="Parliament" />
          <q-tab name="executive" label="Executive" />
          <q-tab name="commission" label="Constitutional Commission" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="judiciary">
            <!--J U D I C I A R Y-->
            <div class="q-pa-xs q-gutter-sm row">
              <div class="col-12 col-md">
                <q-card class="my-card q-pa-sm" style="max-width: 98vw">
                  <q-stepper
                    v-model="step"
                    header-nav
                    vertical
                    color="primary"
                    animated
                  >
                    <q-step
                      :name="1"
                      title="Chief Justice"
                      icon="person_add_alt"
                      :done="step > 1"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          :options="options"
                          option-label="school_id"
                          option-value="student_id"
                          color="primary"
                          map-options
                          emit-value
                          v-model="inputPosition.chiefJustice"
                          val="{{ chiefJustice }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="2"
                      title="Associate Justice"
                      icon="person_add_alt"
                      :done="step > 2"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="associateJustice"
                          val="{{ associateJustice }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step> </q-stepper
                ></q-card>
              </div>

              <div class="col-12 col-md">
                <q-card>
                  <br />
                  <q-toolbar-title class="text-weight-bold"
                    >OFFICERS ASSIGNED</q-toolbar-title
                  >

                  <div class="col q-pa-md text-caption">
                    Chief Justice: <strong>{{ chiefJustice }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    Associate Justice: <strong>{{ associateJustice }}</strong>
                  </div>
                  <q-separator inset />
                  <div class="row q-gutter-x-sm q-pa-sm">
                    <div class="col">
                      <q-btn
                        dense
                        class="full-width"
                        label="Assign Officers"
                        color="primary"
                        @click="assignOfficers"
                      />
                    </div>
                    <div class="col">
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="Reset"
                        @click="onResetClick"
                        class="full-width q-ml-md"
                      />
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="parliament">
            <!--P A R L I A M E N T-->
            <div class="q-pa-xs q-gutter-sm row">
              <div class="col-12 col-md">
                <q-card class="my-card q-pa-sm" style="max-width: 98vw">
                  <q-stepper
                    v-model="step"
                    header-nav
                    vertical
                    color="primary"
                    animated
                  >
                    <q-step
                      :name="3"
                      title="Speaker of the House"
                      icon="person_add_alt"
                      :done="step > 3"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="speakerHouse"
                          val="{{ speakerHouse }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step> </q-stepper
                ></q-card>
              </div>

              <div class="col-12 col-md">
                <q-card>
                  <br />
                  <q-toolbar-title class="text-weight-bold"
                    >OFFICERS ASSIGNED</q-toolbar-title
                  >

                  <div class="col q-pa-md text-caption">
                    Speaker of the House: <strong>{{ speakerHouse }}</strong>
                  </div>
                  <q-separator inset />
                  <div class="row q-gutter-x-sm q-pa-sm">
                    <div class="col">
                      <q-btn
                        dense
                        class="full-width"
                        label="Assign Officers"
                        color="primary"
                        @click="assignOfficers"
                      />
                    </div>
                    <div class="col">
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="Reset"
                        @click="onResetClick"
                        class="full-width q-ml-md"
                      />
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="executive">
            <!--E X E C U T I V E-->
            <div class="q-pa-xs q-gutter-sm row">
              <div class="col-12 col-md">
                <q-card class="my-card q-pa-sm" style="max-width: 98vw">
                  <q-stepper
                    v-model="step"
                    header-nav
                    vertical
                    color="primary"
                    animated
                  >
                    <q-step
                      :name="4"
                      title="Internal Deputy Prime Minister"
                      icon="person_add_alt"
                      :done="step > 4"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="internalDeputy"
                          val="{{ internalDeputy }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="5"
                      title="External Deputy Prime Minister"
                      icon="person_add_alt"
                      :done="step > 5"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="externalDeputy"
                          val="{{ externalDeputy }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="6"
                      title="Ministry on Health and Environment"
                      icon="person_add_alt"
                      :done="step > 6"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="ministerHealth"
                          val="{{ ministerHealth }}"
                        >
                          <!-- <q-tab name="representative" label="Anisah Dayaan" /> -->
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="7"
                      title="Ministry on Information and Communication"
                      icon="person_add_alt"
                      :done="step > 7"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="ministerInfo"
                          val="{{ ministerInfo }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="8"
                      title="Ministry on Planning and Project Management"
                      icon="person_add_alt"
                      :done="step > 8"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="ministerPlanning"
                          val="{{ ministerPlanning }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="9"
                      title="Ministry on Academic Affairs"
                      icon="person_add_alt"
                      :done="step > 9"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="ministerAcadAffairs"
                          val="{{ ministerAcadAffairs }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="10"
                      title="Ministry on Finance"
                      icon="person_add_alt"
                      :done="step > 10"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="ministerFinance"
                          val="{{ ministerFinance }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>
                  </q-stepper>
                </q-card>
              </div>

              <div class="col-12 col-md">
                <q-card>
                  <br />
                  <q-toolbar-title class="text-weight-bold"
                    >OFFICERS ASSIGNED</q-toolbar-title
                  >
                  <div class="col q-pa-md text-caption">
                    Internal Deputy Prime Minister:
                    <strong>{{ internalDeputy }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    External Deputy Prime Minister:
                    <strong>{{ externalDeputy }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    Ministry on Health and Environment:
                    <strong>{{ ministerHealth }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    Ministry on Information and Communication:
                    <strong>{{ ministerInfo }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    Ministry on Planning and Project Management:
                    <strong>{{ ministerPlanning }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    Ministry on Academic Affairs:
                    <strong>{{ ministerAcadAffairs }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    Ministry on Finance:
                    <strong>{{ ministerFinance }}</strong>
                  </div>
                  <q-separator inset />
                  <div class="row q-gutter-x-sm q-pa-sm">
                    <div class="col">
                      <q-btn
                        dense
                        class="full-width"
                        label="Assign Officers"
                        color="primary"
                        @click="assignOfficers"
                      />
                    </div>
                    <div class="col">
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="Reset"
                        @click="onResetClick"
                        class="full-width q-ml-md"
                      />
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="commission">
            <!--C O N S T I T U T I O N A L  C O M M I S S I O N-->
            <div class="q-pa-xs q-gutter-sm row">
              <div class="col-12 col-md">
                <q-card class="my-card q-pa-sm" style="max-width: 98vw">
                  <q-stepper
                    v-model="step"
                    header-nav
                    vertical
                    color="primary"
                    animated
                  >
                    <q-step
                      :name="11"
                      title="Commission on Audit"
                      icon="person_add_alt"
                      :done="step > 11"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="commissionAudit"
                          val="{{ commissionAudit }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="12"
                      title="Commission on Election"
                      icon="person_add_alt"
                      :done="step > 12"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="commissionElection"
                          val="{{ commissionElection }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step>

                    <q-step
                      :name="13"
                      title="Student's Right and Welfare Commission"
                      icon="person_add_alt"
                      :done="step > 13"
                    >
                      <q-tabs v-model="innerTab" horizontal class="text-teal">
                        <q-radio
                          v-model="getAllRepresentative"
                          val="{{ commissionWelfare }}"
                        >
                        </q-radio>
                      </q-tabs>
                    </q-step> </q-stepper
                ></q-card>
              </div>

              <div class="col-12 col-md">
                <q-card>
                  <br />
                  <q-toolbar-title class="text-weight-bold"
                    >OFFICERS ASSIGNED</q-toolbar-title
                  >

                  <div class="col q-pa-md text-caption">
                    Commission on Audit: <strong>{{ commissionAudit }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    Commission on Election:
                    <strong>{{ commissionElection }}</strong>
                  </div>
                  <div class="col q-pa-md text-caption">
                    Student's Right and Welfare Commission:
                    <strong>{{ commissionWelfare }}</strong>
                  </div>
                  <q-separator inset />
                  <div class="row q-gutter-x-sm q-pa-sm">
                    <div class="col">
                      <q-btn
                        dense
                        class="full-width"
                        label="Assign Officers"
                        color="primary"
                        @click="assignOfficers"
                      />
                    </div>
                    <div class="col">
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="Reset"
                        @click="onResetClick"
                        class="full-width q-ml-md"
                      />
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { PositionDto, RepresentativeDto } from 'src/services/rest-api';
import { mapActions, mapState } from 'vuex';

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'];

@Options({
  computed: {
    ...mapState('representative', ['allRepresentative']),
    ...mapState('position', ['allPosition']),
  },
  methods: {
    ...mapActions('position', ['addPosition', 'getAllPosition']),
    ...mapActions('representative', ['getAllRepresentative']),
  },
})
export default class ManageOfficer extends Vue {
  addPosition!: (payload: PositionDto) => Promise<void>;
  getAllPosition!: () => Promise<void>;
  getAllRepresentative!: () => Promise<void>;
  allRepresentative!: RepresentativeDto[];
  allPosition!: PositionDto[];

  async mounted() {
    await this.getAllRepresentative();
  }

  tab = 'judiciary';
  filter = '';

  columns = [
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
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.student?.course,
    },
    {
      name: 'college',
      align: 'center',
      label: 'College',
      field: (row: any) => row.student?.college,
    },
  ];

  options = stringOptions;
  chiefJustice = [];
  associateJustice = [];
  speakerHouse = [];
  internalDeputy = [];
  externalDeputy = [];
  ministerHealth = [];
  ministerInfo = [];
  ministerPlanning = [];
  ministerAcadAffairs = [];
  ministerFinance = [];
  commissionAudit = [];
  commissionElection = [];
  commissionWelfare = [];
  innerTab = 'innerMails';
  splitterModel = 50; // start at 50%
  step = 1;
  model = null;

  addNewPosition = false;

  onResetClick() {
    this.inputPosition = {
      chiefJustice: '',
      associateJustice: '',
      speakerHouse: '',
      internalDeputy: '',
      externalDeputy: '',
      ministerHealth: '',
      ministerInfo: '',
      ministerPlanning: '',
      ministerAcadAffairs: '',
      ministerFinance: '',
      commissionAudit: '',
      commissionElection: '',
      commissionWelfare: '',
    };
  }

  assignOfficers() {
    this.$q
      .dialog({
        message: 'Are you sure you want to assign these officers?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.addPosition(this.inputPosition);
        this.addNewPosition = false;
        this.resetModel();
        this.$q.notify({
          type: 'positive',
          message: 'Successful role assignment.',
        });
      });
  }

  inputPosition: PositionDto = {
    chiefJustice: '',
    associateJustice: '',
    speakerHouse: '',
    internalDeputy: '',
    externalDeputy: '',
    ministerHealth: '',
    ministerInfo: '',
    ministerPlanning: '',
    ministerAcadAffairs: '',
    ministerFinance: '',
    commissionAudit: '',
    commissionElection: '',
    commissionWelfare: '',
  };

  resetModel() {
    this.inputPosition = {
      chiefJustice: '',
      associateJustice: '',
      speakerHouse: '',
      internalDeputy: '',
      externalDeputy: '',
      ministerHealth: '',
      ministerInfo: '',
      ministerPlanning: '',
      ministerAcadAffairs: '',
      ministerFinance: '',
      commissionAudit: '',
      commissionElection: '',
      commissionWelfare: '',
    };
  }
}
</script>
