<template>
  <el-container class="data-container">
    <el-header class="container-header">
      <router-link class="header-title" to="/home">回退</router-link>
      <div class="header-search">测试页面</div>
    </el-header>
    <el-main>
      <div class="demo-item">
        {{ "名字: " + student.name }} —— {{ "年龄: " + student.age }}
      </div>
      <div class="demo-item">
        {{ "counter =" + counter }} —— {{ "doubleCounter =" + doubleCounter }}
      </div>

      <div class="demo-item">
        <DemoComponent></DemoComponent>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import DemoComponent from "./DemoComponent.vue";
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  toRef,
  watch,
  computed,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onBeforeUnmount,
  onUpdated,
  onUnmounted,
  nextTick
} from "vue";

export default defineComponent({
  name: "Test",
  components: {
    DemoComponent,
  },
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  setup(props, context) {
    console.log("props is:", props);
    console.log("context is:", context); //可访问的属性 attrs slots emit
    console.log("this is:", this);

    // reactive
    const student = reactive({
      name: "lulu",
      age: 12,
    });

    // toRefs
    // let { age } = student;
    // age = 333;
    let { age } = toRefs(student);
    age.value = 222;

    // toRef
    const newStudent = toRef(student, "name");
    newStudent.value = "hello Vue3";

    // watch
    const counter = ref(0);
    const stopWatch = watch(
      counter,
      (next, prev) => {
        // 不执行
        console.log("next", next, "prev", prev);
      },
      { deep: true }
    );

    watch([counter, student], (next, prev) => {
      // 不执行
      console.log("next", next, "prev", prev);
    });

    // computed
    const doubleCounter = computed(() => {
      return counter.value * 2;
    });

    nextTick(()=>{
      counter.value = 10;
    })

    watchEffect(() => console.log("watchEffect is:", counter.value));

    setTimeout(() => {
      counter.value = 6;
    }, 1000);

    // stopWatch();

    // 生命周期钩子
    onBeforeMount(() => {
      console.log("===onBeforeMount===");
    });

    onMounted(() => {
      console.log("===onMounted===");
    });

    onBeforeUpdate(() => {
      console.log("===onBeforeUpdate===");
    });

    onUpdated(() => {
      console.log("===onUpdated===");
    });

    onBeforeUnmount(() => {
      console.log("===onBeforeUnmount===");
    });

    onUnmounted(() => {
      console.log("===onUnmounted===");
    });

    return {
      student,
      counter,
      doubleCounter,
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

.demo-item {
  margin-top: 20px;
}
</style>
