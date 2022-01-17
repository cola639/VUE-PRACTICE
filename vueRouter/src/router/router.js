import Vue from "vue";
import VueRouter from "vue-router";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

// 引入组件
import home from "../pages/home/home.vue";
import about from "../pages/about/about.vue";
import user from "../components/user/user.vue";
import category from "../components/category/category.vue";

const routes = [
  // 重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
    children: [
      {
        path: "phone",
        component: category,
      },
      {
        path: "tablet",
        component: category,
      },
      {
        path: "computer",
        component: category,
      },
      {
        path: "",
        component: category,
      },
    ],
  },
  {
    path: "/about",
    component: about,
  },
  {
    path: "/user/:id",
    name: "user",
    component: user,
  },
];

var router = new VueRouter({
  routes,
});
export default router;
