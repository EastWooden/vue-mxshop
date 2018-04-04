<template>
  <div class="left-nav">
    <ul>
      <li><a @click.prevent="jump('/')"><i class="iconfont icon-icon-test"></i><span>收银</span></a></li>
      <li><a @click.prevent="jump('/shop')"><i class="iconfont icon-dianpu"></i><span>店铺</span></a></li>
      <li><a href=""><i class="iconfont icon-shangpin"></i><span>商品</span></a></li>
      <li><a href=""><i class="iconfont icon-membership-card_icon"></i><span>会员</span></a></li>
      <li><a href=""><i class="iconfont icon-qianggou"></i><span>抢购</span></a></li>
      <li><a href=""><i class="iconfont icon-tongji4"></i><span>统计</span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  methods: {
    jump (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="stylus" scoped>
  .left-nav
    width :5%
    height:100%
    background : #1D8ce0
    float :left
    ul
      li
        border-bottom: solid 1px #20a0ff
        text-align:center
        a
          color:#fff
          display: inline-block
          text-decoration : none
          font-weight :200
          padding-top:1rem
          padding-bottom:1rem
          cursor :pointer
          .iconfont
            display:block
            font-size :2rem
</style>
