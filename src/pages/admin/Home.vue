<template>
  <q-page>
    <div class="bg-img row">
        <div class="col">
          <div
            class="text-h2 text-weight-bolder text-primary q-pt-xl q-pb-mx"
            style="text-align: center"
          >
            SSG
          </div>
          <div class="text-h2 text-weight-bolder text-primary" style="text-align: center">
            Election
          </div>
          <div class="q-px-xl q-pb-md">
            A web-based SSG Election Management System in Mindanao State University-Marawi
          </div>
          <div class="q-ml-xl">
            <q-btn
              clickable
              v-ripple
              to="/Accounts"
              outline
              rounded
              color="primary"
              label="Get started"
            />
          </div>
        </div>
        <div class="col-8 gt-sm">
          <q-img src="~assets/images/h.png" style="height: 380px" />
        </div>
      </div>

      <!--separator-->
        <div class="row q-col-gutter-lg">
          <div class="col">
            <q-toolbar>
              <q-toolbar-title class="text-overline text-weight-bold"
                >Election Campaign</q-toolbar-title
              >
            </q-toolbar>
          </div>
        </div>
        <!--separator-->
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Chart from "components/Charts/prime.result.vue";
@Options({
  components: { Chart },
})
export default class ManageAccount extends Vue {}
</script>

<style>
.my-card {
  height: 100%;
  max-height: 700px;
}
.bg-img {
  background-color: #f3eee8;
}
</style>