<template>
  <q-page>
    <div class="q-pl-lg">
      <div class="text-h5 q-pa-lg text-bold">
        <q-icon name="leaderboard" color="primary" style="font-size: 3rem" />
        SSG Organizational Structure
      </div>
    </div>
    <q-separator inset /><br />
    <div>
      <q-splitter v-model="splitterModel" style="height: 400px">
        <template v-slot:before>
          <div class="q-pa-md">
            <q-tree
              :nodes="simple"
              node-key="label"
              selected-color="primary"
              v-model:selected="selected"
              default-expand-all
            />
          </div>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="selected"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="Prime Minister">
              <div class="q-pt-xs col">
                <div class="text-overline">Mindanao State University</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Arifah U. Abdulbasit</div>
                <div class="text-caption text-grey">Prime Minister</div>
              </div>

              <div class="col-5 flex flex-center">
                <q-avatar
                  square
                  size="120px"
                  font-size="82px"
                  color="teal"
                  text-color="white"
                  icon="account_circle"
                />
              </div>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Chief Minister">
              <div class="q-pt-xs col">
                <div class="text-overline">Mindanao State University</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Norjehan M. Alango</div>
                <div class="text-caption text-grey">Chief Minister</div>
              </div>

              <div class="col-5 flex flex-center">
                <q-avatar
                  square
                  size="120px"
                  font-size="82px"
                  color="teal"
                  text-color="white"
                  icon="account_circle"
                />
              </div>

              <q-separator />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Secretary General">
              <div class="q-pt-xs col">
                <div class="text-overline">Mindanao State University</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Najmah A. Omar</div>
                <div class="text-caption text-grey">Minister</div>
              </div>

              <div class="col-5 flex flex-center">
                <q-avatar
                  square
                  size="120px"
                  font-size="82px"
                  color="teal"
                  text-color="white"
                  icon="account_circle"
                />
              </div>

              <q-separator />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Minister">
              <div class="q-pt-xs col">
                <div class="text-overline">Mindanao State University</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Basam C. Serad</div>
                <div class="text-caption text-grey">Prime Minister</div>
              </div>

              <div class="col-5 flex flex-center">
                <q-avatar
                  square
                  size="120px"
                  font-size="82px"
                  color="teal"
                  text-color="white"
                  icon="account_circle"
                />
              </div>

              <q-separator />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
                cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
                commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({})
export default class Student_Candidate extends Vue {
  splitterModel = 50;
  selected = 'Officer';

  simple = [
    {
      label: 'Judiciary',
      children: [
        {
          label: 'Chief Justice',
          icon: 'person',
          children: [
            {
              label: 'Associate Justice',
              icon: 'person',
            },
          ],
        },
      ],
    },

    {
      label: 'Parliament',
      children: [
        {
          label: 'Speaker of the House',
          icon: 'person',
          children: [
            {
              label: 'Chief Ministers',
              icon: 'person',
            },
            {
              label: 'College Representatives',
              icon: 'person',
              children: [
                {
                  label: 'College of Agriculture',
                  icon: 'person',
                },
                {
                  label: 'College of Business Administration and Accountancy',
                  icon: 'person',
                },
                {
                  label: 'College of Education',
                  icon: 'person',
                },
                {
                  label: 'College of Engineering',
                  icon: 'person',
                },
                {
                  label: 'College of Forestry',
                  icon: 'person',
                },
                {
                  label: 'College of Information and Computing Sciences',
                  icon: 'person',
                },
              ],
            },
          ],
        },
      ],
    },
    //-----------------> Executive Structure
    {
      label: 'Executive',
      children: [
        {
          label: 'Prime Minister',
          icon: 'person',
          children: [
            {
              label: 'Executive Secretary',
              icon: 'person',
            },
            {
              label: 'Internal Deputy Prime Minister',
              icon: 'person',
            },
            {
              label: 'External Deputy Prime Minister',
              icon: 'person',
            },
            {
              label: 'Ministry on Health and Environment',
              icon: 'person',
            },
            {
              label: 'Ministry on Information and Communication',
              icon: 'person',
            },
            {
              label: 'Ministry on Planning and Project Management',
              icon: 'person',
            },
            {
              label: 'Ministry on Academic Affairs',
              icon: 'person',
            },
            {
              label: 'Ministry on Finance',
              icon: 'person',
            },
          ],
        },
      ],
    },

    {
      label: 'Constitutional Commission',
      children: [
        {
          label: 'Commission on Audit',
          icon: 'person',
        },
        {
          label: 'Commission on Election',
          icon: 'person',
        },
        {
          label: "Student's Right and Welfare Commission",
          icon: 'person',
        },
      ],
    },
  ];
}
</script>
