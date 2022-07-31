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
                            option-label="school_id"
                            option-value="representative_id"
                            map-options
                            emit-value
                            v-model="inputPosition.chiefJustice"
                            dense
                            outlined
                            use-input
                            label="Select Representative Number"
                          >
                          </q-select>
                        </div>
                        <div class="col">
                          <q-select
                            :options="allRepresentative"
                            option-label="first_name"
                            option-value="representative_id"
                            v-model="inputPosition.chiefJustice"
                            disable
                            readonly
                            map-options
                            emit-value
                            dense
                            outlined
                            use-input
                            label="First Name"
                          >
                          </q-select>
                        </div>
                        <div class="col">
                          <q-select
                            :options="allRepresentative"
                            option-label="last_name"
                            option-value="representative_id"
                            v-model="inputPosition.chiefJustice"
                            disable
                            readonly
                            map-options
                            emit-value
                            dense
                            outlined
                            use-input
                            label="Last Name"
                          >
                          </q-select>
                        </div>
                      </div>
                      <div class="q-pt-md">
                        <q-btn
                          @click="addChiefJustice()"
                          color="primary"
                          label="Next"
                        />
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
                            option-label="school_id"
                            option-value="representative_id"
                            map-options
                            emit-value
                            v-model="inputPosition.associateJustice"
                            dense
                            outlined
                            use-input
                            label="Select Representative Number"
                          >
                          </q-select>
                        </div>
                        <div class="col">
                          <q-select
                            :options="allRepresentative"
                            option-label="first_name"
                            option-value="representative_id"
                            v-model="inputPosition.associateJustice"
                            disable
                            readonly
                            map-options
                            emit-value
                            dense
                            outlined
                            use-input
                            label="First Name"
                          >
                          </q-select>
                        </div>
                        <div class="col">
                          <q-select
                            :options="allRepresentative"
                            option-label="last_name"
                            option-value="representative_id"
                            v-model="inputPosition.associateJustice"
                            disable
                            readonly
                            map-options
                            emit-value
                            dense
                            outlined
                            use-input
                            label="Last Name"
                          >
                          </q-select>
                        </div>
                      </div>
                      <div class="q-gutter-x-sm q-pa-sm">
                        <q-btn
                          dense
                          label="Continue to Parliament"
                          color="primary"
                          @click="addAssociateJustice()"
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
                        option-label="school_id"
                        option-value="representative_id"
                        map-options
                        emit-value
                        v-model="inputPosition.speakerHouse"
                        dense
                        outlined
                        use-input
                        label="Select Representative Number"
                      >
                      </q-select>
                    </div>
                    <div class="col">
                      <q-select
                        :options="allRepresentative"
                        option-label="first_name"
                        option-value="representative_id"
                        v-model="inputPosition.speakerHouse"
                        disable
                        readonly
                        map-options
                        emit-value
                        dense
                        outlined
                        use-input
                        label="First Name"
                      >
                      </q-select>
                    </div>
                    <div class="col">
                      <q-select
                        :options="allRepresentative"
                        option-label="last_name"
                        option-value="representative_id"
                        v-model="inputPosition.speakerHouse"
                        disable
                        readonly
                        map-options
                        emit-value
                        dense
                        outlined
                        use-input
                        label="Last Name"
                      >
                      </q-select>
                    </div>
                  </div>
                  <div class="q-gutter-x-sm q-pa-sm">
                    <q-btn
                      dense
                      label="Continue to Executive"
                      color="primary"
                      @click="addSpeaker()"
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.internalDeputy"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.internalDeputy"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.internalDeputy"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addInternalDeputy()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.externalDeputy"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.externalDeputy"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.externalDeputy"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addExternalDeputy()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerHealth"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerHealth"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerHealth"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addHealth()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerInfo"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerInfo"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerInfo"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addInfo()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerPlanning"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerPlanning"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerPlanning"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addPlanning()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerAcadAffairs"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerAcadAffairs"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerAcadAffairs"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addAcadAffair()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.ministerFinance"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerFinance"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.ministerFinance"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addFinance()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.commissionAudit"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.commissionAudit"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.commissionAudit"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addAudit()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.commissionElection"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.commissionElection"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.commissionElection"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
                      </div>
                    </div>
                    <div class="q-pt-md">
                      <q-btn @click="addElection()" color="primary" label="Next" />
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
                          option-label="school_id"
                          option-value="representative_id"
                          map-options
                          emit-value
                          v-model="inputPosition.commissionWelfare"
                          dense
                          outlined
                          use-input
                          label="Select Representative Number"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="first_name"
                          option-value="representative_id"
                          v-model="inputPosition.commissionWelfare"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="First Name"
                        >
                        </q-select>
                      </div>
                      <div class="col">
                        <q-select
                          :options="allRepresentative"
                          option-label="last_name"
                          option-value="representative_id"
                          v-model="inputPosition.commissionWelfare"
                          disable
                          readonly
                          map-options
                          emit-value
                          dense
                          outlined
                          use-input
                          label="Last Name"
                        >
                        </q-select>
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
  SsgMemberDto,
  StudentDto,
} from 'src/services/rest-api';
import { mapActions, mapState } from 'vuex';
import { date } from 'quasar';
const timeStamp = Date.now();
const currentDate = date.formatDate(timeStamp, 'YYYY-MM-DD:HH:mm');

