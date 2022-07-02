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
import { AUser } from 'src/store/auth/state';
import { ICandidateVote } from 'src/store/vote-rep/state';
import { mapActions, mapGetters, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('voteRep', ['allVoteRep', 'rep1', 'rep2', 'summary']),
    ...mapState('auth', ['currentUser']),
    ...mapGetters('voteRep', ['collegeRepresentatives']),
  },
  methods: {
    ...mapActions('voteRep', ['getAllVoteRep']),
  },
})
export default class ChartComponent extends Vue {
  chart?: Chart;
  collegeRepresentatives!: ICandidateVote[];
  getAllVoteRep!: () => Promise<void>;
  summary!: ICandidateVote[];
  currentUser!: AUser;

  async mounted() {
    await this.getAllVoteRep();
    const labels = this.summary.map(
      (i) =>
        `${i.candidate.student?.last_name}, ${i.candidate.student?.first_name}`
    );
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Result',
          backgroundColor: [
            'rgb(165,42,42)',
            'rgb(178,34,34)',
            'rgb(220,20,60)',
            'rgb(255,0,0)',
            'rgb(255,99,71)',
            'rgb(255,127,80)',
            'rgb(205,92,92)',
            'rgb(240,128,128)',
            'rgb(233,150,122)',
            'rgb(250,128,114)',
            'rgb(255,160,122)',
            'rgb(255,69,0)',
            'rgb(255,215,0)',
            'rgb(184,134,11)',
            'rgb(233,150,122)',
            'rgb(250,128,114)',
            'rgb(255,160,122)',
            'rgb(255,69,0)',
            'rgb(255,140,0)',
            'rgb(255,165,0)',
            'rgb(255,215,0)',
            'rgb(184,134,11)',
            'rgb(218,165,32)',
            'rgb(238,232,170)',
            'rgb(189,183,107)',
            'rgb(240,230,140)',
            'rgb(128,128,0)',
            'rgb(255,255,0)',
            'rgb(154,205,50)',
            'rgb(85,107,47)',
            'rgb(107,142,35)',
          ],
          data: this.summary.map((i) => i.votes.length),
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

  get allCollegeRepresentative() {
    return this.collegeRepresentatives.filter((i) => !!i.votes.length);
  }
}
</script>
