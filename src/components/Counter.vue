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
      this.$emit('increate')
    },
    decrement () {
      this.$emit('decreate')
    }
  }
}
</script>

<style>

</style>
