<template>
  <div>
    <HeaderMerchant :id="id" />
    <div class="box sec" style="height: 300px;">
      <div>
        我们的环境
      </div>
      <div>
        我们的信息
      </div>
    </div>
    <div class="box sec" style="height: 300px;">
      商品、职位、服务
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
