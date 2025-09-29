// 封装购物车模块
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 1、定义state —— cartList
    const cartList = ref([]);
    // 2、定义action —— addCart
    const addCart = (goods) => {
      // 添加购物车操作
      // 已经添加过，则count+1
      // 没有添加过，直接push
      // 思路：通过匹配传递过来的商品对象中的skuId 能不能在cartList中找到，如果找到了，则就是添加过，没找到，就是没添加过
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        // 找到了
        item.count++;
      } else {
        // 没找到
        cartList.value.push(goods);
      }
    };
    return {
      cartList,
      addCart,
    };
  },
  {
    // 同步同步本地数据
    persist: true,
  }
);
