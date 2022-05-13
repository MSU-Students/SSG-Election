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
        <div class="q-px-xl q-pb-md" align="center">
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

    <!---------------------------------------------->
    <!-- <div class="col-12 col-md-8 q-px-lg">
    <div class="row">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">ABOUT</q-toolbar-title>
      </q-toolbar>
    </div>
  </div> -->
    <!--separator-->
    <div class="q-pa-md" align="justify">
      <div class="row">
        <!-- <div class="col-12 col-md q-pa-md q-gutter-y-md text-body1"> -->
        <div class="col-12 col-md-8 q-px-lg">
          <q-toolbar-title class="text-weight-bold">ABOUT</q-toolbar-title>
          <q-separator inset="item" color="primary" /><br />
          <p>
            This system is a capstone project entitled “A Web-based Election Management
            System for Supreme Student Government of Mindanao State University-Marawi”
            developed as an online voting system in Mindanao State University-Marawi
            campus.
          </p>
          <p>
            This project was intended to improve and promote the information technology as
            a tool for the Division of Student Affairs to manage the election for the
            Supreme Student Government officials. Through this project, the officials
            elected by the students can conveniently appoint members of the SSG to help
            with their areas of interest with the election securely and concisely
            executed.
          </p>
        </div>
        <div class="col-md-4">
          <q-img src="~assets/images/referral.svg" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Chart from 'components/Charts/prime.result.vue';
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
