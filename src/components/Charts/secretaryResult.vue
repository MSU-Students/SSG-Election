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
import { IRepresentativeVote } from 'src/store/vote-ssg/state';
import { mapState } from 'vuex';
@Options({
  computed: {
    ...mapState('voteSsg', ['summary']),
  },
})
export default class ChartComponent extends Vue {
  summary!: IRepresentativeVote[];
  chart?: Chart;
  mounted() {
    const labels = this.executiveSecretary.map(
      (i) =>
        `${i.representative.student?.last_name}, ${i.representative.student?.first_name}`
    );
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Result',
          backgroundColor: [
            'rgb(179,0,0)',
            'rgb(33,186,69)',
            'rgb(231,200,24)',
            'rgb(3,87,142)',
            'rgb(232,65,44)',
            'rgb(46,109,86)',
          ],
          data: this.executiveSecretary.map((i) => i.votes.length),
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

  get executiveSecretary() {
    return this.summary.filter(
      (es) => es.representative.position == 'Executive Secretary'
    );
  }
}
</script>
