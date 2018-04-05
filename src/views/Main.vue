<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="rightContent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import LeftNav from '@/components/LeftNav';
export default {
  components: {
    LeftNav
  }
};
</script>
<style lang="stylus">
.main {
  height: 100%;

  .rightContent {
    float: left;
    width: 95%;
    height: 100%;
  }
}
</style>
