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
            <div class="q-pa-xs q-gutter-sm">
              <div class="">
                <q-card class="my-card q-pa-sm">
                  <q-stepper
                    v-model="step"
                    vertical
                    ref="stepper"
                    color="primary"
                    animated
                  >
                    <q-step
                      :name="1"
                      title="Chief Justice"
                      icon="person_add_alt"
                      :done="step > 1"
                    >
                      <div class="row q-gutter-xs">
                        <div class="col">
                          <q-select
                            :options="allRepresentative"
                            option-label="representative_id"
                            option-value="representative_id"
                            map-options
                            emit-value
                            v-model="inputPosition.chiefJustice"
                            dense
                            outlined
                            use-input
                            @update:model-value="onSelectChief($event)"
                            label="Select Representative Number"
                          >
                          </q-select>
                        </div>
                        <div class="col">
                          <q-input
                            dense
                            outlined
                            readonly
                            v-model="name"
                            label="Name"
                          />
                        </div>
                        <div class="col">
                          <q-select
                            readonly
                            disable
                            map-options
                            emit-value
                            v-model="name"
                            dense
                            outlined
                            label="College"
                          />
                        </div>
                      </div>
                      <div class="q-pt-md">
                        <q-btn @click="step = 2" color="primary" label="Next" />
                      </div>
                    </q-step>

                    <q-step
                      :name="2"
                      title="Associate Justice"
                      icon="person_add_alt"
                      :done="step > 2"
                    >
                      <div class="row q-gutter-xs">
                        <div class="col">
                          <q-select
                            :options="allRepresentative"
                            option-label="representative_id"
                            option-value="representative_id"
                            map-options
                            emit-value
                            v-model="inputPosition.associateJustice"
                            dense
                            outlined
                            use-input
                            @update:model-value="onSelectChief($event)"
                            label="Select Representative Number"
                          >
                          </q-select>
                        </div>
                        <div class="col">
                          <q-input
                            dense
                            outlined
                            readonly
                            v-model="name"
                            label="Name"
                          />
                        </div>
                        <div class="col">
                          <q-select
                            readonly
                            disable
                            map-options
                            emit-value
                            v-model="name"
                            dense
                            outlined
                            label="College"
                          />
                        </div>
                      </div>
                      <div class="q-gutter-x-sm q-pa-sm">
                        <q-btn
                          dense
                          label="Continue to Parliament"
                          color="primary"
                          @click="step = 3"
                        />
                        <q-btn
                          flat
                          dense
                          outline
                          color="primary"
                          label="back"
                          @click="step = 1"
                          class="q-ml-md"
                        />
                      </div>
                    </q-step> </q-stepper
                ></q-card>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="parliament">
            <!--P A R L I A M E N T-->
            <q-card class="my-card q-pa-sm">
              <q-stepper
                v-model="step"
                vertical
                ref="stepper"
                color="primary"
                animated
              >
                <q-step
                  :name="3"
                  title="Speaker of the House"
                  icon="person_add_alt"
                  :done="step > 3"
                >
                  <div class="row q-gutter-xs">
                    <div class="col">
                      <q-select
                        :options="allRepresentative"
                        option-label="representative_id"
                        option-value="representative_id"
                        map-options
                        emit-value
                        v-model="inputPosition.speakerHouse"
                        dense
                        outlined
                        use-input
                        @update:model-value="onSelectChief($event)"
                        label="Select Representative Number"
                      >
                      </q-select>
                    </div>
                    <div class="col">
                      <q-input
                        dense
                        outlined
                        readonly
                        v-model="name"
                        label="Name"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        readonly
                        disable
                        map-options
                        emit-value
                        v-model="name"
                        dense
                        outlined
                        label="College"
                      />
                    </div>
                  </div>
                  <div class="q-gutter-x-sm q-pa-sm">
                    <q-btn
                      dense
                      label="Continue to Executive"
                      color="primary"
                      @click="step = 4"
                    />
                    <q-btn
                      flat
                      dense
                      outline
                      color="primary"
                      label="Back to Judiciary"
                      @click="judiciaryDialog = true"
                      class="q-ml-md"
                    />
                    <q-dialog v-model="judiciaryDialog" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <span class="q-ml-sm"
                            >Your about to go back in assigning Judiciary
                            Officer. Do you want to Continue?</span
                          >
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="primary"
                            v-close-popup
                          />
                          <q-btn
                            flat
                            label="OK"
                            color="primary"
                            @click="step = 2"
                            v-close-popup
                          />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  </div>
                </q-step> </q-stepper
            ></q-card>
          </q-tab-panel>

          <q-tab-panel name="executive">
            <!--E X E C U T I V E-->
            <div class="q-pa-xs q-gutter-sm">
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
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.internalDeputy"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 5" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="Back to Parliament"
                        @click="parliamentDialog = true"
                        class="q-ml-md"
                      />

                      <q-dialog v-model="parliamentDialog" persistent>
                        <q-card>
                          <q-card-section class="row items-center">
                            <span class="q-ml-sm"
                              >Your about to go back in assigning Parliament
                              Officer. Do you want to Continue?</span
                            >
                          </q-card-section>

                          <q-card-actions align="right">
                            <q-btn
                              flat
                              label="Cancel"
                              color="primary"
                              v-close-popup
                            />
                            <q-btn
                              flat
                              label="OK"
                              color="primary"
                              @click="step = 3"
                              v-close-popup
                            />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                    </div>
                  </q-step>

                  <q-step
                    :name="5"
                    title="External Deputy Prime Minister"
                    icon="person_add_alt"
                    :done="step > 5"
                  >
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.externalDeputy"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 6" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="back"
                        @click="step = 4"
                        class="q-ml-md"
                      />
                    </div>
                  </q-step>

                  <q-step
                    :name="6"
                    title="Ministry on Health and Environment"
                    icon="person_add_alt"
                    :done="step > 6"
                  >
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerHealth"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 7" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="back"
                        @click="step = 5"
                        class="q-ml-md"
                      />
                    </div>
                  </q-step>

                  <q-step
                    :name="7"
                    title="Ministry on Information and Communication"
                    icon="person_add_alt"
                    :done="step > 7"
                  >
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerInfo"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 8" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="back"
                        @click="step = 6"
                        class="q-ml-md"
                      />
                    </div>
                  </q-step>

                  <q-step
                    :name="8"
                    title="Ministry on Planning and Project Management"
                    icon="person_add_alt"
                    :done="step > 8"
                  >
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerPlanning"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 9" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="back"
                        @click="step = 7"
                        class="q-ml-md"
                      />
                    </div>
                  </q-step>

                  <q-step
                    :name="9"
                    title="Ministry on Academic Affairs"
                    icon="person_add_alt"
                    :done="step > 9"
                  >
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerAcadAffairs"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 10" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="back"
                        @click="step = 8"
                        class="q-ml-md"
                      />
                    </div>
                  </q-step>

                  <q-step
                    :name="10"
                    title="Ministry on Finance"
                    icon="person_add_alt"
                    :done="step > 10"
                  >
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerFinance"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 11" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="back"
                        @click="step = 9"
                        class="q-ml-md"
                      />
                    </div>
                  </q-step>
                </q-stepper>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="commission">
            <!--C O N S T I T U T I O N A L  C O M M I S S I O N-->
            <div class="q-pa-xs q-gutter-sm">
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
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.commissionAudit"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 12" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="Back to Executive"
                        @click="executiveDialog = true"
                        class="q-ml-md"
                      />
                    </div>

                    <q-dialog v-model="executiveDialog" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <span class="q-ml-sm"
                            >Your about to go back in assigning Executive
                            Officer. Do you want to Continue?</span
                          >
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="primary"
                            v-close-popup
                          />
                          <q-btn
                            flat
                            label="OK"
                            color="primary"
                            @click="step = 10"
                            v-close-popup
                          />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  </q-step>

                  <q-step
                    :name="12"
                    title="Commission on Election"
                    icon="person_add_alt"
                    :done="step > 12"
                  >
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.commissionElection"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="step = 13" color="primary" label="Next" />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="back"
                        @click="step = 11"
                        class="q-ml-md"
                      />
                    </div>
                  </q-step>

                  <q-step
                    :name="13"
                    title="Student's Right and Welfare Commission"
                    icon="person_add_alt"
                    :done="step > 13"
                  >
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="representative_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.commissionWelfare"
                          dense
                          outlined
                          use-input
                          @update:model-value="onSelectChief($event)"
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="name"
                          label="Name"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          readonly
                          disable
                          map-options
                          emit-value
                          v-model="name"
                          dense
                          outlined
                          label="College"
                        />
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn
                        @click="assignOfficers()"
                        color="primary"
                        label="Next"
                      />
                      <q-btn
                        flat
                        dense
                        outline
                        color="primary"
                        label="back"
                        @click="step = 12"
                        class="q-ml-md"
                      />
                    </div>
                  </q-step> </q-stepper
              ></q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import {
  PositionDto,
  RepresentativeDto,
  StudentDto,
} from 'src/services/rest-api';
import { mapActions, mapState } from 'vuex';

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'];

@Options({
  computed: {
    ...mapState('representative', ['allRepresentative']),
    ...mapState('position', ['allPosition']),
    ...mapState('student', ['allStudent']),
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
  getAllStudent!: () => Promise<void>;
  allStudent!: StudentDto[];

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

  judiciaryDialog = false;
  executiveDialog = false;
  parliamentDialog = false;

  name = '';
  idNum = 0;

  onSelectChief(representative: RepresentativeDto) {
    // this.idNum = representative.student?.school_id;
    this.name =
      representative.first_name + '' + representative.student?.last_name;
  }

  inputPosition: any = {
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

<style>
.my-card {
  height: 500px;
  max-height: 100%;
}
.bg-img {
  background-color: #f3eee8;
}
</style>
