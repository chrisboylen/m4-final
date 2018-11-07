<template>
  <div id="app">
    <header>MUSEUM PRINT VUER!</header>
    <Container />
  </div>
</template>

<script>
import runtimeEnv from '@mars/heroku-js-runtime-env';
import Container from './Container';

export default {
  name: 'app',
  data () {
    const env = runtimeEnv();
    return {
      msg: env.JS_RUNTIME_MESSAGE || 'JS_RUNTIME_MESSAGE is empty.'
    }
  },
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
  background: radial-gradient(rgb(153, 130, 99, 0.8), rgb(153, 130, 99, 0.4)), url("../assets/grunge.jpg");
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
header {
  background-color: #342c21;
  box-shadow: 0px 9px 33px 6px #272119;
  color: #ffa048;
  font-family: 'Russo One', sans-serif;
  font-size: 3rem;
  margin: 0 0 1rem 0;
  padding: 1rem;
}
</style>
