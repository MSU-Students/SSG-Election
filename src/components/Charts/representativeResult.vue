<template>
  <div>
    <canvas class="q-pl-sm" id="myChart" style="height: 350px; width: 50px"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Chart from "chart.js/auto";
@Options({})
export default class ChartComponent extends Vue {
  chart?: Chart;
  mounted() {
    const labels = ["Abdulbasit, Arifah U.", "Omar, Najmah A.", "Dayaan, Anisah I."];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Result",
          backgroundColor: ["rgb(179,0,0)", "rgb(33,186,69)", "rgb(231,200,24)"],
          data: [15, 21, 17],
          hoverOffset: 40,
        },
      ],
    };

    const wrapper = this.$el as HTMLElement;
    const canvas = wrapper.querySelector("canvas") as HTMLCanvasElement;
    this.chart = new Chart(canvas, {
      type: "doughnut",
      data: data,
      options: {
        aspectRatio: 1,
        responsive: true,
        cutout: 90,
        maintainAspectRatio: false,
      },
    });
  }
}
</script>
