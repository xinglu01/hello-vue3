<template>
  <el-container class="data-container">
    <el-header class="container-header">
      <router-link class="header-title" to="/test">测试</router-link>
      <div class="header-search">首页</div>
    </el-header>
    <el-main>
      <HeaderComponent
        :placeholder="'请输入'"
        @search="search"
      ></HeaderComponent>
      <Content :dataList="dataList"></Content>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  defineAsyncComponent,
  onMounted,
} from "vue";
import HeaderComponent from "./Header.vue";
import { query } from "./query";

interface DataInfo {
    title?: string;
    name?: string;
    image?: any;
}

export default defineComponent({
  name: "Home",

  components: {
    HeaderComponent,
    Content: defineAsyncComponent(() => import("./Content.vue")),
  },

  props: {},

  setup(props, context) {
    const $axios: any = inject("$axios");

    const oldList = ref<DataInfo[]>([]);

    let dataList = ref<DataInfo[]>([]);

    const { queryValue, getQueryData } = query();

    onMounted(() => {
      $axios.get("/api/test").then((response: any) => {
        dataList.value = response.data.data;
        oldList.value = response.data.data;
      });
    });

    const search = (data: any) => {
      const { searchValue } = data;
      queryValue.value = searchValue;
      if (!queryValue.value) {
        dataList.value = oldList.value;
        return;
      }
      dataList.value = getQueryData(oldList.value);
    };

    return {
      dataList,
      queryValue,
      getQueryData,
      search,
    };
  },
});
</script>

<style scoped>
.data-container {
  height: 100%;
  width: 100%;
}

.container-header {
  background: #d43d3d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-title {
  width: 32px;
  display: inline-block;
  margin-right: 8px;
  font-size: 16px;
  color: #fff;
}

.header-search {
  flex: 1;
  font-size: 20px;
}
</style>
