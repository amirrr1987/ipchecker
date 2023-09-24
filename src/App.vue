<template>
  {{ ip }}
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const ip = ref();
const getIp = async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    ip.value = data.ip;
  } catch (error) {}
};
onMounted(() => {
    getIp();
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
  line-height: 100vh;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4rem;
}
</style>
