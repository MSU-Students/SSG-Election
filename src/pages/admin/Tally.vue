<template>
  <div class="row q-pa-md q-pl-md">
    <div class="col-12 col-xl q-pa-md">
      <q-splitter v-model="splitterModel">
        <template v-slot:before>
          <div class="row">
            <div class="q-pt-sm q-mt-md text-overline text-bold">Select Candidates</div>
          </div>
          <div class="row">
            <div class="text-h6 text-weight-bold col q-pa-md">
              <q-card>
                <q-card-actions class="bg-deep-orange-1">
                  <div class="text-bold text-subtitle2 q-pl-md">
                    <q-icon name="people" color="primary" />
                    Prime Minister
                  </div>
                </q-card-actions>
                <q-table
                  :grid="$q.screen.xs"
                  :rows="rows"
                  :columns="columns"
                  row-key="name"
                />
              </q-card>
            </div>
          </div>

          <div class="row">
            <div class="text-h6 text-weight-bold col col-md q-pa-md">
              <q-card>
                <q-card-actions class="bg-deep-orange-1">
                  <div class="text-bold text-subtitle2 q-pl-md">
                    <q-icon name="people" color="primary" />
                    Secretary General
                  </div>
                </q-card-actions>
                <q-separator />
                <q-table
                  :grid="$q.screen.xs"
                  :rows="rows"
                  :columns="columns"
                  row-key="name"
                />
              </q-card>
            </div>
          </div>
        </template>

        <template v-slot:after>
          <div class="row">
            <div class="q-pt-sm q-mt-md text-overline text-bold q-pa-md q-pl-md-xs">
              Graph
            </div>
          </div>
          <div class="row">
            <div class="text-h6 text-weight-bold col col-md q-pa-md">
              <q-card>
                <div id="prime">
                  <q-card-actions class="bg-deep-orange-1">
                    <div class="text-bold text-subtitle2 q-pl-md">
                      <q-icon name="people" color="primary" />
                      Prime Minister - Result as of <strong>Date Mentioned</strong>
                    </div>
                  </q-card-actions>
                  <q-separator />
                  <div>
                    <canvas class="q-pl-md" id="myChart"></canvas>
                  </div>
                </div>
              </q-card>
            </div>
          </div>

          <div class="row">
            <div class="text-h6 text-weight-bold col col-md q-pa-md">
              <q-card>
                <div id="secretary">
                  <q-card-actions class="bg-deep-orange-1">
                    <div class="text-bold text-subtitle2 q-pl-md">
                      <q-icon name="people" color="primary" />
                      Secretary General - Result as of <strong>Date Mentioned</strong>
                    </div>
                  </q-card-actions>
                  <q-separator />
                  <div>
                    <canvas class="q-pl-md" id="myChart"></canvas>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </template>
      </q-splitter>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "Department",
    align: "center",
    label: "Department",
    field: "department",
    sortable: true,
  },
  {
    name: "Total Votes",
    align: "right",
    label: "Total Votes",
    field: "total_votes",
    sortable: true,
  },
];

const rows = [
  {
    name: "Anisah Dayaan",
    department: "CICS",
    total_votes: "65",
  },
  {
    name: "Thomas Edison",
    department: "CSSH",
    total_votes: "76",
  },
  {
    name: "Ellon Musk",
    department: "CNSM",
    total_votes: "93",
  },
];

export default {
  setup() {
    return {
      splitterModel: ref(60),
      columns,
      rows,

      pagination: ref({
        rowsPerPage: 100,
      }),
    };
  },
};
</script>
