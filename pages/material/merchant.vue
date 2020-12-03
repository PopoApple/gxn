<template>
  <div>
    <SearchList :search-area-fields="[]" :list="list">
      <template  v-slot:item="scope"> 
        <div>
          <nuxt-link :to="`/merchantDetail/${scope.row.id}`">{{scope.row.name}}</nuxt-link>
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
        { id: 'a', name: '商家数据a' },
        { id: 'b', name: '商家数据b' },
      ],
    }
  }
}
</script>

<style scoped>
</style>
