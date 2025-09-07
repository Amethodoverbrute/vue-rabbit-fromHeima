// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 引入初始化样式文件
import "@/styles/common.scss";

import { useIntersectionObserver } from "@vueuse/core";

// // 测试接口函数
// import { getCategory } from "./apis/testAPI";

// getCategory().then((res) => {
//   console.log(res);
// });

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 定义全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    // el:指令绑定的那个元素 这里是img
    // binding：binding.value 指令等于号 后面绑定的表达式的值 这里是图片url
    console.log(el, binding.value);
    useIntersectionObserver(el, ([entry]) => {
      if (entry.isIntersecting) {
        // 进入视口区了
        console.log("出来了", entry);
        el.src = binding.value;
      }
    });
  },
});
