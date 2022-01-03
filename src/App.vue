<template>
  <div class="list">
    <template v-for="(value, name, index) in ipData" :key="index">
      <div class="">{{ index == undefined ? 0 : index + 1 }}</div>
      <div class="">{{ name }}</div>
      <div class="">{{ value }}</div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { IpData } from "./models";
import { GetIPDetailsApi } from "./services/api";
export default defineComponent({
  name: "TheApp",
  setup() {
    const ipData = ref<IpData[]>([]);
    onMounted(async () => {
      try {
        let { data } = await GetIPDetailsApi();
        ipData.value = data;
        console.log(ipData.value);
      } catch (error) {
        throw Error;
      }
    });

    return {
      ipData,
    };
  },
});
</script>
<style>
#app {
  display: grid;
  height: 100vh;
  padding: 1rem;
}
#app .list {
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  gap: 1rem;
  min-height: 100%;
}
</style>
