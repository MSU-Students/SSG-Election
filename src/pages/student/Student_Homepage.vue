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
          <div class="text-h2 text-weight-bolder text-primary" style="text-align: center">
            Election
          </div>
          <div class="q-px-xl q-pb-md">
            A web-base SSG election and nformation management system in Mindanao State
            University Marawi
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
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="~assets/images/v.svg" style="height: 400px" />
    <q-carousel-slide :name="3" img-src="~assets/images/3.jpg" />
    <q-carousel-slide :name="4" img-src="~assets/images/4.jpg" />
  </q-carousel>
  <!---------------------------------------------->

  <!-----Election Campaign----->
  <!--separator-->
  <div class="row q-col-gutter-lg">
    <div class="col">
      <q-toolbar>
        <q-toolbar-title class="text-overline text-weight-bold"
          >Live Election</q-toolbar-title
        >
      </q-toolbar>
    </div>
  </div>
  <!--separator-->

  <!-------------------------->
  <div class="q-pl-md q-pb-md row items-start q-gutter-lg">
    <q-card class="my-card">
      <q-item>
        <div class="col-3">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~assets/profile.png" />
            </q-avatar>
          </q-item-section>
        </div>
        <q-item-section>
          <q-item-label><strong>Arifah U. Abdulbasit</strong></q-item-label>
          <q-item-label caption>College of Engineering, 4th yr.</q-item-label>
        </q-item-section>
      </q-item>

      <div class="absolute-bottom q-pb-sm">
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>Prime Minister</strong></q-item-label
            >
            <q-item-label class="text-center" caption> Position</q-item-label>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-center"><strong>12</strong></q-item-label>
            <q-item-label class="text-center" caption> Votes</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-card>

    <!--live election-->
    <q-card class="my-card">
      <q-item>
        <div class="col-3">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~assets/profile.png" />
            </q-avatar>
          </q-item-section>
        </div>
        <q-item-section>
          <q-item-label><strong>Najmah A. Omar</strong></q-item-label>
          <q-item-label caption
            >College of Information and Computing Sciencees, 4th yr.</q-item-label
          >
        </q-item-section>
      </q-item>

      <div class="absolute-bottom q-pb-sm">
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>Secretary General</strong></q-item-label
            >
            <q-item-label class="text-center" caption> Position</q-item-label>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-center"><strong>15</strong></q-item-label>
            <q-item-label class="text-center" caption> Votes</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-card>

    <!--live election-->
    <q-card class="my-card">
      <q-item>
        <div class="col-3">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~assets/profile.png" />
            </q-avatar>
          </q-item-section>
        </div>
        <q-item-section>
          <q-item-label><strong>Anisah I. Dayaan</strong></q-item-label>
          <q-item-label caption>College of Health Sciences, 4th yr.</q-item-label>
        </q-item-section>
      </q-item>

      <div class="absolute-bottom q-pb-sm">
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>Prime Minister</strong></q-item-label
            >
            <q-item-label class="text-center" caption> Position</q-item-label>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-center"><strong>12</strong></q-item-label>
            <q-item-label class="text-center" caption> Votes</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-card>

    <!--live election-->
    <q-card class="my-card">
      <q-item>
        <div class="col-3">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~assets/profile.png" />
            </q-avatar>
          </q-item-section>
        </div>
        <q-item-section>
          <q-item-label><strong>Anisah I. Dayaan</strong></q-item-label>
          <q-item-label caption>College of Health Sciences, 4th yr.</q-item-label>
        </q-item-section>
      </q-item>

      <div class="absolute-bottom q-pb-sm">
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>Prime Minister</strong></q-item-label
            >
            <q-item-label class="text-center" caption> Position</q-item-label>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-center"><strong>12</strong></q-item-label>
            <q-item-label class="text-center" caption> Votes</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({})
export default class Student_Candidate extends Vue {
  autoplay = true;
  slide = 1;
}
</script>

<style>
.my-card {
  width: 100%;
  max-width: 300px;
  height: 170px;
}
.bg-img {
  background-color: #f3eee8;
}
.q-carousel {
  background-color: #f3eee8;
}
</style>
