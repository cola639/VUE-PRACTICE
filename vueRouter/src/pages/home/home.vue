<template>
  <div>
    <h1>home</h1>

    <router-link to="/about">About子组件</router-link>

    <p>{{ msg }}</p>
    <p>
      <router-link to="/home/phone">手机</router-link>
      <br />
      <router-link to="/home/tablet">平板</router-link>
      <br />
      <router-link to="/home/computer">电脑</router-link>
    </p>
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是home 组件",
    };
  },
};
</script>
