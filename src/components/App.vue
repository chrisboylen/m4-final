<template>
  <div id="app">
    <header>MUSEUM PRINT VUER!</header>
    <Container />
  </div>
</template>

<script>
import Container from './Container';

export default {
  name: 'app',
  components: {
    Container
  }
}
</script>

<style>
body {
  background-color: #998263fc;
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
header {
  background-color: #342c21;
  color: #ffa048;
  font-family: 'Russo One', sans-serif;
  font-size: 3rem;
  margin: 0 0 1rem 0;
  padding: 1rem;
}
</style>
