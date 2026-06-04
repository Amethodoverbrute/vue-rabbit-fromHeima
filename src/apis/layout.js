import httpInstance from "@/utils/http";

// 获取Header菜单栏
export function getCategoryAPI() {
  return httpInstance({
    url: "/home/category/head",
  });
}
