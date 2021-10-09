<template>
  <el-button type="primary" @click="increment" plain>点击</el-button>
  {{ "count is: " + state.count }} {{ "double is: " + state.double }}

  <div class="demo-item">
    <el-button plain type="primary" @click="showDialog = true"
      >打开模态框</el-button
    >
  </div>

  <teleport to="body">
    <el-dialog title="提示" v-model="showDialog" width="50%">
      <span>需要注意的是内容是默认不居中的</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button type="primary" @click="showDialog = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </teleport>

  <div class="demo-item">
    <el-button plain type="primary" @click="setSync">展示异步组件</el-button>
    <template v-if="isSyncComponent">
      <Suspense>
        <template #default>
          <SyncComponent></SyncComponent>
        </template>
        <template #fallback>
          <span>组件加载中...</span>
        </template>
      </Suspense>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref } from "vue";
import { useCounter } from "./getCount";

export default defineComponent({
  name: "DemoComponent",
  components: {
    SyncComponent: defineAsyncComponent({
      loader: () => import("./SyncComponent.vue"),
    }),
  },
  props: {},
  data() {
    return {
      showDialog: false,
      msg: "hello",
    };
  },
  setup() {
    const { state, increment } = useCounter(2);

    const isSyncComponent = ref(false);

    const setSync = () => {
      isSyncComponent.value = true;
    };

    return {
      state,
      isSyncComponent,
      increment,
      setSync,
    };
  },
});
</script>


<style scoped>
.demo-item {
  margin-top: 20px;
}
</style>