// createRouter方法： 用于创建路由router实例对象
// createWebHistory： 创建history模式的路由

import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path 和 component 对应关系 的位置
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "category/:id",
          component: Category,
        },
        {
          path: "category/sub/:id",
          component: SubCategory,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  // 路由滚动行为定制/配置
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
