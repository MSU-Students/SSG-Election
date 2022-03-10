<template>
  <q-page>
    <div class="row q-pa-lg q-pl-xl q-pr-lg">
      <div class="col-4">
        <q-card>
          <div class="row q-pl-xl">
            <div class="q-mt-md">
             Prime Minister: <strong>{{ group }}</strong>
             <br/>
             Secretary General: <strong>{{ group2 }}</strong>
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
      <div class="col-8 q-px-lg q-gutter-y-md">
        <q-card class="">
          <div class="row q-pa-md">
            <div class="text-bold q-pl-md">
              <q-icon
                name="people"
                color="primary"
              />
              Prime Minister
            </div>
          </div>
          <q-separator/>
          <div class="row q-pa-sm q-pl-lg">
              <q-option-group
                v-model="group"
                :options="primeMinister"
                color="maroon"
              />
              
          </div>
        </q-card>
        <q-space/>
        <q-card>
          <div class="row q-pa-md">
            <div class="text-bold q-pl-md">
              <q-icon
                name="people"
                color="primary"
              />
              Secretary General
            </div>
          </div>
          <q-separator/>
          <div class="row q-pa-sm q-pl-lg">
              <q-option-group
                v-model="group2"
                :options="secretary"
                color="maroon"
              />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

export default class studentVote extends Vue {
  group = [];
  group2 = [];

  onResetClick() {
    this.group = [];
    this.group2 = [];
  }

  primeMinister = [
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
  ];

  secretary = [
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
  ];
}
</script>
