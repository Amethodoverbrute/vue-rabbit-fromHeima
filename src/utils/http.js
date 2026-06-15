// axios 基础的封装
import axios from "axios";

import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/userStore";
import router from "@/router";

// 配置基地址与超时时间
const httpInstance = axios.create({
  // 直接配置后端地址，避免Vite代理导致的重定向问题
  // 这样可以从根源上消除重定向时Authorization header丢失的问题
  baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 50000,
});

// 拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 现在这里有bug！！！已经解决了，因为重定向后浏览器的安全策略，导致Authorization header丢失！！！
    // // 1、从pinia获取token数据
    // const userStore = useUserStore();
    // // 2、按照后端的要求 拼接token数据
    // const token = userStore.userInfo.token;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    // 解决方案1：从localStorage直接获取持久化的用户token数据！！！
    // const userData = localStorage.getItem("user");
    // if (userData) {
    //   const userInfo = JSON.parse(userData);
    //   if (userInfo.token) {
    //     config.headers.Authorization = `Bearer ${userInfo.token}`;
    //   }
    // }

    // 解决方案2：
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e),
);

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();
    // 统一 错误提示
    if (e.response) {
      ElMessage({
        type: "warning",
        message: e.response.data.message || "请求失败",
      });
      // 401 token失效处理
      // 1、清除本地用户数据
      // 2、跳转到登录页
      // 这里有个bug，就是登录页的token也会被清除！！！
      // if (e.response.status === 401) {
      //   userStore.clearUserInfo();
      //   router.push("/login");
      // }
      // 解决方案：还没有解决！！！
      if (e.response.status === 401) {
        const requestToken = e.config.headers.Authorization?.replace("Bearer ", "");
        const storedToken = localStorage.getItem("token");

        // 只有当请求携带的token与存储的token一致时才清除用户信息
        if (requestToken && requestToken === storedToken) {
          userStore.clearUserInfo();
          router.push("/login");
        }
      }
    } else {
      ElMessage({
        type: "error",
        message: "网络错误或服务器不可用",
      });
    }
    return Promise.reject(e);
  },
);

// 默认 导出！
export default httpInstance;
