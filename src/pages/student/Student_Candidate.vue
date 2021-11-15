<template>
  <q-page>
    <div class="q-pa-md">
      <q-responsive>
        <q-table
          grid
          card-class="bg-amber-14 text-white"
          title="List of Representatives"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
        >
          <template v-slot:top-right>
            <q-input borderless v-model="filter" placeholder="Search">
              <template v-slot:prepend>
                <q-icon v-if="filter === ''" name="search" />
                <q-icon v-else name="clear" class="cursor-pointer" @click="filter = ''" />
              </template>
            </q-input>
          </template>
        </q-table>
      </q-responsive>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
interface IRow {
  name: string;
}
@Options({})
export default class Student_Candidate extends Vue {
  columns = [
    {
      name: "desc",
      required: true,
      label: "Fullname",
      align: "left",
      field: (row: IRow) => row.name,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: "Year_Level",
      align: "center",
      label: "Year Level",
      field: "Year_Level",
      sortable: true,
    },
    { name: "Course", label: "Course", field: "Course", sortable: true },
    { name: "Department", label: "Department", field: "Department" },
  ];

  rows = [
    {
      name: "BANTUAS, Abdullah",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "BASHIER, Abdulwalie",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "SERAD, Basam",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "SOLAIMAN, Abdul Moiz",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "ALANGO, Norjehan",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "AYAON, Norhani",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "HADJI ALI, Nahed",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "AMENODEN, Zhyne",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "MANGCOL, Naeem",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
    {
      name: "POONADATU, Jamael",
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
  ];

  filter = "";
  slide = 1;
}
</script>
