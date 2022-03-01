import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../views/Home.vue");
const UploadID = () => import("../views/UploadID.vue");
const VideoAuth = () => import("../views/VideoAuth.vue");
const VideoAuthSucess = () => import("../views/VideoAuthSucess.vue");
const VideoRecord = () => import("../views/VideoRecord.vue");
const VideoRecordSucess = () => import("../views/VideoRecordSucess.vue");
const Setting = () => import("../components/setting/Setting.vue");

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/uploadUserPhoto",
      name: "uploadUserPhoto",
      component: UploadID,
    },

    {
      path: "/videoAuth",
      name: "videoAuth",
      component: VideoAuth,
    },
    {
      path: "/videoAuthSucess",
      name: "videoAuthSucess",
      component: VideoAuthSucess,
    },
    {
      path: "/videoRecord",
      name: "videoRecord",
      component: VideoRecord,
    },
    {
      path: "/videoRecordSucess",
      name: "videoRecordSucess",
      component: VideoRecordSucess,
    },
    {
      path: "/setting",
      name: "setting",
      component: Setting,
    },
  ],
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  //需要验证页面数组, router对象的name属性
  const nextRoute = [
    "uploadUserPhoto",
    "videoAuth",
    "videoAuthSucess",
    "videoRecord",
    "videoRecordSucess",
  ];
  const userInfo = JSON.parse(localStorage.getItem("userInfo")); // 判断是否登录，本地存储有用户数据则视为已经登录

  //未登录状态:判断是否是需要验证页面
  if (nextRoute.indexOf(to.name) >= 0) {
    console.log(
      `userInfo ${userInfo} ||to.name  ${to.fullPath} ||from ${from.name}`
    );
    if (!userInfo) {
      //跳转到登录页,并添加重定向path
      router.push({
        name: "home",
        params: { redirect: to.fullPath },
      });
    }
  }

  next(); // 必须使用 next ,执行效果依赖 next 方法的调用参数
});

export default router;
