<template>
  <div>
    <div class="box">
      <div class="float-wrap">
        <div class="left" style="width: 100px">
          日期
        </div>
        <div class="left" style="width: 1000px">
          招采信息{{id}}标题
        </div>
        <div class="right" style="width: 100px">
          收藏按钮
        </div>
      </div>
      <div style="height: 1000px">
        正文内容
      </div>
    </div>
    <div class="box sec float-wrap">
      <div class="left">
        上一页
      </div>
      <div class="right">
        下一页
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    id() {
      return this.$nuxt.$route.params.id
    }
  },
}
</script>

<style scoped>
</style>
