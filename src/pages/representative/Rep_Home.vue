<template>
  <div>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <div class="q-mb-xl"></div>
        <q-card style="width: 500px">
          <q-card-section>
            <div class="text-h8 text-overline text-bold">Student Info</div>
            <q-separator />
            <div class="q-px-sm text-subtitle1 text-weight-medium">
              <div>ID Number:</div>

              <div>Name:</div>
              <div>Course:</div>
            </div>
          </q-card-section>
        </q-card>
      </template>

      <template v-slot:after>
        <div class="q-pt-lg q-mt-lg text-overline text-bold">List Of Nominees</div>
        <div class="q-gutter-md row items-start text-h6 text-weight-bold">
          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Prime Minister
              </div>
            </q-card-actions>
            <q-separator />
            <q-table :rows="rows" :columns="columns" row-key="name" style="width: 1000px">
              <q-btn
                round
                icon="folder"
                size="md"
                color="green"
                flat
                @click="submit = true"
              />
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
                </q-card> </q-dialog
              >>
            </q-table>
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
  { name: "course", label: "Course", align: "center", field: "course", sortable: true },
  { name: "detail", label: "Detail", field: "detail", sortable: true },
];

const rows = [
  {
    name: "Anisah Dayaan",
    year: "4th",
    course: "Database",
    detail: "detail",
  },
  {
    name: "Thomas Edison",
    year: "3rd",
    course: "Networking",
    detail: "detail",
  },
  {
    name: "Ellon Musk",
    year: "1st",
    course: "ComSci",
    detail: "detail",
  },
];

export default {
  setup() {
    return {
      splitterModel: ref(30),
      vote: ref(false),
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
