<template>
  <div class="row">
    <template v-for="(item, key) in ipData">
      <span class="key">{{ replace(key, "_", " ") }}</span>
      <span class="item">{{ item }}</span>
    </template>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { assign, pick, replace } from "lodash-es";
import { IIP } from "./models";

const ipData = reactive<IIP>({} as IIP);
const getIp = async () => {
  try {
    const res = await fetch("https://ipapi.co/json");
    const data = await res.json();
    const list = pick(data, [
      "ip",
      "city",
      "region",
      "region_code",
      "country",
      "country_name",
      "country_capital",
      "country_tld",
      "postal",
      "latitude",
      "longitude",
      "timezone",
      "country_calling_code",
      "currency",
      "currency_name",
      "languages",
    ]);
    assign(ipData, list);
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => await getIp());
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

.row {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 4rem;
  row-gap: 1rem;
  text-align: left;
}
.key {
  text-transform: capitalize;
}
</style>
