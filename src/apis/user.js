// 封装所有 和 用户 相关的接口函数
import request from "@/utils/http";

// 采用对象的解构赋值，接收 account 和 password 两个参数，分别对应登录时的账号和密码
export const loginAPI = ({ account, password }) => {
  return request({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};

// 猜你喜欢 接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
};
