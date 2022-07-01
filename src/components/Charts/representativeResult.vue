<template>
  <div>
    <canvas class="q-pl-sm" id="myChart" style="height: 350px; width: 50px"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Chart from 'chart.js/auto';
import { AUser } from 'src/store/auth/state';
import { ICandidateVote } from 'src/store/vote-rep/state';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('voteRep', ['allVoteRep', 'rep1', 'rep2', 'summary']),
    ...mapState('auth', ['currentUser']),
  },
  methods: {
    ...mapActions('voteRep', ['getAllVoteRep']),
  },
})
export default class ChartComponent extends Vue {
  chart?: Chart;
  getAllVoteRep!: () => Promise<void>;
  summary!: ICandidateVote[];
  currentUser!: AUser;

  async mounted() {
    await this.getAllVoteRep();
    const labels = this.collegeCandidates.map(
      (i) => `${i.candidate.student?.last_name}, ${i.candidate.student?.first_name}`
    );
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Result',
          backgroundColor: [
            'rgb(187,28,33)',
            'rgb(247,164,0)',
            'rgb(15,76,130)',
            'rgb(108,201,193)',
            'rgb(70,74,39)',
            'rgb(113,134,161)',
            'rgb(229,97,14)',
            'rgb(224,186,137)',
            'rgb(213,147,131)',
            'rgb(146,57,25)',
          ],
          data: this.collegeCandidates.map((i) => i.votes.length),
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

  get collegeName() {
    return this.currentUser?.student.college || '';
  }
  get collegeCandidates() {
    return this.summary.filter((c) => c.candidate.student?.college == this.collegeName);
  }
}
</script>
