<template>
  <nav>
    <ul class="ul-h">
      <li v-for="link in links" :key="link.slug">
        <nuxt-link :key="link.href" :to="link.href">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { slug: "1", name: "首页", href: "/" },
        { slug: "2", name: "建材信息", href: "/material" },
        { slug: "3", name: "招采信息", href: "/zhaocai" },
        { slug: "4", name: "我需要", href: "/needAndGive/need" },
        { slug: "5", name: "我提供", href: "/needAndGive/give" },
        { slug: "6", name: "建筑社区", href: "https:baidu.com" },
        { slug: "7", name: "找工作", href: "/job" },
      ],
    };
  },
};
</script>

<style scoped>

</style>
