import { computed, ref } from "vue";

export function query() {
  const queryValue = ref("");

  const getQueryData = (dataList: any) => {
    return dataList.filter((item: any) => {
      return item.title.indexOf(queryValue.value) !== -1;
    });
  };

  return {
    queryValue,
    getQueryData,
  };
}
