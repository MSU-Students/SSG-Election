<template>
  <div>
    <div class="q-pa-md">
      <div
        style="width: 100%; height: 50px"
        class="title bg-warning text-dark rounded-borders non-selectable row flex-center"
      >
        Prime Minister
      </div>
      <section id="minister" class="text-left bg-grey-2 mb-5">
        <div class="q-pa-md">
          <q-option-group :options="options1" type="radio" v-model="minister" />
        </div>

        <div class="q-px-sm">
          For prime minister: <strong>{{ minister }} </strong>
        </div>
      </section>
    </div>

    <br />

    <div class="q-pa-md">
      <div
        style="width: 100%; height: 50px"
        class="title bg-warning text-dark rounded-borders non-selectable row flex-center"
      >
        Secretary General
      </div>
      <section id="secretary" class="text-left bg-grey-2 mb-5">
        <div class="q-pa-md">
          <q-option-group :options="options2" type="radio" v-model="secretary" />
        </div>

        <div class="q-px-sm">
          For secretary general: <strong>{{ secretary }}</strong>
        </div>
      </section>
    </div>

    <q-card-actions align="center" class="bg-white text-teal">
      <q-btn label="Submit" color="primary " />
    </q-card-actions>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({})
export default class Student_Vote extends Vue {
  submitResult = [];
  minister = null;
  secretary = null;

  options1 = [
    {
      label: "ABDULBASIT, Arifah U.",
      value: "ABDULBASIT, Arifah U.",
      color: "primary",
    },
    {
      label: "DAYAAN, Anisah I.",
      value: "DAYAAN, Anisah I.",
      color: "primary",
    },
    {
      label: "OMAR, Najmah A.",
      value: "OMAR, Najmah A.",
      color: "primary",
    },
  ];

  options2 = [
    {
      label: "ALANGO, Norjehan M.",
      value: "ALANGO, Norjehan M.",
      color: "primary",
    },
    {
      label: "AYAON, Norhani A.",
      value: "AYAON, Norhani A.",
      color: "primary",
    },
  ];

  shape = "line";
}
</script>
