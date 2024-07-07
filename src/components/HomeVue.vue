<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Football Matches</h1>
    <ul class="space-y-2">
      <li v-for="match in matches" :key="match.id" class="bg-primary text-secondary p-4 rounded">
        {{ match.team1 }} vs {{ match.team2 }} - {{ match.date }}
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      matches: [
        { id: 1, team1: 'Team A', team2: 'Team B', date: '2024-07-10' },
        { id: 2, team1: 'Team C', team2: 'Team D', date: '2024-07-11' },
        // Add more matches as needed
      ],

    };
  },
};
</script>
