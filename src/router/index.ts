import { createRouter, createWebHashHistory } from "vue-router";
// 路由懒加载
const Home = () => import("../components/home/Home.vue");
const Test = () => import("../components/test/Test.vue");

export default createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。(vue2中通过 mode定义模式)
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/test",
      component: Test,
    },
    { path: "/", redirect: "/home" },
  ],
});
