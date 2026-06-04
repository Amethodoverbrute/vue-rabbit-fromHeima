// 定义懒加载插件

import { useIntersectionObserver } from "@vueuse/core";
import { install } from "element-plus";

export const lazyPlugin = {
  install(app) {
    // 下面是 懒加载指令逻辑

    // 定义全局指令
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el:指令绑定的那个元素 这里是img
        // binding：binding.value 指令等于号 后面绑定的表达式的值 这里是图片url
        // console.log("打印懒加载指令的el和binding.value", el, binding.value);
        const { stop } = useIntersectionObserver(el, ([entry]) => {
          if (entry.isIntersecting) {
            // 进入视口区了
            console.log("进入视口区了", entry);
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
