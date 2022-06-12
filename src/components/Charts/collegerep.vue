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
    const labels = this.allCollegeRepresentative.map(
      (i) =>
        `${i.candidate.student?.last_name}, ${i.candidate.student?.first_name}`
    );
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Result',
          backgroundColor: [
            'rgb(	44, 182, 125)',
            'rgb(255, 110, 108)',
            'rgb(	251, 221, 116)',
            'rgb(103, 86, 140)',
            'rgb(	171, 209, 198)',
            'rgb(	139, 211, 221)',
            'rgb(33,186,69)',
          ],
          data: this.allCollegeRepresentative.map((i) => i.votes.length),
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
