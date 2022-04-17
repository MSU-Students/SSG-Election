<template>
  <q-img class="wave" src="~assets/images/image.png" />
  <div class="q-pa-sm q-pl-md rounded-lg">
    <div class="row">
      <div class="q-pa-sm col-4 col-md-4">
        <div class="row">
          <div class="q-pt-sm q-mt-md text-overline text-bold">Selected Candidates</div>
        </div>
        <q-card>
          <q-card-actions class="bg-deep-orange-1">
            <div class="text-bold text-subtitle2 q-pl-md">
              <q-icon name="people" color="primary" />
              All Position
            </div>
          </q-card-actions>
          <div class="q-pa-sm q-pl-md">
            <div>
              Prime Minister: <strong>{{ selected }}</strong>
            </div>

            <div>
              Secretary General:<strong>{{ selected1 }}</strong>
            </div>
            <q-separator inset />

            <q-card-actions align="center">
              <q-btn label="Submit" color="green" flat @click="submit = true" />
            </q-card-actions>
          </div>

          <q-dialog v-model="submit" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="warning" color="primary" text-color="white" />
                <span class="q-ml-sm">Are you sure of your choices?</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn flat label="Yes" color="green" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card>
      </div>

      <div class="q-pa-sm col-8 col-md-8">
        <div class="row">
          <div class="q-pt-sm q-mt-md text-overline text-bold">Vote Wisely!</div>
        </div>
        <q-card>
          <q-card-actions class="bg-deep-orange-1">
            <div class="text-bold text-subtitle2 q-pl-md">
              <q-icon name="people" color="primary" />
              Prime Minister
            </div>
          </q-card-actions>
          <q-separator />

          <q-responsive :ratio="9 / 6">
            <q-table
              :class="$q.screen.xs"
              :rows="rows"
              :columns="columns"
              row-key="name"
              selection="single"
              v-model:selected="selected"
          /></q-responsive>
        </q-card>

        <div class="q-mt-md col-8 col-md-8">
          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Secretary General
              </div>
            </q-card-actions>
            <q-separator />
            <q-responsive :ratio="9 / 6">
              <q-table
                :class="$q.screen.xs"
                :rows="rows"
                :columns="columns"
                row-key="name"
                selection="single"
                v-model:selected="selected1"
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
    name: "year",
    align: "center",
    label: "Year",
    field: "year",
    sortable: true,
  },
  { name: "course", align: "right", label: "Course", field: "course", sortable: true },
];

const rows = [
  {
    name: "Anisah Dayaan",
    year: "4th",
    course: "Database",
  },
  {
    name: "Thomas Edison",
    year: "3rd",
    course: "Networking",
  },
  {
    name: "Ellon Musk",
    year: "1st",
    course: "ComSci",
  },
];

export default {
  setup() {
    return {
      splitterModel: ref(30), // start at 30%
      selected: ref(),
      selected1: ref(),
      selected2: ref(),
      submit: ref(false),
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
