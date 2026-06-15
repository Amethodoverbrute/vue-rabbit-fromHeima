<script setup>
import HomePanel from "./HomePanel.vue";
import { getGoodsAPI } from "@/apis/home";
import { onMounted, ref } from "vue";
import GoodsItem from "./GoodsItem.vue"; // 这里的GoodSiItem是作为一个“子组件”接收来自父组件发过来的数据就行了

// 获取数据列表
const goodsProduct = ref([]);

const getGoods = async () => {
  const res = await getGoodsAPI();
  goodsProduct.value = res.result;
};

onMounted(() => getGoods());
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-img-lazy="cate.picture" />
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <!-- 父子组件关系：HomeProduct.vue(父组件) → GoodsItem.vue(子组件) -->
            <!-- 数据传递：父组件通过props的goods属性传入good对象 -->
            <GoodsItem :goods="good" />
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      color: #666;
      background: #f4f4f4;

      &:hover {
        background: #f4f0ea;
      }

      &.active {
        background: #fff;
        color: #ff6a00;
      }
    }
  }

  .box {
    padding: 15px;
    border-top: 1px solid #eee;

    .cover {
      display: block;
      margin-bottom: 15px;
      position: relative;
      img {
        width: 100%;
        vertical-align: top;
      }

      .label {
        position: absolute;
        left: 15px;
        bottom: 15px;
        display: flex;
        align-items: center;
        span:first-child {
          background: rgba(255, 106, 0, 0.9);
          color: #fff;
          font-size: 18px;
          padding: 3px 10px;
          border-radius: 4px;
          margin-right: 10px;
        }

        span:last-child {
          color: #fff;
          font-size: 14px;
        }
      }
    }

    .goods-list {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 20%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
