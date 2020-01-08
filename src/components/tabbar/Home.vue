<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <van-grid>
      <van-grid-item to="/home/newslist">
        <img src="../../assets/images/menu1.png" />
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../../assets/images/menu2.png" />
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../../assets/images/menu3.png" />
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../../assets/images/menu4.png" />
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../../assets/images/menu5.png" />
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../../assets/images/menu6.png" />
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeList: []
    }
  },
  methods: {
    async getSwipeList() {
      const { data: res } = await this.$http.get('api/getlunbo')
      if (res.status !== 0) {
        return this.$toast('获取轮播图数据失败')
      }
      this.swipeList = res.message
    }
  },
  created() {
    // 获取轮播图数据
    this.getSwipeList()
  }
}
</script>

<style>
.van-swipe {
  height: 200px;
}
.van-swipe img {
  width: 100%;
  height: 200px;
}
.van-grid-item {
    flex-basis:33.33% !important;
}
.van-grid-item img {
    width: 50%;
}
</style>
