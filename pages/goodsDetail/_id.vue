<template>
  <div>
    <HeaderMerchant :id="merchantId" />
    <div class="sec float-wrap" style="height: 300px;">
      <div class="left box carousel">
        轮播图
      </div>
      <div class="right box info">
        商品{{id}}信息
      </div>
    </div>
    <div class="sec float-wrap layout-main-side">
      <div class="left box detail">
        详情、评论
      </div>
      <aside class="right box hot">
        热销商品
      </aside>
    </div>
    <div class="box sec other">
      其他产品
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    id() {
      return this.$nuxt.$route.params.id
    },
    merchantId() {
      return this.$nuxt.$route.params.merchantId
    }
  },
}
</script>

<style scoped>
.carousel {
  width: 595px;
  height: 100%;
}
.info {
  width: 595px;
  margin-left: 10px;
  height: 100%;
}
.detail {
  height: 1000px;
}
.hot {
  height: 600px;
}
.other {
  height: 200px;
}
</style>
