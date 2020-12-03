<template>
  <div>
    <SearchList :search-area-fields="[]" :list="list">
      <template  v-slot:item="scope"> 
        <div>
          <nuxt-link :to="{name: 'goodsDetail-id', params: {id: scope.row.id, merchantId: scope.row.merchantId}}">{{scope.row.name}}</nuxt-link>
        </div>
      </template >
    </SearchList>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        { id: '1', merchantId: 'a', name: '商品数据1' },
        { id: '2', merchantId: 'a', name: '商品数据2' },
        { id: '3', merchantId: 'b', name: '商品数据3' },
      ],
    }
  }
}
</script>

<style scoped>
</style>
