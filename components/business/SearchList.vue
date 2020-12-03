<template>
  <div>
    <SearchArea v-if="searchAreaFields">
      查询条件区域
    </SearchArea>
    <div class="sec">
      <SearchBar v-if="searchBarFields">
        查询栏
      </SearchBar>
    </div>
    <div class="sec">
      <List :list="list">
        <template v-slot:item="scope"> 
          <slot name="item" v-bind:row="scope.row" />
        </template>
      </List>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    searchAreaFields: Array,
    searchBarFields: Array,
    list: Array,
  },
}
</script>
<style scoped>

</style>
