<template>
  <div class="capitalize">as :</div>
  <div class="text-sm">{{ ipData.as }}</div>

  <div class="capitalize">city :</div>
  <div class="text-sm">{{ ipData.city }}</div>

  <div class="capitalize">country :</div>
  <div class="text-sm">{{ ipData.country }}</div>

  <div class="capitalize">Code :</div>
  <div class="text-sm">{{ ipData.countryCode }}</div>

  <div class="capitalize">isp :</div>
  <div class="text-sm">{{ ipData.isp }}</div>

  <div class="capitalize">lat:</div>
  <div class="text-sm">{{ ipData.lat }}</div>

  <div class="capitalize">lon :</div>
  <div class="text-sm">{{ ipData.lon }}</div>

  <div class="capitalize">query :</div>
  <div class="text-sm">{{ ipData.query }}</div>

  <div class="capitalize">region :</div>
  <div class="text-sm">{{ ipData.region }}</div>

  <div class="capitalize">region :</div>
  <div class="text-sm">{{ ipData.regionName }}</div>

  <div class="capitalize">status :</div>
  <div class="text-sm">{{ ipData.status }}</div>

  <div class="capitalize">time zone :</div>
  <div class="text-sm">{{ ipData.timezone }}</div>

  <div class="capitalize">zip :</div>
  <div class="text-sm">{{ ipData.zip }}</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { GetIPDetailsApi } from "./services/api";
export default defineComponent({
  name: "TheApp",
  setup() {
    const ipData = ref<any>(null);
    onMounted(async () => {
      try {
        let { data } = await GetIPDetailsApi();
        ipData.value = data;
        console.log(data);
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
