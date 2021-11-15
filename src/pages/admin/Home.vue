<template>
  <div class="bg-img row">
    <div class="col-4">
      <div
        class="text-h1 text-bold text-primary q-mt-xl q-pt-xl q-pb-mx"
        style="text-align: center"
      >
        SSG Election
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
    <div class="col-8">
      <q-img src="~assets/images/h.png" />
    </div>
  </div>

  <div class="q-pa-lg">
    <!--separator-->
    <div class="row q-col-gutter-md">
      <div class="col-8">
        <q-toolbar>
          <q-toolbar-title class="text-overline">---OVERVIEW---</q-toolbar-title>
        </q-toolbar>
      </div>
    </div>
    <!--separator-->

    <!-- Active Projects-->
    <div class="row q-col-gutter-lg">
      <div class="col">
        <q-card align="center">
          <q-card-section>
            <q-icon name="people" color="deep-purple" style="font-size: 3rem"> </q-icon>
            <div class="text-h5 text-deep-purple q-pb-md">Voters</div>
            <div class="text-h5">500</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card align="center">
          <q-card-section>
            <q-icon name="emoji_people" color="amber" style="font-size: 3rem"> </q-icon>
            <div class="text-h5 text-amber q-pb-md">Candidates</div>
            <div class="text-h5">32</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card align="center">
          <q-card-section>
            <q-icon name="ballot" color="teal" style="font-size: 3rem"> </q-icon>
            <div class="text-h5 text-teal q-pb-md">Ballot</div>
            <div class="text-h5">1</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!--separator-->
    <div class="row q-col-gutter-md">
      <div class="col-8">
        <q-toolbar>
          <q-toolbar-title class="text-overline">Active Projects</q-toolbar-title>
        </q-toolbar>
      </div>
    </div>
    <!--separator-->

    <!--live election-->
    <div class="q-pa-md row items-start q-gutter-md">
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

      <!--separator-->
      <div class="row q-col-gutter-md">
        <div class="col-8">
          <q-toolbar>
            <q-toolbar-title class="text-overline">Live Election</q-toolbar-title>
          </q-toolbar>
        </div>
      </div>
      <!--separator-->
    </div>
  </div>
</template>

<style>
.my-card {
  width: 350px;
  height: 170px;
}
.bg-img {
  background-color: #f3eee8;
}
</style>
