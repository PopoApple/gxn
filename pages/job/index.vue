<template>
  <div>
    <SearchArea :search-area-fields="[]">
      查询条件区域
    </SearchArea>
    <div class="float-wrap sec">
      <div class="left" style="width: 1000px">
        <List :list="list">
          <template  v-slot:item="scope"> 
            <div>
              <nuxt-link :to="`/job/${scope.row.id}`">{{scope.row.name}}</nuxt-link>
            </div>
          </template>
        </List>
      </div>
      <aside class="right box" style="width: 190px; margin-left: 10px; height: 300px">
        推荐职位
      </aside>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        { id: '1', name: '招聘信息1' },
        { id: '2', name: '招聘信息2' },
      ],
    }
  }
}
</script>

<style scoped>
</style>
