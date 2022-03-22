<template>
  <q-page>
    <div class="row q-pa-md q-pl-xl q-pr-lg">
      <div class="col-12 col-md-4 q-pa-md">
        <div class="q-pa-md text-overline text-bold">
          Positions
          <q-separator />
        </div>
        <q-card>
          <q-item active clickable v-ripple dense t0="prime()">
            <q-item-section> Prime Minister </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple dense to="">
            <q-item-section> Secretary General </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-btn
              outline
              dense
              class="text-overline"
              label="Refresh Vote"
              icon-right="refresh"
              color="green"
            />
          </q-item>
        </q-card>
      </div>
      <div class="col-12 col-md-8 q-px-lg q-gutter-y-md">
        <div class="q-pt-lg q-mt-lg text-overline text-bold">
          Election Result
          <q-separator />
        </div>
        <q-card>
          <div id="prime">
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Prime Minister - Result as of <strong>Date Mentioned</strong>
              </div>
            </q-card-actions>
            <q-separator />
            <div class="q-pa-md">
              <prime-minister-chart />
            </div>
          </div>
          <q-space />
          <div id="secretary">
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-bold text-subtitle2 q-pl-md">
                <q-icon name="people" color="primary" />
                Secretary General - Result as of <strong>Date Mentioned</strong>
              </div>
            </q-card-actions>
            <q-separator />
            <div class="q-pa-md">
              <secretary-general-chart />
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import PrimeMinisterChart from 'components/Charts/prime.result.vue';
import SecretaryGeneralChart from 'components/Charts/prime.result.vue';
@Options({
  components: { PrimeMinisterChart, SecretaryGeneralChart },
})
export default class studentVote extends Vue {}
</script>
