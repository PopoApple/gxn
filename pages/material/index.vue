<template>
  <div class="warp">
    <div class="float-wrap sec">
      <section class="left menu box">多级菜单</section>
      <section class="left carousel box">轮播图</section>
      <aside class="right side">
        <div class="login box">
          登录框 
        </div>
        <div class="hot-news box">
          热点资讯
        </div>
      </aside>
    </div>
    <section class="box sec" style="height: 360px;">
        建材分类板块
    </section>
    <section class="box sec" style="height: 360px;">
        建材分类板块
    </section>
    <section class="box sec" style="height: 360px;">
        建材分类板块
    </section>
    <section class="box sec" style="height: 360px;">
        建材分类板块
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
// import Info from '@/components/Info'

export default {
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
.warp {
  margin-top: 20px;
}
.menu {
  width: 290px;
  height: 430px;
}
.carousel {
  width: 560px;
    height: 400px;
    margin: 30px 0 0 10px;
}
.side {
  width: 330px;
  margin-left: 10px;
}
.login {
  height: 180px;
}
.hot-news {
  height: 240px;
  margin-top: 10px;
}
</style>
