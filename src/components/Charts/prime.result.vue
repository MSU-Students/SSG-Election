<template>
  <div>
    <canvas
      class="q-pl-sm"
      id="myChart"
      style="height: 350px; width: 50px"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Chart from 'chart.js/auto';
import { mapState } from 'vuex';
import { IRepresentativeVote } from 'src/store/vote-ssg/state';
@Options({
  computed: {
    ...mapState('voteSsg', ['summary']),
  },
})
export default class ChartComponent extends Vue {
  summary!: IRepresentativeVote[];
  chart?: Chart;

  async mounted() {
    const labels = this.primeMinister.map(
      (i) =>
        `${i.representative.student?.last_name}, ${i.representative.student?.first_name}`
    );
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Result',
          backgroundColor: [
            'rgb(231,200,24)',
            'rgb(3,87,142)',
            'rgb(232,65,44)',
            'rgb(46,109,86)',
            'rgb(179,0,0)',
            'rgb(33,186,69)',
          ],
          data: this.primeMinister.map((i) => i.votes.length),
          hoverOffset: 40,
        },
      ],
    };

    const wrapper = this.$el as HTMLElement;
    const canvas = wrapper.querySelector('canvas') as HTMLCanvasElement;
    this.chart = new Chart(canvas, {
      type: 'doughnut',
      data: data,
      options: {
        aspectRatio: 1,
        responsive: true,
        cutout: 90,
        maintainAspectRatio: false,
      },
    });
  }

  get primeMinister() {
    return this.summary.filter(
      (pm) => pm.representative.position == 'Prime Minister'
    );
  }
}
</script>
