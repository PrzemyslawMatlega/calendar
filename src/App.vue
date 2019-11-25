<template>
  <div id="app">
      <router-view>
      </router-view>
  </div>
</template>

<script>
  import TheCalendar from './components/TheCalendar'

  export default {
    name: 'App',
    data() {
      return {
      }
    },
  
    components: {
     TheCalendar
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
    margin-top: 60px;
  }
</style>
