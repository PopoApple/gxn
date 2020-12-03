<template>
  <div>
    <div class="box">
      <template v-if="list">
        <div v-for="item in list" :key="item.id">
          <slot name="item" v-bind:row="item" />
        </div>
      </template>
    </div>
    <div class="box sec">
      分页器
    </div>
  </div>
</template>

<script>

export default {
  props: {
    list: Array,
  },
}
</script>
<style scoped>

</style>
