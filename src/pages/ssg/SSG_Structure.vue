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
      <q-splitter v-model="splitterModel" style="height: 550px">
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
            <q-tab-panel name="Chief Justice">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'Chief Justice'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Prime Minister">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'Prime Minister'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Executive Secretary">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'Executive Secretary'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Associate Justice">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'Associate Justice'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Speaker of the House">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'Speaker of the House'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Ministry on Finance">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'Ministry on Finance'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Ministry on Academic Affairs">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'Ministry on Academic Affairs'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Ministry on Planning and Project Management">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div
                  v-if="
                    data.position ==
                    'Ministry on Planning and Project Management'
                  "
                >
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Ministry on Information and Communication">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div
                  v-if="
                    data.position == 'Ministry on Information and Communication'
                  "
                >
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Ministry on Health and Environment">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div
                  v-if="data.position == 'Ministry on Health and Environment'"
                >
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="External Deputy Prime Minister">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'External Deputy Prime Minister'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Internal Deputy Prime Minister">
              <div v-for="data in allSsgMember" v-bind:key="data.ssg_id">
                <div v-if="data.position == 'Internal Deputy Prime Minister'">
                  <div class="q-pt-xs col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <q-separator />
                    <div class="text-subtitle1 q-pt-sm">
                      Elected as <strong>{{ data.position }}</strong> on the
                      year <i>{{ data.academic_yr }}</i
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Chief Ministers">
              <div
                v-for="data in allRepresentative"
                v-bind:key="data.representative_id"
              >
                <div v-if="data.college_status == 'College President'">
                  <div class="q-pt-md col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <div class="text-subtitle1 q-pa-md">
                      Assigned as <strong>Chief Minister</strong> from the
                      {{ data.student?.college }}.
                    </div>
                    <q-separator />
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="College Representatives">
              <div
                v-for="data in allRepresentative"
                v-bind:key="data.representative_id"
              >
                <div v-if="data.college_status == 'College Representative'">
                  <div class="q-pt-md col">
                    <div class="text-overline">Mindanao State University</div>
                    <div class="col-5 flex flex-center">
                      <q-avatar size="200px">
                        <q-img
                          square
                          v-if="data.student?.url"
                          :src="`http://localhost:3000/media/${data.student?.url}`"
                        /><q-img
                          v-if="!data.student?.url"
                          src="~assets/images/MSU.jpg"
                        />
                      </q-avatar>
                    </div>
                    <div class="text-h5 text-primary q-mt-sm q-mb-xs">
                      {{ data.student?.first_name }}
                      {{ data.student?.middle_name }}
                      {{ data.student?.last_name }} {{ data.student?.suffix }}
                    </div>
                    <div class="text-caption">
                      Course: {{ data.student?.course }}
                    </div>
                    <div class="text-caption">
                      College: {{ data.student?.college }}
                    </div>
                    <div class="text-caption">
                      Department: {{ data.student?.department }}
                    </div>
                    <div class="text-caption">
                      Email Address: {{ data.student?.email }}
                    </div>

                    <div class="text-caption q-pb-sm">
                      Year Admitted: {{ data.student?.yr_admitted }}
                    </div>
                    <div class="text-subtitle1 q-pa-md">
                      Assigned as <strong>College Representatives</strong> from the
                      {{ data.student?.college }}.
                    </div>
                    <q-separator />
                  </div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  ElectionDto,
  PositionDto,
  RepresentativeDto,
  SsgMemberDto,
  VoteSsgDto,
} from 'src/services/rest-api';
import { IRepresentativeVote } from 'src/store/vote-ssg/state';
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapGetters, mapState } from 'vuex';
@Options({
  computed: {
    ...mapState('ssgMember', ['allSsgMember']),
    ...mapState('representative', ['allRepresentative']),
    ...mapState('voteSsg', ['allVoteSsg', 'summary']),
    ...mapGetters('voteSsg', ['SsgOfficials', 'Result']),
    ...mapState('election', ['activeElection']),
  },
  methods: {
    ...mapActions('ssgMember', ['getAllSsgMember']),
    ...mapActions('voteSsg', ['getAllVoteSsg']),
    ...mapActions('election', ['getActiveElection']),
    ...mapActions('representative', ['getAllRepresentative']),
  },
})
export default class Student_Candidate extends Vue {
  summary!: IRepresentativeVote[];
  allSsgMember!: SsgMemberDto[];
  allVoteSsg!: VoteSsgDto[];
  getAllSsgMember!: () => Promise<void>;
  getAllVoteSsg!: () => Promise<void>;
  Result!: IRepresentativeVote[];
  allRepresentative!: RepresentativeDto[];
  getAllRepresentative!: () => Promise<void>;
  getActiveElection!: () => Promise<void>;
  activeElection!: ElectionDto;

  addProclaimSsgMember!: (payload: any) => Promise<void>;
  proclaimAllOfficers!: (payload: IRepresentativeVote[]) => Promise<void>;
  SsgOfficials!: IRepresentativeVote[];
  async mounted() {
    await this.getAllSsgMember();
    await this.getAllRepresentative();
    await this.getAllVoteSsg();
  }

  splitterModel = 50;
  selected = 'Prime Minister';

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
