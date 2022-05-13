<template>
  <q-page>
    <div class="q-pa-sm">
      <!--separator-->
      <div class="row q-col-gutter-lg">
        <div class="col">
          <q-toolbar>
            <q-toolbar-title class="text-overline text-weight-bold"
              >Vote for Representatives</q-toolbar-title
            >
          </q-toolbar>
        </div>
      </div>
      <!--separator-->
      <div class="row q-gutter-sm">
        <div class="col-12 col-md">
          <q-card class="my-card q-pa-sm" style="max-width: 98vw">
            <div class="row">
              <div v-for="data in allCandidate" v-bind:key="data.candidate_id">
                <div class="col-12 col-md q-pa-xs">
                  <q-card class="cursor-pointer" style="width: 290px; max-width: 100vw">
                    <div class="q-pa-md">
                      <div class="row">
                        <div class="col-4 q-gutter-sm">
                          <div class="text-center">
                            <q-avatar size="70px">
                              <q-img
                                square
                                :src="`http://localhost:3000/media/${data.student?.url}`"
                                v-for="mode in fitModes"
                                :key="mode"
                                style="max-width: 300px; height: 70px"
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
                          <div class="text-body text-bold text-uppercase">
                            {{ data.student?.first_name }}
                            {{ data.student?.last_name }}
                          </div>
                          <div class="text-caption">
                            {{ data.student?.course }}
                          </div>
                          <div class="text-caption">
                            {{ data.student?.yr_admitted }}
                          </div>
                        </div>
                      </div>
                      <q-separator inset dark /><br />
                      <div class="row">
                        <div class="col">
                          <q-card-section class="text-overline">
                            <q-btn
                              unelevated
                              square
                              dense
                              push
                              color="primary"
                              label="Vote"
                              class="full-width absolute-bottom"
                              @click="onaddBallot(data)"
                            />
                          </q-card-section>
                        </div>
                      </div>
                    </div>
                  </q-card>
                </div>
              </div>
            </div>
          </q-card>
          <q-separator vertical />
        </div>

        <div class="col-12 col-md">
          <q-card>
            <q-card-actions>
              <q-table
                :rows="allTempRep"
                :columns="columns"
                class="my-sticky-header-table"
                :rows-per-page-options="[0]"
                row-key="temp_tally_id"
                hide-bottom
              />
            </q-card-actions>
            <div class="row q-gutter-x-sm q-pa-sm">
              <div class="col">
                <q-btn
                  unelevated
                  square
                  dense
                  push
                  color="positive"
                  class="full-width"
                  label="Submit Vote"
                  icon="check"
                  @click="submitVote()"
                />
              </div>
              <div class="col">
                <q-btn
                  unelevated
                  square
                  dense
                  outline
                  class="text-primary full-width"
                  label="Clear Selection"
                  @click="clearSelection"
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { CandidateDto, VoteRepDto } from "src/services/rest-api";
import { TempRep } from "src/store/tempRep/state";
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  computed: {
    ...mapState("candidate", ["allCandidate"]),
    ...mapState("voteRep", ["allVoteRep"]),
    ...mapState("tempRep", ["allTempRep"]),
  },
  methods: {
    ...mapActions("candidate", ["getAllCandidate"]),
    ...mapActions("voteRep", ["addVoteRep", "getAllvoteRep"]),
    ...mapActions("tempRep", ["addTempRep", "deleteTempRep", "clear"]),
  },
})
export default class ManageElection extends Vue {
  addVoteRep!: (payload: VoteRepDto) => Promise<void>;
  allVoteRep!: VoteRepDto[];
  getAllCandidate!: () => Promise<void>;
  allCandidate!: CandidateDto[];
  allTempRep!: TempRep[];
  clear!: () => Promise<void>;
  addTempRep!: (payload: TempRep) => Promise<void>;
  async mounted() {
    await this.getAllCandidate();
  }

  filter = "";
  showDetails = false;
  addNewCandidate = false;
  editRowCandidate = false;
  dense = true;

  student_type = ["Regular", "Representative"];
  fitModes = ["scale-down"];

  columns = [
    {
      name: "name",
      required: true,
      label: "Name",
      align: "left",
      field: (row: TempRep) =>
        row.last_name + ", " + row.first_name + " " + row.middle_name,
    },
    {
      name: "level",
      align: "center",
      label: "Year Admitted",
      field: (row: any) => row.yr_admitted,
    },
    {
      name: "course",
      align: "center",
      label: "Course",
      field: (row: any) => row.course,
    },
  ];
  selected = [];
  addNewVoteRep = false;

  clearSelection() {
    this.clear();
  }

  async onaddBallot(data: CandidateDto) {
    if (data.student) {
      await this.addTempRep({
        ...data.student,
        temp_tally_id: 0,
      } as TempRep);
    }
  }

  async submitVote() {
    this.$q
      .dialog({
        message: "Submit vote?",
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        //copy from this.allTempRep => this.inputVoteRep
        await this.addVoteRep(this.inputVoteRep);
        this.addNewVoteRep = false;
        this.resetModel();
        this.$q.notify({
          type: "positive",
          message: "You have successfully casted your voted.",
        });
      });
  }

  inputVoteRep: VoteRepDto = {
    rep1_name: "",
    rep2_name: "",
    academic_yr: "",
    date: "",
    time: "",
  };
  resetModel() {
    this.inputVoteRep = {
      rep1_name: "",
      rep2_name: "",
      academic_yr: "",
      date: "",
      time: "",
    };
  }
}
</script>

<style>
.my-card {
  height: 100%;
  max-height: 900px;
}
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
