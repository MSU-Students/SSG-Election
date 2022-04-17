<template>
  <div class="q-pa-md q-pl-md">
    <div class="q-pa-md">
      <div class="q-pt-sm q-mt-md text-overline text-bold">Assigning Of Officers</div>

      <div class="row">
        <div class="q-pa-md col-3 col-sm-4">
          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-overline text-bold text-h4 q-pl-md">
                <q-icon name="people" color="primary" />
                EXECUTIVE OFFICERS
              </div>
            </q-card-actions>
            <div class="row q-pa-md justify-around">
              <div class="row">
                <div class="q-pa-md">Prime Minister:</div>
                <q-select
                  filled
                  v-model="model1"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  :options="options"
                  @filter="filterFn"
                  style="padding-bottom: 10px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey"> No results </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
              <div class="row">
                <div class="q-pa-md">Executive Secretary:</div>
                <q-select
                  filled
                  v-model="model2"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  :options="options"
                  @filter="filterFn"
                  style="padding-bottom: 10px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey"> No results </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
              <div class="row">
                <div class="q-pa-md">Intl. Dep. Prime Minister:</div>
                <q-select
                  filled
                  v-model="model3"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  :options="options"
                  @filter="filterFn"
                  style="padding-bottom: 10px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey"> No results </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
            </div>
          </q-card>
        </div>

        <div class="q-pa-md col-3 col-sm-4">
          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-overline text-bold text-h4 q-pl-md">
                <q-icon name="people" color="primary" />
                PARLIAMENT
              </div>
            </q-card-actions>
            <div class="row q-pa-md justify-around">
              <div class="row">
                <div class="q-pa-md">Chief Minister:</div>
                <q-select
                  filled
                  v-model="model4"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  :options="options"
                  @filter="filterFn"
                  style="padding-bottom: 10px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey"> No results </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>

              <div class="row">
                <div class="q-pa-md">College Representative:</div>
                <q-select
                  filled
                  v-model="model5"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  :options="options"
                  @filter="filterFn"
                  style="padding-bottom: 10px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey"> No results </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
            </div>
          </q-card>
        </div>

        <div class="q-pa-md col-3 col-sm-4">
          <q-card>
            <q-card-actions class="bg-deep-orange-1">
              <div class="text-overline text-bold text-h4 q-pl-md">
                <q-icon name="people" color="primary" />
                JUDICIARY
              </div>
            </q-card-actions>
            <div class="row q-pa-md justify-md-evenly">
              <div class="row">
                <div class="q-pa-md">Association Justice:</div>
                <q-select
                  filled
                  v-model="model6"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  :options="options"
                  @filter="filterFn"
                  style="padding-bottom: 10px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey"> No results </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>

              <div class="row">
                <div class="q-pa-md">Associative Justice:</div>
                <q-select
                  filled
                  v-model="model7"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  :options="options"
                  @filter="filterFn"
                  style="padding-bottom: 10px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey"> No results </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const stringOptions = [
  "Thomas Edison",
  "Ada Lovelace",
  "Charles Babbage",
  "James Gosling",
  "Bill Gates",
];

export default {
  setup() {
    const options = ref(stringOptions);

    return {
      model1: ref(null),
      model2: ref(null),
      model3: ref(null),
      model4: ref(null),
      model5: ref(null),
      model6: ref(null),
      model7: ref(null),
      options,

      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
};
</script>
