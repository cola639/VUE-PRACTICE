<template>
  <div>
    <h1>Category</h1>
    <div>我是Category内嵌路由组件, 动态部分 {{ dynamicSegment }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    dynamicSegment() {
      console.log(this.$route.fullPath);
      return this.$route.fullPath;
    },
  },
};
</script>
