<script setup>
// 定义props，用于父传子
defineProps({
  // 主标题
  title: {
    type: String,
  },
  // 副标题
  subTitle: {
    type: String,
  },
});
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small> {{ subTitle }} </small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <!-- <div>主体内容</div> -->
      <!-- 由于只有一个插槽，所以采用默认插槽的形式。如果有很多插槽，可以使用具名插槽。 -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
