<template>
  <div class="float-wrap box" style="height: 100px;">
    <div class="left">
      商家{{id}}Logo、名称、标签、简介
    </div>
    <div class="right">
      搜索
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
}
</script>
<style scoped>
</style>
