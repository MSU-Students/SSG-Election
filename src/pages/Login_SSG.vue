<template>
  <q-layout>
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-btn
          outline
          dense
          icon="arrow_back"
          label="back"
          class="q-mr-sm text-primary"
          :ripple="false"
          @click="$router.go(-1)"
        />

        <q-toolbar-title></q-toolbar-title>

        <q-btn
          outline
          dense
          color="primary"
          label="Sign-in as Admin"
          @click="adminLogin = true"
        />
      </q-toolbar>
    </q-header>

    <!-------------Admin Login----------------->

    <q-dialog v-model="adminLogin" persistent>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6"></div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <div class="col text-h6 ellipsis flex justify-center">
            <div class="text-h4 text-primary q-my-none text-weight-bold">LOGIN</div>
          </div>
        </q-card-section>

        <q-card-section>
          <!---------------login form-------------------->
          <q-form @submit="adminUser">
            <div class="q-pl-xl q-pr-xl">
              <q-input
                v-model="admin_user"
                dense
                label="Username"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Input your Username']"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input
                v-model="admin_pass"
                dense
                label="Password"
                :type="isPwd ? 'password' : 'text'"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Input your password']"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>

              <div class="flex justify-center">
                <q-btn
                  :ripple="false"
                  unelevated
                  rounded
                  dense
                  class="glossy q-mt-xs full-width"
                  label="Login"
                  color="primary"
                  type="submit"
                />
              </div>

              <div class="text-center q-mt-sm d-qutter-lg">
                <router-link class="text-red-4 text-caption" to="/"
                  >forgot password?</router-link
                >
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!----------------------Voter Login----------------------->
    <q-img class="wave" src="~assets/images/image.png" />
    <div class="row" style="height: 95vh">
      <div class="col-8 col-md-6 flex justify-center content-center gt-sm">
        <q-img src="~assets/images/v.svg" class="responsive" alt="bg-image" />
      </div>

      <div
        v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs }"
        class="col-12 col-md-6 flex content-center q-pt-lg"
      >
        <q-card
          class="shadow-20"
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '60%' }"
        >
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="../assets/images/avatar.svg" alt="logo" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <!--title-->
            <div class="q-pt-lg">
              <div class="col text-h6 ellipsis flex justify-center">
                <div class="text-h2 text-primary q-my-none text-weight-bold">SSG</div>
              </div>
              <div class="col text-h6 ellipsis flex justify-center">
                <div class="text-h4 text-primary q-my-none text-weight-bold">
                  Election
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <!--login form-->
            <q-form @submit="loginUser">
              <div class="q-pl-xl q-pr-xl">
                <q-input
                  v-model="username"
                  dense
                  label="Username"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Input your Username']"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>

                <q-input
                  v-model="password"
                  dense
                  label="Password"
                  :type="isPwd ? 'password' : 'text'"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Input your password']"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>

                <div class="flex justify-center">
                  <q-btn
                    :ripple="false"
                    unelevated
                    rounded
                    dense
                    class="glossy q-mt-xs full-width"
                    label="Login"
                    color="primary"
                    type="submit"
                  />
                </div>
                <div
                  class="q-mt-md text-center text-caption text-weight-medium text-primary absolute-center-right"
                >
                  *To register your account and retrieve the password, proceed to Division
                  of Student Affairs, Alonto Hall, MSU Marawi Campus.
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({})
export default class Login extends Vue {
  username = "";
  password = "";
  isPwd = true;
  adminLogin = false;

  async loginUser() {
    if (this.username == "ssg" && this.password == "ssg") {
      await this.$router.replace("/P_Homepage");
      this.$q.notify({
        color: "positive",
        icon: "cloud_done",
        textColor: "white",
        position: "top",
        message: "You are Logged In!.",
      });
    } else {
      this.username = "";
      this.password = "";
      this.$q.notify({
        color: "secondary",
        textColor: "primary",
        position: "top",
        message: "Incorrect username or password.",
      });
    }
  }

  admin_user = "";
  admin_pass = "";

  async adminUser() {
    if (this.admin_user == "admin" && this.admin_pass == "admin") {
      await this.$router.replace("/admin");
      this.$q.notify({
        color: "positive",
        icon: "cloud_done",
        textColor: "white",
        position: "top",
        message: "You are Logged In!.",
      });
    } else {
      this.admin_user = "";
      this.admin_pass = "";
      this.$q.notify({
        color: "secondary",
        textColor: "primary",
        position: "top",
        message: "Incorrect username or password.",
      });
    }
  }
}
</script>

<style>
.head {
  background-color: transparent;
}
.wave {
  background-color: #e6ddd3;
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
