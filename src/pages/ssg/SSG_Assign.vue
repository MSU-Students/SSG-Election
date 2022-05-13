<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-pl-xl">
        <div class="text-h5 q-pb-md text-bold">
          <q-icon name="assignment_ind" color="primary" style="font-size: 3rem" />
          Assign Officers
        </div>
      </div>
    </div>
    <!--separator-->
    <div>
      <q-splitter v-model="splitterModel" style="height: 100%">
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
                <q-btn @click="step = 2" color="primary" label="Assign" />
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
                <q-btn @click="step = 3" color="primary" label="Assign" />
                <!-- <q-btn
                  flat
                  @click="step = 1"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                /> -->
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="3"
              title="Speaker of the House"
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
                <q-btn @click="step = 4" color="primary" label="Assign" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="4"
              title="Internal Deputy Prime Minister"
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
                <q-btn @click="step = 5" color="primary" label="Assign" />
              </q-stepper-navigation>
            </q-step>

            <q-step :name="5" title="External Deputy" icon="create_new_folder">
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
                <q-btn color="primary" label="Assign" />
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
              <p>I am Anisah.</p>
            </q-tab-panel>

            <q-tab-panel name="candidate2">
              <div class="text-h4 q-mb-md">Ellon Musk</div>
              <p>I am Musk.</p>
            </q-tab-panel>

            <q-tab-panel name="candidate3">
              <div class="text-h4 q-mb-md">Thomas Edison</div>
              <p>I am Edison.</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { SsgMemberDto } from 'src/services/rest-api';
import { mapActions, mapState } from 'vuex';

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'];

@Options({
  computed: {
    ...mapState('ssgmember', ['allSsgMember']),
  },
  methods: {
    ...mapActions('ssgmember', [
      'addSsgMember',
      'editSsgMember',
      'deleteSsgMember',
      'getAllSsgMember',
    ]),
  },
})
export default class ManageSsgMember extends Vue {
  addSsgMember!: (payload: SsgMemberDto) => Promise<void>;
  editSsgMember!: (payload: SsgMemberDto) => Promise<void>;
  deleteSsgMember!: (payload: SsgMemberDto) => Promise<void>;
  getAllSsgMember!: () => Promise<void>;
  allSsgMember!: SsgMemberDto[];

  async mounted() {
    await this.getAllSsgMember();
  }

  options = stringOptions;
  shape = 'Anisah Dayaan';
  innerTab = 'innerMails';
  splitterModel = 50; // start at 50%
  step = 1;
  model = null;
}
</script>
