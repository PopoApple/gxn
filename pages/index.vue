<template>
  <div>
    <div class="main-content">
      <section class="float-wrap sec">
        <div class="left carousel box">轮播图</div>
        <div class="right side-box">
          <div class="login box">
            登录框
          </div>
          <div class="hot-news box">
            热点资讯
          </div>
          <div class="lastest-notice box">
            最新公告
          </div>
        </div>
        <!-- 首页
        <div class="carousel" @click="$router.push('/article/1')">轮播图</div>
        <Login/>
        <a href="/oneImg">一张图</a> -->
      </section>
      <section class="box sec" style="height: 360px;">
          建材信息
      </section>
      <section class="box sec" style="height: 360px;">
        招采信息
      </section>
      <section class="box sec" style="height: 100px;">
        一张图看懂广新纳
      </section>
      <section class="box sec" style="height: 360px;">
        建筑社区
      </section>
      <section class="box sec" style="height: 360px;">
        我需要、我提供
      </section>
      <section class="box sec" style="height: 100px;">
        一张图看懂广新纳
      </section>
      <section class="box sec" style="height: 360px;">
        找工作
      </section>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import Info from '@/components/Info'

export default {
  meta: {
    name: '首页'
  },
//   components: {
//     Info,
//   },
//   asyncData ({ params }) {
//     return new Promise((res) => {
//       setTimeout(() => {
//         res( { info: 'xxxxx' })
//       }, 3000)
//     })
//  },
//  data() {
//    return { title: '哈哈哈' }
//  }
}
</script>

<style scoped>
.carousel {
  width: 800px;
  height: 500px;
}
.side-box {
  width: 390px;
  margin-left: 10px;
}
.login {
  height: 180px;
}
.hot-news {
  height: 240px;
  margin-top: 10px;
}
.lastest-notice {
  height: 60px;
  margin-top: 10px;
}
</style>
