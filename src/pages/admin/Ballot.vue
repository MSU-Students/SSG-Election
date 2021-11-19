<template>
  <q-page>
    <div class="q-pl-lg">
      <div class="text-h5 q-pa-lg text-bold">
        <q-icon name="ballot" color="primary" style="font-size: 3rem" />
        Ballot Form
      </div>

      <!--Ballot Form-->
      <div class="row">
        <div class="col q-pr-md" style="width:100%, max-width: 1000px">
          <q-card class="ballot-form" @submit="onSubmit" @reset="onReset">
            <q-card-section>
              Election Name*
              <div class="q-pa-md">
                <q-input
                  filled
                  v-model="name"
                  :dense="dense"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Please type something']"
                />
              </div>
              <q-toggle v-model="accept" label="I accept the terms and agreement" />
            </q-card-section>

            <q-card-section>
              Instruction *
              <div class="q-pa-md" style="max-width: 850px">
                <q-input
                  v-model="text"
                  filled
                  type="textarea"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Please type something']"
                />
              </div>
              Start Time *
              <q-card-section>
                <div class="q-gutter-md row items-start">
                  <q-input
                    v-model="startdate"
                    :dense="dense"
                    filled
                    type="date"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Please enter the date']"
                    hint="Native date"
                  />
                  <q-input
                    v-model="starttime"
                    :dense="dense"
                    filled
                    type="time"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Please enter the time']"
                    hint="Native time"
                  />
                </div>
              </q-card-section>
              End Time *
              <q-card-section>
                <div class="q-gutter-md row items-start">
                  <q-input
                    v-model="enddate"
                    :dense="dense"
                    filled
                    type="date"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Please enter the date']"
                    hint="Native date"
                  />
                  <q-input
                    v-model="endtime"
                    :dense="dense"
                    filled
                    type="time"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Please enter the time']"
                    hint="Native time"
                  />
                </div>
              </q-card-section>
            </q-card-section>

            <!--Submit/reset botton-->
            <q-card-section>
              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!--card Form-->
        <div class="col-4 gt-sm">
          <div class="q-pt-xl">
            <div class="q-pr-md">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card style="width: 350px">
                  <q-card-section
                    :class="$q.dark.isActive ? 'red' : 'bg-red-10'"
                    class="text-white"
                    style="height: 120px"
                  >
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h5">Candidate</div>
                        <div
                          class="text-h4 text-bold text-amber-11"
                          @mouseenter="candidate = true"
                          @mouseleave="candidate = false"
                        >
                          18
                        </div>
                        <q-popup-proxy
                          v-model="candidate"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                        >
                          <q-banner>
                            <div class="text-h7">18 Candidates</div>
                            <div class="text-subtitle2 text-amber-10">
                              for Prime Minister and Secretary General
                            </div>
                          </q-banner>
                        </q-popup-proxy>
                      </div>
                      <div class="col-2">
                        <q-icon size="65px" name="person" />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>

          <div class="q-pt-md">
            <div class="q-pr-md">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card style="width: 350px">
                  <q-card-section
                    :class="$q.dark.isActive ? 'amber' : 'bg-amber-13'"
                    class="text-white"
                    style="height: 100px"
                  >
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h5">Voters</div>
                        <div
                          class="text-h4 text-bold text-amber-1"
                          @mouseenter="ballot = true"
                          @mouseleave="ballot = false"
                        >
                          732
                        </div>
                        <q-popup-proxy
                          v-model="ballot"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                        >
                          <q-banner>
                            <div class="text-h7">
                              Student Voters:
                              <div class="text-subtitle2 text-amber-10">500</div>
                            </div>
                            <div class="text-h7">
                              Representative Voters:
                              <div class="text-subtitle2 text-amber-10">32</div>
                            </div>
                          </q-banner>
                        </q-popup-proxy>
                      </div>
                      <div class="col-2">
                        <q-icon size="65px" name="people" />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>

          <div class="q-pt-md">
            <div class="q-pr-md">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card style="width: 350px">
                  <q-card-section
                    :class="$q.dark.isActive ? 'orange' : 'bg-deep-orange-8'"
                    class="text-white"
                    style="height: 120px"
                  >
                    <div class="row">
                      <div class="col-10">
                        <div class="text-h5">Ballot</div>
                        <div
                          class="text-h4 text-bold text-amber-11"
                          @mouseenter="ballot = true"
                          @mouseleave="ballot = false"
                        >
                          1
                        </div>
                        <q-popup-proxy
                          v-model="ballot"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                        >
                          <q-banner>
                            <div class="text-h7">SSG Election 2021</div>
                            <div class="text-subtitle2 text-amber-10">
                              Date Create: 9/18/2021
                            </div>
                          </q-banner>
                        </q-popup-proxy>
                      </div>
                      <div class="col-2">
                        <q-icon size="65px" name="ballot" />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { Vue, Options } from "vue-class-component";

@Options({})
export default class Ballot extends Vue {
  //$q = useQuasar();

  name = null;
  instructions = null;
  accept = false;
  candidate = false;
  ballot = false;
  dense = true;
  text = "";
  starttime = "";
  startdate = "";
  endtime = "";
  enddate = "";

  onSubmit() {
    if (this.accept !== true) {
      this.$q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the terms and agreement first",
      });
    } else {
      this.$q.notify({
        color: "amber-13",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });
    }
  }

  onReset() {
    this.name = null;
    this.instructions = null;
    this.accept = false;
  }
}
</script>
