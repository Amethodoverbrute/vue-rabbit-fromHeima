// import httpInstance from "@/utils/http";
import request from "@/utils/http";

export function getCategoryAPI(id) {
  return request({
    url: "/category",
    params: {
      id,
    },
  });
}
