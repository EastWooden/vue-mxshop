<template>
<div>
  <button @click = 'increment'>
    +
  </button>
  <button @click = 'decrement'>
    -
  </button>
  <div>child:{{num}}</div>
</div>
</template>
<script>
export default {
  props: [ 'num' ],
  methods: {
    increment () {
      this.$emit('increate')// 这个函数触发，父组件的num 值也会跟着改变
    },
    decrement () {
      this.$emit('decreate')
    }
  }
}
</script>

<style>

</style>
