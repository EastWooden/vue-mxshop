<template>
  <div>
  <div>这是info页</div>
  <router-link to='/info/title'>去title页面</router-link>
  <router-link to='/info/image'>去image页面</router-link>
  <div>
   <router-view></router-view>
  </div>
  <router-link to='/cart'>跳转到购物车页面</router-link>
  <button @click='jump()'>跳转到购物车页面</button>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      // this.$router.push('/cart')  // 直接跳转
      // this.$router.push({path:'/cart?nameid=123456'}) //利用query传递参数
      this.$router.go(-1) // 向后跳转
    }
  }
}
</script>

<style>

</style>
