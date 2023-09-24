<template>
  <table>
    <tr v-for="(item, key) in ipData">
      <td>{{ key }}</td>
      <td>{{ item }}</td>
    </tr>
  </table>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

export interface IPData {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}

const ip = ref("");
const ipData = ref<IPData>({} as IPData);
const getIp = async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    ip.value = data.ip;
  } catch (error) {
    console.log(error);
  }
};
const getInfo = async (ip: string) => {
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();
    ipData.value = data;
    console.log("🚀 ~ file: App.vue:18 ~ getInfo ~ data:", data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getIp();
  await getInfo(ip.value);
  console.log(window.navigator);
});
</script>
<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  height: 100vh;
  background-color: hsl(261, 100%, 50%);
  color: hsl(0, 0%, 100%);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
td {
  text-align: left;
}
</style>