@Options({
  computed: {
    ...mapState('representative', ['allRepresentative']),
    ...mapState('position', ['allPosition']),
    ...mapState('student', ['allStudent']),
    ...mapState('ssgMember', ['allSsgMember']),
  },
  methods: {
    ...mapActions('position', ['addPosition', 'getAllPosition']),
    ...mapActions('representative', ['getAllRepresentative']),
    ...mapActions('ssgMember', ['addSsgMember', 'getAllSsgMember']),
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

  getAllSsgMember!: () => Promise<void>;
  addSsgMember!: (payload: SsgMemberDto) => Promise<void>;

  async mounted() {
    await this.getAllRepresentative();
    await this.getAllSsgMember();
    await this.getAllPosition();
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
    this.inputSsg.student = this.inputPosition.commissionWelfare;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: "Student's Right and Welfare Commission",
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;

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
        await this.$router.replace('/P_Structure');
        this.$q.notify({
          type: 'positive',
          message: 'Successful role assignment.',
        });
      });
  }

  //.............................................................................
  addNewSsgMember = false;
  async addChiefJustice() {
    if (this.inputPosition.chiefJustice) this.step = 2;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Chief Justice',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }
  async addAssociateJustice() {
    this.step = 3;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Associate Justice',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }
  async addSpeaker() {
    this.step = 4;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Speaker of the House',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }

  async addInternalDeputy() {
    this.step = 5;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Internal Deputy of Prime Minister',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }

  async addExternalDeputy() {
    this.step = 6;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'External Deputy of Prime Minister',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }

  async addHealth() {
    this.step = 7;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Ministry of Health and Environment',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }

  async addInfo() {
    this.step = 8;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Ministry of Information and Communication',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }

  async addFinance() {
    this.step = 8;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Ministry of Finance',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }
  async addPlanning() {
    this.step = 8;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Ministry of Planning and Project Management',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }
  async addAcadAffair() {
    this.step = 8;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Ministry of Academic Affair',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }
  async addAudit() {
    this.step = 8;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Commission on Audit',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }
  async addElection() {
    this.step = 8;
    this.inputSsg.student = this.inputPosition.chiefJustice;
    this.addSsgMember({
      ...this.inputSsg,
      student: this.inputSsg.student,
      position: 'Commission on Election',
      academic_yr: currentDate,
    });
    this.addNewSsgMember = false;
  }

  //==================================================================================================
  judiciaryDialog = false;
  executiveDialog = false;
  parliamentDialog = false;

  inputSsg: any = {
    position: '',
    academic_yr: '',
    date: currentDate,
  };
  resetSsgModel() {
    this.inputSsg = {
      date: currentDate,
    };
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
