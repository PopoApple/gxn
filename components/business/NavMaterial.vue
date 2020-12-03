<template>
  <nav :class="{'nav-index': isIndex}">
    <ul class="ul-h">
      <li v-for="link in links" :key="link.slug">
        <nuxt-link :key="link.href" :to="link.href">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isIndex() {
      let path = this.$nuxt.$route.path
      return this.$nuxt.$route.path === '/material'
    }
  },
  data() {
    return {
      links: [
        { slug: "1", name: "首页", href: "/material" },
        { slug: "2", name: "商品供应", href: "/material/goods" },
        { slug: "3", name: "全部商家", href: "/material/merchant" },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  height: 40px;
  line-height: 40px;
}
.nav-index {
  position: absolute;
  left: 300px;
}
</style>
