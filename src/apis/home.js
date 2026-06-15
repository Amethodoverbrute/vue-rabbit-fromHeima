import httpInstance from "@/utils/http"; // 引入axios实例，用于发送请求。这里是默认导出，不需要加{}

// 获取banner, 商品为2(改造/升级轮播图接口)
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url: "home/hot",
    // method: "get",
    // params: {},
  });
};

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
