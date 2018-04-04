<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-left-content">
        <el-tabs v-model="activeName">
          <el-tab-pane name="first">
            <span slot="label" style='padding:0 1rem;'>点餐</span>
            点餐
          </el-tab-pane>
          <el-tab-pane name="second">
            <span slot="label" style='padding:0 1rem;'>挂单</span>
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖" name="third">
            <span slot="label" style='padding:0 1rem;'>外卖</span>
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        2
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  }

}
</script>
<style lang="stylus">
.pos {
  height: 100%;
  width: 100%;
  float: left;
  background: #eee;

  .el-row {
    height: 100%;

    .pos-left-content {
      border-right: solid 1px #ccc;
      height: 100%;
      background: #fff;
    }

  }
  }
.is-active {
  font-size:1.5rem;
  text-align :center;
}
</style>
