<template>
  <q-page>
      <!-----------Recent Election Ballot-------------->
      <div class="row q-pt-md q-pa-md">
        <q-table
          class="my-sticky-header-table"
          title="Account List"
          :grid="$q.screen.xs"
          :columns="Column"
          :rows="adminUser"
          row-key="name"
          :rows-per-page-options="[0]"
          :filter="filter"
        >
          <template v-slot:top-right>
            <div class="q-pa-md q-gutter-sm row">
              <q-input
                outlined
                rounded
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>

              <q-btn
                label="Add Account"
                color="primary"
                dense
                flat
                icon="add"
                @click="addNewAdmin = true"
              />
              <q-dialog v-model="addNewAdmin" persistent>
                <q-card style="width: 700px; max-width: 100vw">
                  <q-card-section class="row">
                    <q-toolbar>
                      <div class="text-h6">Create New Account</div>
                      <q-space />
                      <q-btn
                        flat
                        round
                        dense
                        icon="close"
                        @click="resetModelAdmin()"
                        v-close-popup
                      />
                    </q-toolbar>
                  </q-card-section>

                  <q-card-section class="q-gutter-sm">
                    <div class="q-gutter-x-xs q-gutter-y-lg row">
                      <div class="col-12 col-md">
                        <q-input
                          v-model="inputAdmin.first_name"
                          dense
                          outlined
                          label="First Name"
                          lazy-rules
                          :rules="[(val) => (val && val.length > 0) || '']"
                        />
                      </div>
                      <div class="col-12 col-md">
                        <q-input
                          v-model="inputAdmin.last_name"
                          dense
                          outlined
                          label="Last Name"
                          lazy-rules
                          :rules="[(val) => (val && val.length > 0) || '']"
                        />
                      </div>
                    </div>
                    <div class="q-gutter-x-xs q-gutter-y-lg">
                      <q-input
                        v-model="inputAdmin.position"
                        dense
                        outlined
                        label="Position"
                      />
                      <q-input
                        v-model="inputUser.username"
                        dense
                        outlined
                        label="Username"
                      />
                      
                      <q-input
                        v-model="inputUser.password"
                        dense
                        outlined
                        label="Password"
                        lazy-rules
                        :rules="[(val) => (val && val.length > 0) || '']"
                      />
                      <q-input
                        v-model="inputUser.refreshToken"
                        dense
                        type="password"
                        outlined
                        label="Signup Code"
                        lazy-rules
                        :rules="[(val) => (val && val.length > 0) || '']"
                      />
                    </div>
                    <div align="right">
                      <q-btn
                        flat
                        label="Cancel"
                        color="red-10"
                        @click="resetModelAdmin()"
                        v-close-popup
                      />
                      <q-btn
                        flat
                        label="Save"
                        color="primary"
                        type="submit"
                        @click="onaddAdminAccount()"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </template>

          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn
                color="red-10"
                icon="delete"
                size="sm"
                class="q-ml-sm"
                flat
                round
                dense
                @click="deleteSpecificAdminAccount(props.row)"
              />

              <q-btn
              round
              color="primary"
              icon="more_vert"
              size="md"
              flat
              dense
              @click="openDetailDialog(props.row)"
              ><q-tooltip class="bg-primary" :offset="[10, 10]">
                Details
              </q-tooltip></q-btn
            >
            <q-dialog v-model="showDetails">
              <div
                v-bind:class="{
                  'justify-center':
                    $q.screen.md || $q.screen.sm || $q.screen.xs,
                }"
                class="col-12 col-md-6 flex content-center q-pt-lg"
                v-if="inputUser"
              >
                <q-card
                  class="shadow-10"
                  color="primary"
                  v-bind:style="
                    $q.screen.lt.sm ? { width: '100%' } : { height: '100%' }
                  "
                >
                  <q-card-section>
                    <div class="q-pt-lg">
                      <div class="col text-h6 ellipsis flex justify-center">
                        <div
                          class="text-h4 text-warning q-my-none text-weight-bold"
                        >
                          <div
                            class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-uppercase"
                          >
                            {{ inputUser.admin?.first_name }}
                            {{ inputUser.admin?.last_name }}
                          </div>
                        </div>
                      </div>
                      <div
                        class="text-body text-center q-mt-sm q-mb-xs text-weight-bold text-uppercase"
                      >
                        {{ inputUser.admin?.position }}
                      </div>
                      <q-separator />
                      <div class="q-gutter-sm row">
                        <div class="col-md-4 q-pa-sm">
                          <div class="text-caption q-pt-sm">Username:</div>
                          <div class="text-bold q-mt-sm q-mb-xs text-primary">
                            {{ inputUser.username }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </q-dialog>
            </q-td>
          </template>
        </q-table>
      </div>
      <!----------------------------------------------->
    
  </q-page>
</template>

<script lang="ts">
import { Admin } from 'src/interfaces/admin.interface';
import { AdminDto, UserDto } from 'src/services/rest-api';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapGetters, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('admin', ['allAdmin']),
    ...mapState('account', ['allAccount']),
    ...mapGetters('account', ['adminUser']),
  },
  methods: {
    ...mapActions('admin', [
      'addAdmin',
      'editAdmin',
      'deleteAdmin',
      'getAllAdmin',
    ]),

    ...mapActions('account', ['addAccount', 'getAllUser']),
  },
})
export default class ManageElection extends Vue {
  adminUser!: UserDto[];
  addAccount!: (payload: UserDto) => Promise<void>;
  addAdmin!: (payload: AdminDto) => Promise<void>;
  editAdmin!: (payload: AdminDto) => Promise<void>;
  deleteAdmin!: (payload: AdminDto) => Promise<void>;
  getAllAdmin!: () => Promise<void>;
  getAllUser!: () => Promise<void>;
  allAdmin!: AdminDto[];

  async mounted() {
    await this.getAllAdmin();
    await this.getAllUser();
  }

  Column = [
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: any) => row.admin?.first_name + ' ' + row.admin?.last_name,
      sortable: true,
    },
    {
      name: 'position',
      align: 'center',
      label: 'Position',
      field: (row: any) => row.admin?.position,
      sortable: true,
    },
  ];
  filter = '';
  showDetails = false;
  addNewAdmin = false;
  editRowAdmin = false;
  dense = true;

  student_type = ['Regular', 'Representative'];
  fitModes = ['scale-down'];

  inputUser: UserDto = {
    username: '',
    password: '',
    userType: 'admin',
    status: '',
  };

  inputAdmin: AdminDto = {
    first_name: '',
    last_name: '',
    position: '',
  };

  async onaddAdminAccount() {
    const profile: any = await this.addAdmin({
      ...this.inputAdmin,
    });
    await this.addAccount({
      ...this.inputUser,
      admin: profile.admin_id,
    });
    this.addNewAdmin = false;
    this.resetModelAdmin();
    this.$q.notify({
      type: 'positive',
      message: 'Account is Successfully Added.',
    });
  }

  openDetailDialog(val: UserDto) {
    this.showDetails = true;
    this.inputUser = { ...val };
  }

  deleteSpecificAdminAccount(val: AdminDto) {
    this.$q
      .dialog({
        message: 'Are you sure you want to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteAdmin(val as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted.',
        });
      });
  }

  resetModelAdmin() {
    this.inputAdmin = {
      first_name: '',
      last_name: '',
      position: '',
    };
  }
}
</script>

<style>
.my-sticky-header-table {
  height: 100%;
  max-height: 3000px;
  width: 100%;
  max-width: 3500px;
}
</style>
