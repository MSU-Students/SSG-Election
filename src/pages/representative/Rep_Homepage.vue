<template>
  <q-carousel
    animated
    v-model="slide"
    control-color="amber-13"
    style="height: 400px"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide :name="1">
      <div class="bg-img row">
        <div class="col">
          <div
            class="text-h2 text-weight-bolder text-primary q-pt-xl q-pb-mx"
            style="text-align: center"
          >
            SSG
          </div>
          <div
            class="text-h2 text-weight-bolder text-primary"
            style="text-align: center"
          >
            Election
          </div>
          <div class="q-px-xl q-pb-md">
            A Web-based Election Management System for Supreme Student
            Government of Mindanao State University-Marawi
          </div>
          <div class="q-ml-xl">
            <q-btn
              clickable
              v-ripple
              to="/R_Nominee"
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
    </q-carousel-slide>
    <q-carousel-slide
      :name="2"
      img-src="~assets/images/v.svg"
      style="height: 400px"
    />
    <q-carousel-slide :name="3" img-src="~assets/images/3.jpg" />
    <q-carousel-slide :name="4" img-src="~assets/images/4.jpg" />
  </q-carousel>
  <!---------------------------------------------->
  <!--separator-->
  <div class="row q-pl-md q-col-gutter-lg">
    <div class="col">
      <q-toolbar>
        <q-toolbar-title class="text-overline text-weight-bold"
          >Introduction</q-toolbar-title
        >
      </q-toolbar>
    </div>
  </div>
  <!--separator-->
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md q-pa-md q-gutter-y-md text-body1">
        <div>
            This capstone project entitled “A Web-based Election Management System
          for Supreme Student Government of Mindanao State University-Marawi” is
          a software development project that focused on the development of an
          online voting system in Mindanao State University-Marawi campus.
        </div>
        <div>
          This project is intended to improve and promote the information
          technology as a tool for the Division of Student Affairs to manage the
          election for the Supreme Student Government officials. Through this
          project, the officials elected by the students can conveniently
          appoint members of the SSG to help with their areas of interest with
          the election securely and concisely executed.
        </div>
      </div>
      <div class="col-12 col-md">
        <q-carousel-slide
          :name="2"
          img-src="~assets/images/v.svg"
          style="height: 200px"
        />
      </div>
    </div>
  </div>
  <!-------------------------->
  <q-page-scroller
    position="bottom-right"
    :scroll-offset="150"
    :offset="[18, 18]"
  >
    <q-btn fab icon="keyboard_arrow_up" color="amber-13" text-color="white" />
  </q-page-scroller>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({})
export default class Student_Candidate extends Vue {
  autoplay = true;
  slide = 1;
  

  filter = '';
}
</script>

<style>
.my-card {
  height: 100%;
  max-height: 700px;
}
.bg-img {
  background-color: #f3eee8;
}
.q-carousel {
  background-color: #f3eee8;
}
.my-sticky-header-table {
  height: 200px;
  width: 100%;
  max-width: 1300px;
}
.my-sticky-table {
  width: 250px;
}
</style>
