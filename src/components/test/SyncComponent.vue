<template>
  {{ value }}
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SyncComponent",
  props: {},
  setup() {
    const value = ref("我是异步组件");
    return {
      value,
    };
  },
});
</script>


