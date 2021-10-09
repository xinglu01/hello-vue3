import { computed, reactive } from "vue";

export function useCounter(num: number) {
  const state: { count: number; double: number } = reactive({
    count: num || 0,
    double: computed(() => state.count * 2),
  });

  function increment() {
    state.count++
  }

  return {
    state,
    increment,
  };
}
