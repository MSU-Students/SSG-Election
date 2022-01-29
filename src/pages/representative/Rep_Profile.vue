<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12 col-md-8 q-px-lg">
        <q-card>
          <div class="row q-pa-md">
            <div class="col">
              <div class="text-center">
                <q-avatar size="80px" class="shadow-10">
                  <img src="~/assets/images/avatar.svg" alt="logo" />
                </q-avatar>
              </div>
            </div>
            <div class="col-8 q-pa-sm">
              <div class="text-weight-bold">{{ voter.name }}</div>
              <div class="text-caption">{{ voter.idNum }}</div>
              <div class="text-caption">
                {{ voter.course }}, {{ voter.year_admitted }}
              </div>

              <div class="text-caption">{{ voter.department }}</div>
            </div>
          </div>
          <q-separator />
          <div class="row q-pa-md">Information to be added..</div>
        </q-card>
      </div>
      <div class="col-12 col-md-4 q-pt-xl gt-sm">
        <q-img src="~assets/images/profile.svg" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

export default class LayoutAdmin extends Vue {
  //this is where to put the database
  voter = {
    name: "Arifah U. Abdulbasit",
    idNum: "201812291",
    college: "College of Information and Computing Sciences",
    department: "Computer Studies Department",
    course: "BS Information Technology (Database Systems)",
    year_admitted: "2018",
  };
  //---------------------------------->
}
</script>
