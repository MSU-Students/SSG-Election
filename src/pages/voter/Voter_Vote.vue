<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12 col-md-8 q-px-lg">
        <q-card>
          <div class="row q-pa-md">
            <div class="text-h5 q-pa-lg text-bold">
              <q-icon name="people" color="primary" style="font-size: 3rem" /><br />
              Representatives
            </div>
            <div class="q-pa-lg">
              <q-option-group
                v-model="group"
                :options="options"
                color="maroon"
                type="checkbox"
              />
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-12 col-md-4 q-pt-xl gt-sm">
        <q-img src="~assets/images/vote.svg" />
      </div>
    </div>
    <q-card-actions align="center" class="bg-white text-teal">
      <q-btn label="Submit" color="primary " />
    </q-card-actions>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    return {
      group: ref([""]),

      options: [
        {
          label: "ABDULBASIT, Arifah U.",
          value: "op1",
        },
        {
          label: "DAYAAN, Anisah I.",
          value: "op2",
        },
        {
          label: "OMAR, Najmah A.",
          value: "op3",
        },
      ],
    };
  },
};
</script>
