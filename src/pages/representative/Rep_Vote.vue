<template>
  <div>
    <div class="row">
      <div class="col-12 col-md q-pa-md">
        <q-card class="my-card">
          <div class="q-pa-md">
            <!--------------------------------voting----------------------------->

            <div class="row">
              <div class="col-4">
                <div class="q-pb-md text-center">
                  <q-avatar size="50px" class="shadow-10">
                    <img src="~/assets/images/avatar.svg" alt="logo" />
                  </q-avatar>
                </div>
              </div>
              <div class="col-8 q-pa-sm">
                <div class="text-weight-bold">Najmah A. Omar</div>
                <div class="text-caption">College of Information Technology</div>
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-sm q-pl-sm">
              <div class="col">
                <q-btn outline class="text-primary" icon="check" label="Vote" />
              </div>
              <div class="col">
                <q-btn outline class="text-green" label="Detail" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!------------------------------------------>

      <div class="col-12 col-md q-pa-md">
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-4">
                <div class="q-pb-md text-center">
                  <q-avatar size="50px" class="shadow-10">
                    <img src="~/assets/images/avatar.svg" alt="logo" />
                  </q-avatar>
                </div>
              </div>
              <div class="col-8 q-pa-sm">
                <div class="text-weight-bold">Najmah A. Omar</div>
                <div class="text-caption">College of Information Technology</div>
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-sm q-pl-sm">
              <div class="col">
                <q-btn outline class="text-primary" icon="check" label="Vote" />
              </div>
              <div class="col">
                <q-btn outline class="text-green" label="Detail" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!------------------------------------------>

      <div class="col-12 col-md q-pa-md">
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-4">
                <div class="q-pb-md text-center">
                  <q-avatar size="50px" class="shadow-10">
                    <img src="~/assets/images/avatar.svg" alt="logo" />
                  </q-avatar>
                </div>
              </div>
              <div class="col-8 q-pa-sm">
                <div class="text-weight-bold">Najmah A. Omar</div>
                <div class="text-caption">College of Information Technology</div>
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-sm q-pl-sm">
              <div class="col">
                <q-btn outline class="text-primary" icon="check" label="Vote" />
              </div>
              <div class="col">
                <q-btn outline class="text-green" label="Detail" />
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!------------------------------------------>

      <div class="col-12 col-md q-pa-md">
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-4">
                <div class="q-pb-md text-center">
                  <q-avatar size="50px" class="shadow-10">
                    <img src="~/assets/images/avatar.svg" alt="logo" />
                  </q-avatar>
                </div>
              </div>
              <div class="col-8 q-pa-sm">
                <div class="text-weight-bold">Najmah A. Omar</div>
                <div class="text-caption">College of Information Technology</div>
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-sm q-pl-sm">
              <div class="col">
                <q-btn outline class="text-primary" icon="check" label="Vote" />
              </div>
              <div class="col">
                <q-btn outline class="text-green" label="Detail" />
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <!-------------------------->
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
