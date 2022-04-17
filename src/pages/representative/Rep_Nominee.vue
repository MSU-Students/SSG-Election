<template>
  <q-img class="wave" src="~assets/images/image.png" />
  <div class="row q-pa-md q-pl-md">
    <div class="col q-pa-md bi-justify-left">
      <div class="row rounded-xl">
        <div class="q-pt-sm q-mt-md text-overline text-bold">List Of Nominees</div>
      </div>

      <div class="row">
        <div class="col-12 col-md-12">
          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Prime Minister
              </div>
            </q-card-actions>

            <q-responsive :ratio="18 / 6">
              <q-table
                :class="$q.screen.xs"
                :rows="rows"
                :columns="columns"
                row-key="name"
                hide-pagination
            /></q-responsive>
          </q-card>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-12">
          <q-card class="q-mt-lg">
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Executive Secretary
              </div>
            </q-card-actions>

            <q-responsive :ratio="18 / 6">
              <q-table
                :class="$q.screen.xs"
                :rows="rows"
                :columns="columns"
                row-key="name"
                hide-pagination
            /></q-responsive>
          </q-card>
        </div>
      </div>
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
      columns,
      rows,
    };
  },
};
</script>

<style>
.wave {
  background-color: #e6ddd3;
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
