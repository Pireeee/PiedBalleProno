<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Submit Your Prediction</h1>
    <form @submit.prevent="submitPrediction" class="space-y-4">
      <div>
        <label for="match" class="block text-sm font-medium text-primary">Match:</label>
        <select v-model="prediction.matchId" class="mt-1 block w-full p-2 border border-gray-300 rounded">
          <option v-for="match in matches" :value="match.id" :key="match.id">
            {{ match.id }}: {{ match.team1 }} vs {{ match.team2 }}
          </option>
        </select>
      </div>
      <div>
        <label for="result" class="block text-sm font-medium text-primary">Predicted Result:</label>
        <input type="text" v-model="prediction.result" class="mt-1 block w-full p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" class="bg-primary text-secondary p-2 rounded">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prediction: {
        matchId: null,
        result: '',
      },
      matches: [
        { id: 1, team1: 'Team A', team2: 'Team B', date: '2024-07-10' },
        { id: 2, team1: 'Team C', team2: 'Team D', date: '2024-07-11' },
        // Add more matches as needed
      ],
    };
  },
  methods: {
    submitPrediction() {
      const predictions = JSON.parse(localStorage.getItem('predictions')) || [];
      const newPrediction = { ...this.prediction, id: Date.now() };
      predictions.push(newPrediction);
      localStorage.setItem('predictions', JSON.stringify(predictions));
      this.prediction.matchId = null;
      this.prediction.result = '';
      alert('Prediction submitted successfully!');
    },
  },
};
</script>
