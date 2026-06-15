// 封装分类数据业务 相关代码

import { getCategoryAPI } from "@/apis/category";

import { onMounted, ref } from "vue";

// 在vue3里获取路由参数 是固定的
import { useRoute } from "vue-router";

import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  // 获取分类数据
  const categoryData = ref({});
  const route = useRoute(); // 获取当前路由对象, 可以获取到路由参数
  // 默认获取当前路由参数的分类数据, 如 /category/1001 则获取1001分类数据；如果点击新分类即更改了路由参数，就获取最新的分类数据
  const getCategory = async (id = route.params.id) => {
    // const res = await getCategoryAPI(route.params.id); // route.params.id 存在滞后性，拿不到最新的！
    const res = await getCategoryAPI(id); // route.params.id存在滞后性，拿不到最新的
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());

  // 期望/目标：路由参数变化的时候，可以把分类数据接口重新发送 以更新数据，不再让组件复用 导致页面不更新了
  // 参数to 即目标路由对象
  onBeforeRouteUpdate((to) => {
    // console.log("路由变化了");

    // 存在问题：现在需要使用 最新的路由参数 请求最新的分类数据
    // console.log(to);
    getCategory(to.params.id);
  });

  //以对象的形式返回分类数据
  return {
    categoryData,
  };
}
