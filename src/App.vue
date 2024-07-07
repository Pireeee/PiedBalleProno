<template>
  <div id="app" class="bg-secondary min-h-screen text-primary">
    <nav class="bg-primary text-secondary p-4">
      <router-link to="/" class="mr-4">Home</router-link>
      <router-link to="/submit" class="mr-4">Submit Prediction</router-link>
      <router-link to="/predictions">View Predictions</router-link>
    </nav>
    <div class="p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav a {
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
