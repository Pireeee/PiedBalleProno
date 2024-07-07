<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">All Predictions</h1>
    <ul class="space-y-2">
      <li v-for="prediction in predictions" :key="prediction.id" class="bg-primary text-secondary p-4 rounded flex justify-between items-center">
        <div>
          <div v-html="formatPrediction(prediction)"></div>
        </div>
        <router-link :to="`/prediction/${prediction.id}`" class="bg-secondary text-primary p-2 rounded">
          View Details
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      predictions: [],
      matches: [
        { id: 1, team1: 'Team A', team2: 'Team B', date: '2024-07-10' },
        { id: 2, team1: 'Team C', team2: 'Team D', date: '2024-07-11' },
        // Add more matches as needed
      ],
    };
  },
  created() {
    this.loadPredictions();
  },
  methods: {
    loadPredictions() {
      this.predictions = JSON.parse(localStorage.getItem('predictions')) || [];
    },
    formatPrediction(prediction) {
      const match = this.matches.find(m => m.id === prediction.matchId);
      return match ? `${match.team1} vs ${match.team2}: ${prediction.result}` : 'Unknown Match';
    },
  },
};
</script>
