import axios from "axios";
import router from "../router";
import store from "../store/index";
import { Toast } from "vant";

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg) => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true,
  });
};

/**
 * 跳转登录页
 * 携带当前页面路由，以期望在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath,
    },
  });
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip("登录过期，请重新登录");
      localStorage.removeItem("token");
      store.commit("loginSuccess", null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      tip("请求的资源不存在");
      break;
    default:
      console.log(other);
  }
};

//请求配置Url
axios.default.baseUrl = process.env.REACT_APP_API_URL;

//setting timeout
axios.defaults.timeout = 12000;

//1 post Content-Type
// console.log(axios.defaults.headers.post["Content-Type"]);
axios.defaults.headers.post["Content-Type"] = "application/json";

//request hedaer
axios.default.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["x-auth-token"] = jwt;

//response catch
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error); //错误日志
    message.error("An unexpected error occurrred.");
  }

  errorHandle(response.status, response.data.message);
  return Promise.reject(error);
});

//get post
function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

//2 post Content-Type
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

const http = {
  get,
  post,
};

export default http;
