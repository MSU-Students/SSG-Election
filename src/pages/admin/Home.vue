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
          >Live Election</q-toolbar-title
        >
      </q-toolbar>
    </div>
  </div>
  <!--separator-->

  <div class="row">
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
          <div class="row">
            <div class="col">
              <div class="text-weight-bold text-center">Prime Minister</div>
              <div class="text-caption text-center">Position</div>
            </div>
            <div class="col">
              <div class="text-weight-bold text-center">12</div>
              <div class="text-caption text-center">Vote</div>
            </div>
          </div>
        </div>
      </q-card>
    </div>

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
          <div class="row">
            <div class="col">
              <div class="text-weight-bold text-center">Prime Minister</div>
              <div class="text-caption text-center">Position</div>
            </div>
            <div class="col">
              <div class="text-weight-bold text-center">12</div>
              <div class="text-caption text-center">Vote</div>
            </div>
          </div>
        </div>
      </q-card>
    </div>

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
          <div class="row">
            <div class="col">
              <div class="text-weight-bold text-center">Prime Minister</div>
              <div class="text-caption text-center">Position</div>
            </div>
            <div class="col">
              <div class="text-weight-bold text-center">12</div>
              <div class="text-caption text-center">Vote</div>
            </div>
          </div>
        </div>
      </q-card>
    </div>

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
          <div class="row">
            <div class="col">
              <div class="text-weight-bold text-center">Prime Minister</div>
              <div class="text-caption text-center">Position</div>
            </div>
            <div class="col">
              <div class="text-weight-bold text-center">12</div>
              <div class="text-caption text-center">Vote</div>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
  <!-------------------------->

  <!-----Election Campaign----->
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

  <!-------------------------->
  <div class="row">
    <div class="col-12 col-md q-pa-md">
      <q-card class="my-card">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="q-pa-md">
              <q-avatar size="100px" class="iext-center shadow-10">
                <img src="~/assets/images/avatar.svg" alt="logo" />
              </q-avatar>
              <div class="q-pt-md">
                <div class="text-weight-bold">Arifah U. Abdulbasit</div>
                <div class="text-caption">College of Agriculture</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8">
            <div class="q-pa-md item-center">
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
      <q-card class="my-card">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="q-pa-md">
              <q-avatar size="100px" class="iext-center shadow-10">
                <img src="~/assets/images/avatar.svg" alt="logo" />
              </q-avatar>
              <div class="q-pt-md">
                <div class="text-weight-bold">Arifah U. Abdulbasit</div>
                <div class="text-caption">
                  College of Information and Computing Science
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8">
            <div class="q-pa-md item-center">
              <q-card-section class="text-italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
                perferendis totam, ea at omnis vel numquam exercitationem aut, natus
                minima, porro labore.""
              </q-card-section>
            </div>
          </div>
        </div>
      </q-card>
    </div>

    <div class="col-12 col-md q-pa-md">
      <q-card class="my-card">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="q-pa-md">
              <q-avatar size="100px" class="iext-center shadow-10">
                <img src="~/assets/images/avatar.svg" alt="logo" />
              </q-avatar>
              <div class="q-pt-md">
                <div class="text-weight-bold">Arifah U. Abdulbasit</div>
                <div class="text-caption">
                  College of Information and Computing Science
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8">
            <div class="q-pa-md item-center">
              <q-card-section class="text-italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
                perferendis totam, ea at omnis vel numquam exercitationem aut, natus
                minima, porro labore.""
              </q-card-section>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>

  <!-------------------------->

  <!--separator-->
  <div class="row q-col-gutter-lg">
    <div class="col">
      <q-toolbar>
        <q-toolbar-title class="text-overline text-weight-bold"
          >Recent Elections</q-toolbar-title
        >
      </q-toolbar>
    </div>
  </div>
  <!--separator-->
  <!-----------Recent Election Ballot-------------->
  <div class="row q-pt-md q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="Recent Election"
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-bottom
      ><template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="add"
          label="Add new election"
          no-caps
          to="/Ballot"
        />
      </template>
    </q-table>
  </div>
  <!----------------------------------------------->
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
interface IRow {
  name: string;
}

@Options({})
export default class Student_Candidate extends Vue {
  autoplay = true;
  slide = 1;

  columns = [
    {
      name: "id",
      align: "center",
      field: "id",
    },
    {
      name: "name",
      required: true,
      label: "Election Name",
      align: "left",
      field: (row: IRow) => row.name,
      format: (val: string) => `${val}`,
    },

    {
      name: "start",
      align: "center",
      label: "Election Start",
      field: "start",
    },
    {
      name: "end",
      align: "center",
      label: "Election End",
      field: "end",
    },
    { name: "action", align: "center", field: "action" },
  ];
  rows = [
    {
      id: "1",
      name: "2021 Supreme Student Government Election",
      start: "02-14-2021 10:13:44",
      end: "02-14-2021 16:13:44",
    },
  ];
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
</style>
