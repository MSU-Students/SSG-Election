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

  <div class="row">
    <div class="col-12 col-md q-pa-md">
      <q-card class="my-card cursor-pointer">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-4">
              <div class="q-pb-md text-center">
                <q-avatar size="60px" class="shadow-10">
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
          <div class="row">
            <div class="col">
              <q-card-section class="text-italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit "
              </q-card-section>
            </div>
          </div>
        </div>
      </q-card>
    </div>

    <div class="col-12 col-md q-pa-md">
      <q-card class="my-card cursor-pointer">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-4">
              <div class="q-pb-md text-center">
                <q-avatar size="60px" class="shadow-10">
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
          <div class="row">
            <div class="col">
              <q-card-section class="text-italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. numquam exercitationem
                aut, natus minima, porro labore.""
              </q-card-section>
              <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
                <q-banner dense>
                  <div class="row">
                    <div class="col">
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

                  <q-table
                    class="my-sticky-table"
                    grid
                    :rows="rows"
                    :columns="columns"
                    row-key="name"
                    hide-bottom
                  />
                  <template v-slot:action>
                    <q-btn flat dense color="primary" label="close" v-close-popup />
                  </template>
                </q-banner>
              </q-popup-proxy>
            </div>
          </div>
        </div>
      </q-card>
    </div>

    <div class="col-12 col-md q-pa-md">
      <q-card class="my-card cursor-pointer">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-4">
              <div class="q-pb-md text-center">
                <q-avatar size="60px" class="shadow-10">
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
          <div class="row">
            <div class="col">
              <q-card-section class="text-italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit "
              </q-card-section>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
  <!-------------------------->
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="amber-13" text-color="white" />
  </q-page-scroller>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({})
export default class Student_Candidate extends Vue {
  autoplay = true;
  slide = 1;
  columns = [
    {
      name: "Year_Level",
      align: "center",
      label: "Year Level",
      field: "Year_Level",
      sortable: true,
    },
    { name: "Course", label: "Course", field: "Course", sortable: true },
    { name: "Department", label: "Department", field: "Department" },
  ];

  rows = [
    {
      Year_Level: "4th yr",
      Course: "BS-IT",
      Department: "Computer Science Department",
    },
  ];

  filter = "";
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
