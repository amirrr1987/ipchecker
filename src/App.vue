<template>
  <div class="capitalize">as :</div>
  <div class="text-sm font-medium">{{ ipData.as }}</div>

  <div class="capitalize">city :</div>
  <div class="text-sm font-medium">{{ ipData.city }}</div>

  <div class="capitalize">country :</div>
  <div class="text-sm font-medium">{{ ipData.country }}</div>

  <div class="capitalize">Code :</div>
  <div class="text-sm font-medium">{{ ipData.countryCode }}</div>

  <div class="capitalize">isp :</div>
  <div class="text-sm font-medium">{{ ipData.isp }}</div>

  <div class="capitalize">lat:</div>
  <div class="text-sm font-medium">{{ ipData.lat }}</div>

  <div class="capitalize">lon :</div>
  <div class="text-sm font-medium">{{ ipData.lon }}</div>

  <div class="capitalize">query :</div>
  <div class="text-sm font-medium">{{ ipData.query }}</div>

  <div class="capitalize">region :</div>
  <div class="text-sm font-medium">{{ ipData.region }}</div>

  <div class="capitalize">region :</div>
  <div class="text-sm font-medium">{{ ipData.regionName }}</div>

  <div class="capitalize">status :</div>
  <div class="text-sm font-medium">{{ ipData.status }}</div>

  <div class="capitalize">time zone :</div>
  <div class="text-sm font-medium">{{ ipData.timezone }}</div>

  <div class="capitalize">zip :</div>
  <div class="text-sm font-medium">{{ ipData.zip }}</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { GetIPDetailsApi } from "./services/api";
export default defineComponent({
  name: "TheApp",
  setup() {
    const ipData = ref<any>([]);
    onMounted(async () => {
      try {
        let { data } = await GetIPDetailsApi();
        ipData.value = data;
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
  grid-template-columns: max-content 1fr;
  gap: 1rem;
  height: 100vh;
  padding: 1rem;
}
</style>
