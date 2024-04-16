<template>
<div>
  <TheNav></TheNav>
  <TheView></TheView>
</div>
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheView from './components/TheView.vue'
export default {
  name: 'App',
  components: {
    TheNav,
    TheView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
