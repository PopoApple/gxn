<template>
  <div>
    <SearchList :search-area-fields="[]" :search-bar-fields="[]" :list="list">
      <template  v-slot:item="scope"> 
        <div>
          <nuxt-link :to="`/zhaocai/${scope.row.id}`">{{scope.row.name}}</nuxt-link>
        </div>
      </template>
    </SearchList>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        { id: '1', name: '招采数据1' },
        { id: '2', name: '招采数据2' },
      ],
    }
  }
}
</script>

<style scoped>
</style>
