<template>
  <div id="app">
    <h1>ParkingTimer</h1>
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'
export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto 0;
  max-width: 414px;
  max-height: 736px;
}
</style>
