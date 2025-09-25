// 把components中的所有组件都进行一个全局化的注册
// 通过“插件”的方式

import ImageView from "./ImageView/index.vue";
import Sku from "./XtxSku/index.vue";

export const componentPlugin = {
  install(app) {
    // app.component("组件名字"，组件配置对象)
    app.component("XtxImageView", ImageView), app.component("XtxSku", Sku);
  },
};
