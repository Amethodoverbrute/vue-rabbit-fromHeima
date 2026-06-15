// 管理用户数据相关

import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    // 1、定义管理用户数据的state
    const userInfo = ref({});
    // 2、定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      // 显式保存 token 到 localStorage（确保后续请求能获取到）
      if (res.result.token) {
        localStorage.setItem("token", res.result.token);
      }
      // 合并购物车的操作——使用map方法可以从一个数组经过映射得到另一个数组
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        }),
      );
      cartStore.updateNewList();
    };

    // 退出时 清除用户信息
    const clearUserInfo = () => {
      userInfo.value = {};
      // 执行清除购物车的action
      cartStore.clearCart();
    };

    // 3、以对象的格式把state和action return出去
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  // 添加配置, 开启数据持久化
  {
    persist: true,
  },
);
