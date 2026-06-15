import request from "@/utils/http";

// 获取订单详情 接口
export const getCheckInfoAPI = () => {
  return request({
    url: "/member/order/pre",
  });
};

// 创建订单 接口
export const createOrderAPI = (data) => {
  return request({
    url: "/member/order",
    method: "POST",
    data,
  });
};
