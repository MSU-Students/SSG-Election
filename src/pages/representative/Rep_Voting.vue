<template>
  <q-img class="wave" src="~assets/images/image.png" />
  <div>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <div class="q-mb-xl"></div>
        <q-card style="width: 500px">
          <q-card-section>
            <div class="text-h8 text-overline text-bold">All Position</div>
            <q-separator />
            <div class="q-px-sm text-subtitle1 text-weight-medium">
              <div>
                Prime Minister: <strong>{{ selected }}</strong>
              </div>

              <div>
                Secretary General:<strong>{{ selected1 }}</strong>
              </div>
              <div>
                Chief Minister:<strong>{{ selected2 }}</strong>
              </div>
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-actions align="center">
            <q-btn label="Submit" color="green" flat @click="submit = true" />
          </q-card-actions>
        </q-card>

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
      </template>

      <template v-slot:after>
        <div class="q-pt-lg q-mt-lg text-overline text-bold">Select Candidates</div>
        <div class="q-gutter-md row items-start text-h6 text-weight-bold">
          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Prime Minister
              </div>
            </q-card-actions>
            <q-separator />
            <q-table
              :rows="rows"
              :columns="columns"
              row-key="name"
              selection="single"
              v-model:selected="selected"
              style="width: 1000px"
            />
          </q-card>

          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Secretary General
              </div>
            </q-card-actions>
            <q-separator />
            <q-table
              :rows="rows"
              :columns="columns"
              row-key="name"
              selection="single"
              v-model:selected="selected1"
              style="width: 1000px"
            />
          </q-card>

          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Chief Minister
              </div>
            </q-card-actions>
            <q-separator />
            <q-table
              :rows="rows"
              :columns="columns"
              row-key="name"
              selection="single"
              v-model:selected="selected2"
              style="width: 1000px"
            />
          </q-card>
        </div>
      </template>
    </q-splitter>
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
