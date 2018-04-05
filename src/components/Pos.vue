<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-left-content">
        <el-tabs v-model="activeName">
          <el-tab-pane name="first">
            <span slot="label" style='padding:0 1rem;'>点餐</span>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column fixed prop="goodsName" label="商品" width="150">
              </el-table-column>
              <el-table-column prop="count" label="数量" width="120">
              </el-table-column>
              <el-table-column prop="price" label="金额" width="120">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                  <el-button type="text" size="small" @click="addCount(scope.row)">增加</el-button>
                  <!-- <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button> -->
                </template>
              </el-table-column>
            </el-table>
            <div class="total-content">
              <p class="total-info">
                <span>数量：{{totalCount}}</span>
                <span>总价：{{totalMoney | coverPrice}}</span>
              </p>
            </div>
            <div class="opreate-btn-box">
              <button type="button" class="el-button el-button--warning">
                挂单
              </button>
              <button type="button" class="el-button el-button--danger" @click="dropTableData()">
                删除
              </button>
              <button type="button" class="el-button el-button--success" @click="handlejiezhang()">
                结账
              </button>
            </div>
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
        <div class="often-goods-content">
          <div class="box-title">
            <p>常用商品</p>
          </div>
          <div class="often-goods-list">
            <ul>
              <li v-for="(goods,index) in goodsList" @click="addorderList(goods)" :key="index">
                <span>{{goods.goodsName}}</span>
                <span class="oftengoods-price">{{goods.price | coverPrice}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs v-model="activeNamegoodstype">
            <el-tab-pane name="first">
              <span slot="label" style='padding:0 1rem;'>汉堡</span>
              <div class="goodslist-box">
                <ul>
                  <li v-for="(item,index) in typeGoodsList[0]" @click="addorderList(item)" :key="index">
                    <div class="goods-img">
                      <img :src="item.goodsImg" alt="">
                    </div>
                    <div class="goodsInfo">
                      <h3>{{item.goodsName}}</h3>
                      <span>{{item.price | coverPrice}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane name="second">
              <span slot="label" style='padding:0 1rem;'>小吃</span>
              <div class="goodslist-box">
                <ul>
                  <li v-for="(item,index) in typeGoodsList[1]" @click="addorderList(item)" :key="index">
                    <div class="goods-img">
                      <img :src="item.goodsImg" alt="">
                    </div>
                    <div class="goodsInfo">
                      <h3>{{item.goodsName}}</h3>
                      <span>{{item.price | coverPrice}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane name="third">
              <span slot="label" style='padding:0 1rem;'>饮料</span>
              <div class="goodslist-box">
                <ul>
                  <li v-for="(item,index) in typeGoodsList[2]" @click="addorderList(item)" :key="index">
                    <div class="goods-img">
                      <img :src="item.goodsImg" alt="">
                    </div>
                    <div class="goodsInfo">
                      <h3>{{item.goodsName}}</h3>
                      <span>{{item.price | coverPrice}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane name="fourth">
              <span slot="label" style='padding:0 1rem;'>套餐</span>
              <div class="goodslist-box">
                <ul>
                  <li v-for="(item,index) in typeGoodsList[3]" @click="addorderList(item)" :key="index">
                    <div class="goods-img">
                      <img :src="item.goodsImg" alt="">
                    </div>
                    <div class="goodsInfo">
                      <h3>{{item.goodsName}}</h3>
                      <span>{{item.price | coverPrice}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      activeName: 'first', // 控制标签默认页面
      activeNamegoodstype: 'first', // 控制标签默认页面
      tableData: [], // 表格数据
      goodsList: [], // 获取的数据goodslist数据
      totalCount: 0, // 总数量
      totalMoney: 0, // 总价格
      typeGoodsList: [] // typegoods商品数组
    };
  },
  filters: {
    coverPrice (value) {
      return `￥${value}`;
    }
  },
  mounted () {
    this.getGoodsList();
    this.getTypeGoods();
  },
  methods: {
    // 获取常用商品列表数据
    getGoodsList () {
      axios
        .get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(res => {
          let result = res.data;
          this.goodsList = result;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 获取typegoods商品列表
    getTypeGoods () {
      axios
        .get('http://jspang.com/DemoApi/typeGoods.php')
        .then(res => {
          let result = res.data;
          this.typeGoodsList = result;
        })
        .catch(error => {
          this.$message({
            message: '哇！出错了',
            type: 'dangerous'
          });
          console.log(error);
        });
    },
    addorderList (goods) {
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        // 判断是否存在
        if (goods.goodsId === this.tableData[i].goodsId) {
          // 存在
          isHave = true;
        }
      }
      // 如果存在就进行数量添加
      if (isHave) {
        let arr = this.tableData.filter(item => item.goodsId === goods.goodsId);
        console.log(arr);
        arr[0].count++;
      } else {
        // 不存在就加入到tableData
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getALLmoney();
    },
    // 计算总的价格和总数量
    getALLmoney () {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        for (let i = 0; i < this.tableData.length; i++) {
          this.totalCount += this.tableData[i].count;
          this.totalMoney += this.tableData[i].count * this.tableData[i].price;
        }
      }
    },
    // 表格操作
    handleClick (row) {
      console.log(row);
    },
    // 删除操作
    deleteRow (index, rows) {
      rows.splice(index, 1);
      this.getALLmoney();
    },
    // 表格增加操作
    addCount (row) {
      row.count++;
      this.getALLmoney();
    },
    // 清空表格数据
    dropTableData () {
      this.tableData = [];
      this.getALLmoney();
    },
    handlejiezhang () {
      if (this.tableData.length !== 0) {
        this.$message({
          message: '结账成功',
          type: 'success'
        });
        this.tableData = [];
        this.getALLmoney();
      } else {
        this.$message({
          message: '你还没有选取商品哦',
          type: 'warning'
        });
      }
    }
  }
};
</script>
<style lang="stylus">
@import '../styles/common.styl';

.pos {
  height: 100%;
  width: 100%;
  float: left;
  background: rgba(233, 233, 233, 0.4);

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
  font-size: 1.5rem;
  text-align: center;
}

.el-table thead {
  color: #555;

  th {
    background-color: rgba(232, 232, 232, 0.4);
    white-space: nowrap;
    text-align: left;
  }
}

.el-tabs__nav-wrap::after {
  height: 1px;
}

.total-content {
  width: 100%;
  height: 4rem;
  border-bottom: solid 1px $borderCcolor;

  .total-info {
    text-align: right;
    line-height: 4rem;

    span {
      margin-right: 2em;
    }
  }
}

.opreate-btn-box {
  padding-top: 1rem;
  text-align: center;
}

.often-goods-content {
  width: 100%;

  .box-title {
    border-bottom: solid 1px $borderCcolor;
    height: 3.3rem;
    background-color: #fff;

    p {
      line-height: 3.3rem;
      padding-left: 1rem;
      color: $fontColor;
    }
  }

  .often-goods-list {
    padding: 1rem 1rem 2rem 3rem;
    background-color: #fff;
    border-bottom: solid 1px $borderCcolor;

    ul {
      overflow: hidden;

      li {
        float: left;
        border: solid 1px $borderCcolor;
        margin-right: 1rem;
        padding: 1rem;
        margin-top: 1rem;
        cursor: pointer;

        span {
          color: $fontColor;

          &.oftengoods-price {
            color: #58B7FF;
          }
        }
      }
    }
  }
}

.goodslist-box {
  padding: 1rem 1rem 2rem 3rem;

  ul {
    overflow: hidden;

    li {
      background: #fff;
      height: auto;
      padding: 0.5rem 3rem 0.5rem 0.5rem;
      margin-right: 1rem;
      float: left;
      margin-top: 1rem;
      cursor: pointer;

      .goods-img {
        float: left;
        resize: cover;

        img {
          width: 9.8rem;
          height: 9.8rem;
        }
      }

      .goodsInfo {
        padding-left: 10px;
        float: right;

        h3 {
          font-size: 1.5rem;
          color: brown;
        }

        span {
          color: $fontColor;
          font-size: 1.4rem;
          padding-top: 1rem;
          display: inline-block;
        }
      }
    }
  }
}
</style>
