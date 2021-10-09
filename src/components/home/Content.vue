<template class="data-container">
  <div class="content-body" v-for="(item, index) in dataList" :key="index">
    <div class="content-title">
      <h1>{{ item.title }}</h1>
      <div>作者: {{ item.name }}</div>
    </div>
    <el-image
      style="width: 100px; height: 100px"
      :src="item.image"
      fit="cover"
    ></el-image>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, PropType } from "vue";

interface DataInfo {
    title?: string;
    name?: string;
    image?: any;
}

export default defineComponent({
  name: "Content",
  props: {
    dataList: {
      type: Array as PropType<DataInfo[]>,
      required: true
    },
  },
  setup(props) {
    const { dataList } = toRefs(props);

    return {
      dataList,
    };
  },
});
</script>

<style scoped>
.content-body {
  display: flex;
  align-content: center;
  margin: 5px;
}

.content-title {
  display: flex;
  align-items: center;
  flex: 1;
}
</style>
