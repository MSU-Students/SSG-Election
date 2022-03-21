<template>
  <q-page>
    <div>
      <q-splitter v-model="splitterModel" style="height: 760px">
        <template v-slot:before>
          <q-stepper v-model="step" header-nav vertical color="primary" animated>
            <q-step :name="1" title="Chief Justice" icon="settings" :done="step > 1">
              <q-tabs v-model="innerTab" horizontal class="text-teal">
                <div class="q-pa-md">
                  <q-radio v-model="shape" val="Anisah Dayaan">
                    <q-tab name="candidate1" label="Anisah Dayaan" />
                  </q-radio>

                  <q-radio v-model="shape" val="Ellon Musk">
                    <q-tab name="candidate2" label="Ellon Musk" />
                  </q-radio>

                  <q-radio v-model="shape" val="Thomas Edison">
                    <q-tab name="candidate3" label="Thomas Edison" />
                  </q-radio>
                </div>
              </q-tabs>
              <div class="q-px-sm q-pt-sm">
                Your selection is: <strong>{{ shape }}</strong>
              </div>
              <q-stepper-navigation>
                <q-btn @click="step = 2" color="primary" label="Continue" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Associate Justice"
              icon="create_new_folder"
              :done="step > 2"
            >
              <q-tabs v-model="innerTab" horizontal class="text-teal">
                <div class="q-pa-md">
                  <q-radio v-model="shape" val="Anisah Dayaan">
                    <q-tab name="candidate1" label="Anisah Dayaan" />
                  </q-radio>

                  <q-radio v-model="shape" val="Ellon Musk">
                    <q-tab name="candidate2" label="Ellon Musk" />
                  </q-radio>

                  <q-radio v-model="shape" val="Thomas Edison">
                    <q-tab name="candidate3" label="Thomas Edison" />
                  </q-radio>
                </div>
              </q-tabs>
              <div class="q-px-sm q-pt-sm">
                Your selection is: <strong>{{ shape }}</strong>
              </div>

              <q-stepper-navigation>
                <q-btn @click="step = 3" color="primary" label="Continue" />
                <q-btn
                  flat
                  @click="step = 1"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="3"
              title="Secretary Of the House"
              caption="Optional"
              icon="create_new_folder"
              :done="step > 3"
            >
              <q-tabs v-model="innerTab" horizontal class="text-teal">
                <div class="q-pa-md">
                  <q-radio v-model="shape" val="Anisah Dayaan">
                    <q-tab name="candidate1" label="Anisah Dayaan" />
                  </q-radio>

                  <q-radio v-model="shape" val="Ellon Musk">
                    <q-tab name="candidate2" label="Ellon Musk" />
                  </q-radio>

                  <q-radio v-model="shape" val="Thomas Edison">
                    <q-tab name="candidate3" label="Thomas Edison" />
                  </q-radio>
                </div>
              </q-tabs>
              <div class="q-px-sm q-pt-sm">
                Your selection is: <strong>{{ shape }}</strong>
              </div>

              <q-stepper-navigation>
                <q-btn @click="step = 4" color="primary" label="Continue" />
                <q-btn
                  flat
                  @click="step = 2"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="4"
              title="Internal Deputy Prime Minister"
              caption="Optional"
              icon="create_new_folder"
              :done="step > 4"
            >
              <q-tabs v-model="innerTab" horizontal class="text-teal">
                <div class="q-pa-md">
                  <q-radio v-model="shape" val="Anisah Dayaan">
                    <q-tab name="candidate1" label="Anisah Dayaan" />
                  </q-radio>

                  <q-radio v-model="shape" val="Ellon Musk">
                    <q-tab name="candidate2" label="Ellon Musk" />
                  </q-radio>

                  <q-radio v-model="shape" val="Thomas Edison">
                    <q-tab name="candidate3" label="Thomas Edison" />
                  </q-radio>
                </div>
              </q-tabs>
              <div class="q-px-sm q-pt-sm">
                Your selection is: <strong>{{ shape }}</strong>
              </div>

              <q-stepper-navigation>
                <q-btn @click="step = 5" color="primary" label="Continue" />
                <q-btn
                  flat
                  @click="step = 3"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step :name="5" title="External Deputy" icon="add_comment">
              <q-tabs v-model="innerTab" horizontal class="text-teal">
                <div class="q-pa-md">
                  <q-radio v-model="shape" val="Anisah Dayaan">
                    <q-tab name="candidate1" label="Anisah Dayaan" />
                  </q-radio>

                  <q-radio v-model="shape" val="Ellon Musk">
                    <q-tab name="candidate2" label="Ellon Musk" />
                  </q-radio>

                  <q-radio v-model="shape" val="Thomas Edison">
                    <q-tab name="candidate3" label="Thomas Edison" />
                  </q-radio>
                </div>
              </q-tabs>
              <div class="q-px-sm q-pt-sm">
                Your selection is: <strong>{{ shape }}</strong>
              </div>

              <q-stepper-navigation>
                <q-btn color="primary" label="Finish" />
                <q-btn
                  flat
                  @click="step = 4"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </template>

        <template v-slot:separator>
          <q-avatar
            color="primary"
            text-color="white"
            size="40px"
            icon="drag_indicator"
          />
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="innerTab"
            animated
            transition-prev="slide-down"
            transition-next="slide-up"
          >
            <q-tab-panel name="candidate1">
              <div class="text-h4 q-mb-md">Anisah Dayaan</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="candidate2">
              <div class="text-h4 q-mb-md">Ellon Musk</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="candidate3">
              <div class="text-h4 q-mb-md">Thomas Edison</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default {
  setup() {
    const options = ref(stringOptions);
    return {
      shape: ref("Anisah Dayaan"),
      innerTab: ref("innerMails"),
      splitterModel: ref(50), // start at 50%
      step: ref(1),
      model: ref(null),
      options,
    };
  },
};
</script>
