<template>
  <q-page>
    <chart />
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
