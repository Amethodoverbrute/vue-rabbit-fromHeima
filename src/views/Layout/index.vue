<template>
  <div>我是Layout首页</div>

  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 二级路由出口 -->
  <!-- <RouterView /> -->
  <!-- 添加key 破坏组件默认的服用机制 强制销毁重建 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

// 触发 获取导航列表的action
import { useCategoryStore } from "@/stores/categoryStore";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategory();
});
</script>

<style></style>
