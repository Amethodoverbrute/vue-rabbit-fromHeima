// import httpInstance from "@/utils/http";
// 因为这个httpInstance名字有点长，@/utils/http又是默认导出，所以这里取什么名字都行，比如下面的request
import request from "@/utils/http";

export function getCategoryAPI(id) {
  return request({
    url: "/category",
    params: {
      id,
    },
  });
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return request({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
