<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Counter v-bind:num = 'num' @increate = 'increate' @decreate = 'decreate'></Counter>
    <div>parent:{{num}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'

export default {
  data () {
    return {
      num: 10
    }
  },
  name: 'App',
  components: {
    HelloWorld,
    Counter
  },
  methods: {
    increate () {
      this.num++
    },
    decreate () {
      this.num--
    }
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
