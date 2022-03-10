<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12 col-md-8 q-px-lg">
        <q-card>
          <div class="row q-pa-md">
            <div class="text-h5 q-pa-lg text-bold">
              <q-icon
                name="people"
                color="primary"
                style="font-size: 3rem"
              /><br />
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
          <div class="row q-pl-xl">
            <div class="q-mt-md">
              Your selection: <strong>{{ group }}</strong>
            </div>
          </div>
          <div class="row justify-end q-pa-md">
            <q-btn label="Submit" color="primary " />
            <q-btn
              flat style="color: maroon"
              label="Reset"
              @click="onResetClick"
              class="q-ml-md"
            />
          </div>
        </q-card>
      </div>
      <div class="col-12 col-md-4 q-pt-xl gt-sm">
        <q-img src="~assets/images/vote.svg" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

export default class studentVote extends Vue{
     group = ([]);

      onResetClick () {
        this.group = [];
      };


      options = [
        {
          label: 'ABDULBASIT, Arifah U.',
          value: 'ABDULBASIT, Arifah U.',
        },
        {
          label: 'DAYAAN, Anisah I.',
          value: 'DAYAAN, Anisah I.',
        },
        {
          label: 'OMAR, Najmah A.',
          value: 'OMAR, Najmah A.',
        },
      ]
}
</script>
