<template>
  <div>
    <h1>about</h1>
    <router-link to="/home">Home</router-link>

    <div>
      <router-link :to="{ name: 'user', params: { id: 123 } }"
        >User123</router-link
      >
      <br />
      <router-link to="/user/456">User456</router-link>
    </div>

    <p v-show="show">99999元</p>
    <img src="./logo.png" />
    <div class="content">
      <el-button type="success" @click="open0">支付</el-button>

      <el-button type="primary" @click="open1">弹窗</el-button>

      <el-button type="primary" @click="open2">显示金额</el-button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},

  data() {
    return {
      show: false,
    };
  },

  methods: {
    open0() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open1() {
      this.$message({
        message: "这是一个弹窗",
      });
    },

    open2() {
      const show = this.show;
      this.show = !show;
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #999;
  outline: none;
  text-align: center;
  outline: none;
  border-radius: 1.2rem;
  background-color: #47aef6;
}

.content2 {
  margin-top: 600px;
}
</style>
