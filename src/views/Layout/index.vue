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

<template>
  <!-- <div>我是Layout首页</div> -->

  <!-- 固定导航栏，始终显示在页面顶部 -->
  <LayoutFixed />

  <!-- 侧边导航栏，始终显示在页面左侧 -->
  <LayoutNav />

  <!-- 顶部导航栏，始终显示在页面顶部 -->
  <LayoutHeader />

  <!-- 二级路由出口，用于渲染二级路由组件内容，根据路由配置动态渲染不同的组件，内容根据路由配置动态渲染，在这里切换不同的组件！ -->
  <!-- <RouterView /> -->
  <!-- 添加key 破坏组件默认的复用机制 强制销毁重建 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />

  <!-- 底部导航栏，始终显示在页面底部 -->
  <LayoutFooter />
</template>

<style></style>
