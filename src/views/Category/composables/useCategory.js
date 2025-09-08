// 封装分类数据业务 相关代码
import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
// 在vue里获取路由参数 是固定的
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  // 获取分类数据
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    // const res = await getCategoryAPI(route.params.id); // route.params.id存在滞后性，拿不到最新的
    const res = await getCategoryAPI(id); // route.params.id存在滞后性，拿不到最新的
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());

  // 目标：路由参数变化的时候，可以把分类数据接口重新发送以更新数据，不让再组件复用导致页面不更新了
  // 参数to即目标路由对象
  onBeforeRouteUpdate((to) => {
    // console.log("路由变化了");
    // 存在问题：现在需要使用最新的路由参数请求最新的分类数据
    console.log(to);
    getCategory(to.params.id);
  });

  return {
    categoryData,
  };
}
