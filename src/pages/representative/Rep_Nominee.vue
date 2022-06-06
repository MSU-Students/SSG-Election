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
              to="/V_Vote"
            />
          </q-toolbar>
        </div>
      </div>
      <!--separator-->

      <div class="row">
        <div v-for="data in allRepresentative" v-bind:key="data.representative_id">
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
                          :src="`http://localhost:3000/media/${data.candidate?.student?.url}`"
                          v-for="mode in fitModes"
                          :key="mode"
                          style="max-width: 200px; height: 70px"
                          :fit="mode"
                          font-size="82px"
                          color="teal"
                          text-color="white"
                          icon="account_circle"
                        />
                      </q-avatar>
                    </div>
                  </div>
                  <div class="col-8 q-pa-sm">
                    <div class="text-h6 text-bold">
                      {{ data.candidate?.student?.first_name }}
                      {{ data.candidate?.student?.middle_name }}
                      {{ data.candidate?.student?.last_name }}
                    </div>
                    <div class="text-caption">
                      <strong>{{ data.student?.college }}</strong>
                    </div>
                    <div class="text-caption">
                      {{ data.candidate?.student?.course }}
                    </div>
                    <div class="text-caption">
                      {{ data.candidate?.student?.yr_admitted }}
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
  },
  methods: {
    ...mapActions('representative', ['getAllRepresentative']),
  },
})
export default class ManageElection extends Vue {
  getAllRepresentative!: () => Promise<void>;
  allRepresentative!: RepresentativeDto[];

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
