<template>
  <q-layout>
    <q-img class="wave" src="~assets/images/image.png" />
    <div class="row" style="height: 95vh">
      <div class="col-8 col-md-6 flex justify-center content-center gt-sm">
        <q-img src="~assets/images/v.svg" class="responsive" alt="bg-image" />
      </div>

      <div
        v-bind:class="{
          'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
        }"
        class="col-12 col-md-6 flex content-center q-pt-lg"
      >
        <q-card
          class="shadow-20"
          v-bind:style="$q.screen.lt.sm ? { width: '70%' } : { width: '50%' }"
        >
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="../assets/images/ssg.png" alt="logo" />
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
            <!---------------------------login form--------------------------->
            <q-form @submit="loginUser()">
              <div class="q-pl-lg q-pr-lg">
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
import { Vue, Options } from 'vue-class-component';
import { AUser } from 'src/store/auth/state';
import { mapActions, mapState } from 'vuex';

@Options({
  methods: {
    ...mapActions('auth', ['login', 'authUser']),
  },
  computed: {
    ...mapState('auth', ['currentUser']),
  },
})
export default class Login extends Vue {
  login!: (auth: { userName: string; password: string }) => Promise<AUser>;
  currentUser!: AUser;

  username = '';
  password = '';
  isPwd = true;

  async loginUser() {
    try {
      await this.login({
        userName: this.username,
        password: this.password,
      });
      if (this.currentUser.userType == 'admin') {
        await this.$router.replace('/Homepage');
        this.$q.notify({
          position: 'bottom-right',
          type: 'positive',
          message: 'You are logged in',
        });
      } else if (this.currentUser.userType == 'voter') {
        await this.$router.replace('/V_Homepage');
        this.$q.notify({
          position: 'bottom-right',
          type: 'positive',
          message: 'You are logged in',
        });
      } else if (this.currentUser.userType == 'ssg') {
        await this.$router.replace('P_Homepage');
        this.$q.notify({
          position: 'bottom-right',
          type: 'positive',
          message: 'You are logged in',
        });
      } else if (this.currentUser.userType == 'rep') {
        await this.$router.replace('/R_Homepage');
        this.$q.notify({
          position: 'bottom-right',
          type: 'positive',
          message: 'You are logged in',
        });
      }
    } catch (error) {
      this.$q.notify({
        type: 'negative',
        message: 'Wrong Username or Password!',
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
