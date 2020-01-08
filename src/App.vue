<template>
  <div id="app">
    <!-- 头部区域 -->
    <van-nav-bar title="黑马程序员.vant" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 内容主体区域路由占位-->
    <router-view></router-view>
    <!-- tabbar底部区域 -->
    <van-tabbar v-model="active" route v-if="$route.path !=='/shopcar'">
      <van-tabbar-item to="/home">
        <i slot="icon" class="iconfont icon-index-fill"></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/member">
        <i slot="icon" class="iconfont icon-icon_zhanghao"></i>
        <span>会员</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/shopcar" icon="cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item  to="/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // tabbar对应的激活的索引,是从0开始的
      active: 0
    }
  },
  methods: {
    // 点击返回按钮的方法
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.van-nav-bar {
  background-color: #1989fa;
}
.van-nav-bar__text,
.van-icon.van-icon-arrow-left.van-nav-bar__arrow,
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar__title {
  font-size: 14px;
}
</style>
