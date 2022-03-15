<template>
  <q-page>
    <div class="row q-pa-md q-pl-xl q-pr-lg">
      <div class="col-12 col-md-4 q-pa-md">
        <div class="q-pa-md text-overline text-bold">
          Voting Information
          <q-separator />
        </div>
        <q-card>
          <div class="col q-pa-md text-caption">
            Prime Minister: <strong>{{ group }}</strong>
          </div>
          <q-separator />
          <div class="col q-pa-md text-caption">
            Secretary General: <strong>{{ group2 }}</strong>
          </div>
          <q-separator />
          <div class="row justify-center q-pa-sm">
            <q-btn
              dense
              class="text-overline"
              label="Submit Vote"
              color="primary "
            />
            <q-btn
              flat
              dense
              style="color: maroon"
              label="Reset"
              @click="onResetClick"
              class="text-overline q-ml-md"
            />
          </div>
        </q-card>
      </div>
      <div class="col-12 col-md-8 q-px-lg q-gutter-y-md">
        <div class="q-pt-lg q-mt-lg text-overline text-bold">
          Select Candidates
          <q-separator />
        </div>
        <q-card>
          <q-card-actions class="bg-deep-orange-1">
            <div class="text-bold text-subtitle2 q-pl-md">
              <q-icon name="people" color="primary" />
              Prime Minister
            </div>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            
              <q-option-group
                v-model="group"
                class="text-caption"
                :options="primeMinister"
                color="maroon"
              />
          </q-card-actions>
        </q-card>
        <q-space />
        <q-card>
          <q-card-actions class="bg-deep-orange-1">
            <div class="text-bold text-subtitle2 q-pl-md">
              <q-icon name="people" color="primary" />
              Secretary General
            </div>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
              <q-option-group
                v-model="group2"
                class="text-caption"
                :options="secretary"
                color="maroon"
              />
          </q-card-actions>
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
