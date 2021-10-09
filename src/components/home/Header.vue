<template>
  <el-input :placeholder="placeholder" v-model="searchValue" clearable @change="changeValue"></el-input>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  props: {
    placeholder: {
      type: String,
      required: true,
    }
  },
  setup(props, ctx) {
    const searchValue = ref("");

    const changeValue = (value)=>{
      ctx.emit("search", { searchValue: value });
    }
    
    return {
      searchValue,
      changeValue
    };
  },
});
</script>

<style scoped>
.header-body {
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: white;
}
</style>