<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Prediction Details</h1>
      <div v-if="prediction" class="bg-primary text-secondary p-4 rounded">
        <p>Match: {{ matchInfo }}</p>
        <p>Result: <span v-html="prediction.result"></span></p>
      </div>
      <div v-else>
        <p>Prediction not found.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        prediction: null,
        matches: [
          { id: 1, team1: 'Team A', team2: 'Team B', date: '2024-07-10' },
          { id: 2, team1: 'Team C', team2: 'Team D', date: '2024-07-11' },
          // Add more matches as needed
        ],
      };
    },
    created() {
      this.loadPrediction();
    },
    methods: {
      loadPrediction() {
        const predictions = JSON.parse(localStorage.getItem('predictions')) || [];
        this.prediction = predictions.find(p => p.id === parseInt(this.id));
      },
    },
    computed: {
      matchInfo() {
        if (this.prediction) {
          const match = this.matches.find(m => m.id === this.prediction.matchId);
          return match ? `${match.team1} vs ${match.team2}` : 'Unknown Match';
        }
        return '';
      },
    },
  };
  </script>
  