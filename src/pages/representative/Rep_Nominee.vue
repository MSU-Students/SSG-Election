<template>
  <q-page>
    <div class="q-pa-md">
      <!--separator-->
      <div class="row q-col-gutter-lg">
        <div class="col">
          <q-toolbar class="text-primary">
            <q-toolbar-title> List of Candidates </q-toolbar-title>
            <q-btn
              push
              color="white"
              text-color="primary"
              icon-right="touch_app"
              label="Click to vote"
              to="/R_Vote"
            />
          </q-toolbar>
        </div>
      </div>
      <!--separator-->

      <div class="q-gutter-y-md" style="width: 100%; max-width: 1500px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="prime" label="Prime Minister" />
            <q-tab name="secretary" label="Executive Secretary" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="prime">
              <div class="text-h6">Candidates for Prime Minister</div>
              <div class="row">
                <div
                  v-for="data in primePosition"
                  v-bind:key="data.representative_id"
                >
                  <div class="col-12 col-md q-pa-sm">
                    <q-card
                      class="my-card cursor-pointer"
                      style="width: 320px; height: 400px"
                    >
                      <div class="q-pa-md">
                        <div class="row">
                          <div class="col-4 q-gutter-sm">
                            <div class="text-center">
                              <q-avatar size="90px">
                                <q-img
                                  square
                                  v-if="data.student?.url"
                                  :src="`http://localhost:3000/media/${data.student?.url}`"
                                />
                                <q-img
                                  v-if="!data.student?.url"
                                  src="~assets/images/MSU.jpg"
                                  class="q-pb-sm"
                                />
                              </q-avatar>
                            </div>
                          </div>
                          <div class="col-8 q-pa-sm">
                            <div class="text-h6 text-bold">
                              {{ data.student?.first_name }}
                              {{ data.student?.middle_name }}
                              {{ data.student?.last_name }}
                            </div>
                            <div class="text-caption">
                              <strong>{{ data.student?.college }}</strong>
                            </div>
                            <div class="text-caption">
                              {{ data.student?.course }}
                            </div>
                            <div class="text-caption">
                              {{ data.student?.yr_admitted }}
                            </div>
                            <div class="text-caption">
                              Running for: <strong>{{ data.position }}</strong>
                            </div>
                          </div>
                        </div>
                        <q-separator />
                        <div class="row">
                          <div class="col">
                            <q-card-section class="text-italic">
                              "{{ data.platform }}"
                            </q-card-section>
                          </div>
                        </div>
                      </div>
                    </q-card>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="secretary">
              <div class="text-h6">Candidates for Executive Secretary</div>
              <div class="row">
                <div
                  v-for="data in secretaryPosition"
                  v-bind:key="data.representative_id"
                >
                  <div class="col-12 col-md q-pa-sm">
                    <q-card
                      class="my-card cursor-pointer"
                      style="width: 320px; height: 400px"
                    >
                      <div class="q-pa-md">
                        <div class="row">
                          <div class="col-4 q-gutter-sm">
                            <div class="text-center">
                              <q-avatar size="90px">
                                <q-img
                                  square
                                  v-if="data.student?.url"
                                  :src="`http://localhost:3000/media/${data.student?.url}`"
                                /><q-img
                                  v-if="!data.student?.url"
                                  src="~assets/images/MSU.jpg"
                                />
                              </q-avatar>
                            </div>
                          </div>
                          <div class="col-8 q-pa-sm">
                            <div class="text-h6 text-bold">
                              {{ data.student?.first_name }}
                              {{ data.student?.middle_name }}
                              {{ data.student?.last_name }}
                            </div>
                            <div class="text-caption">
                              <strong>{{ data.student?.college }}</strong>
                            </div>
                            <div class="text-caption">
                              {{ data.student?.course }}
                            </div>
                            <div class="text-caption">
                              {{ data.student?.yr_admitted }}
                            </div>
                            <div class="text-caption">
                              Running for: <strong>{{ data.position }}</strong>
                            </div>
                          </div>
                        </div>
                        <q-separator />
                        <div class="row">
                          <div class="col">
                            <q-card-section class="text-italic">
                              "{{ data.platform }}"
                            </q-card-section>
                          </div>
                        </div>
                      </div>
                    </q-card>
                  </div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  CandidateDto,
  StudentDto,
  ElectionDto,
  RepresentativeDto,
} from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState, mapGetters } from 'vuex';

@Options({
  computed: {
    ...mapState('representative', ['allRepresentative']),
    ...mapGetters('representative', ['primePosition', 'secretaryPosition']),
  },
  methods: {
    ...mapActions('representative', ['getAllRepresentative']),
  },
})
export default class ManageElection extends Vue {
  getAllRepresentative!: () => Promise<void>;
  allRepresentative!: RepresentativeDto[];
  primePosition!: RepresentativeDto[];
  secretaryPosition!: RepresentativeDto[];

  getAllStudent!: () => Promise<void>;
  allStudent!: StudentDto[];

  async mounted() {
    await this.getAllRepresentative();
  }

  filter = '';
  showDetails = false;
  addNewCandidate = false;
  editRowCandidate = false;
  dense = true;
  tab = 'prime';

  student_type = ['Regular', 'Representative'];
  fitModes = ['scale-down'];
}
</script>

<style>
.bg-img {
  background-color: #f3eee8;
}
.q-carousel {
  background-color: #f3eee8;
}
.my-sticky-header-table {
  height: 200px;
  width: 100%;
  max-width: 1300px;
}
.my-sticky-table {
  width: 250px;
}
</style>
