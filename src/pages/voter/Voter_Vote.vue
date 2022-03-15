<template>
  <q-page>
    <div class="row q-pa-md q-pl-xl q-pr-lg">
      <div class="col-4 q-pa-md">
        <div class="q-pa-md text-overline text-bold">
          Voting Information
          <q-separator />
        </div>
        <q-card>
          <div class="col q-pa-md text-caption">
            College Representative: <strong>{{ group }}</strong>
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
      <div class="col-8 q-px-lg q-gutter-y-md">
        <div class="q-pt-lg q-mt-lg text-overline text-bold">
          Select Candidates
          <q-separator />
        </div>
        <q-card>
          <q-card-actions class="bg-deep-orange-1">
            <div class="text-bold text-subtitle2 q-pl-md">
              <q-icon name="people" color="primary" />
              College Representative
            </div>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            
              <q-option-group
                v-model="group"
                :options="options"
                color="maroon"
                type="checkbox"
              />
          </q-card-actions>
        </q-card>
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
