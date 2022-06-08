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
import { mapActions, mapGetters, mapState } from 'vuex';
import { RepresentativeDto } from 'src/services/rest-api';
@Options({
  computed: {
    ...mapState('representative', ['allRepresentative']),
    ...mapGetters('representative', ['primePosition']),
  },
  methods: {
    ...mapActions('representative', ['getAllRepresentative']),
  },
})
export default class ChartComponent extends Vue {
  getAllRepresentative!: RepresentativeDto[];
  primePosition!: RepresentativeDto[];
  chart?: Chart;

  async mounted() {
    const labels = [
      'Ayaon, Norhani A.',
      'Solaiman, Abdul Moiz M.',
      'Hadji Ali, Nahed M.',
    ];
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
          data: [15000, 4000, 5000],
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
}
</script>
