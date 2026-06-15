// 测试接口
// 测试接口: 测试是否能够正常访问后端接口
import httpInstance from "@/utils/http"; // 引入axios实例对象

// 导出测试接口
export function getCategory() {
  return httpInstance({
    url: "home/category/head",
  });
}
