<template>
  <header>
    <div class="top-bar box">
      <div class="main-content float-wrap">
        <div class="left">
          欢迎进入广新纳~
        </div>
        <div class="right">
          导航、工具按钮
        </div>
      </div>
    </div>
    <div class="box">
      <div class="main-content">
        <div class="header-main float-wrap">
          <div class="left">
            Logo
          </div>
          <div class="right">
            搜索
            <button class="btn" @click="$router.push(btnInfo.path)">{{ btnInfo.name }}</button>
          </div>
        </div>
        <div class="header-bottom float-wrap">
          <div class="left">
            <TheNav />
          </div>
          <div class="right">
            电话
          </div>
        </div>
      </div>
    </div>
      <!-- <div @click="$router.push('/')">
        logo
      </div>
      <nuxt-link to="/history">浏览记录</nuxt-link>
      <el-button @click="$router.push('/searchResult/material')">搜索</el-button>
      <el-button v-if="btnInfo" class="btn" @click="$router.push(btnInfo.path)">{{ btnInfo.name }}</el-button> -->
  </header>
</template>

<script>
// import NuxtLogo from '~/assets/images/logo.svg?inline'
const btnInfoArry = [
  {path: '/publishGoods', name: '发布商品信息', forPaths: ['/material']},
  {path: '/publishJob', name: '发布招聘信息', forPaths: [ /\/job(\/\*)*/]},
  {path: '/publishNeed', name: '发布需求信息', forPaths: [ '/needAndGive/need', '/publishNeed', /\/needDetail(\/\*)*/]},
  {path: '/publishGive', name: '发布供应信息', forPaths: [ '/needAndGive/give', '/publishGive', /\/giveDetail(\/\*)*/]}
]
export default {
  computed: {
    btnInfo() {
      let path = this.$nuxt.$route.path
      for (let i = 0; i < btnInfoArry.length; i++) {
        let bi = btnInfoArry[i]
        if (bi.forPaths.findIndex(d => {
          return (typeof d === 'string' && d === path) || (typeof d === 'object' && d.test(path))
        }) >= 0) {
          return bi
        }
      }
      return {path: '/', name: '发布信息'}
    }
  }
  // components: {
  //   NuxtLogo
  // },
  // data() {
  //   return {
  //     onTop: true
  //   }
  // },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  // methods: {
  //   handleScroll() {
  //     this.onTop = window.pageYOffset < 60
  //   }
  // }
}
</script>
<style scoped>
.header-main {
  height: 40px;
  line-clamp: 40px;
}
.header-bottom {
  height: 40px;
  line-clamp: 40px;
}
</style>
