// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

// 引入初始化样式文件
import "@/styles/common.scss";

// import { useIntersectionObserver } from "@vueuse/core";

// 引入懒加载指令插件，并且注册
import { lazyPlugin } from "@/directives";

// 引入全局组件插件
import { componentPlugin } from "./components";

// // 测试接口函数
// import { getCategory } from "./apis/testAPI";

// getCategory().then((res) => {
//   console.log(res);
// });

const app = createApp(App);

const pinia = createPinia();

// 注册持久化插件
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
// app.use(createPinia());

app.use(router);

// 定义全局指令
// app.directive("img-lazy", {
//   mounted(el, binding) {
//     //el 是指令绑定的元素,这里是一个img标签
//     //binding: 是指令的绑定对象，包含了指令的参数、值等信息,binding.value，这里是图片的url
//     // console.log(el, binding.value);
//     // 监听元素是否进入视口
//     useIntersectionObserver(el, (isIntersecting) => {
//       // console.log(isIntersecting);
//       if (isIntersecting) {
//         // 图片进入视口，加载图片。直接赋值给src属性，即可发送图片请求
//         el.src = binding.value;
//       }
//     });
//   },
// });

app.use(lazyPlugin); // 注册懒加载指令插件

app.use(componentPlugin);
app.mount("#app");
