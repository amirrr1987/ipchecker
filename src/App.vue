<template>
  <!-- <table>
    <tr >
      <td>{{ key }}</td>
      <td>{{ item }}</td>
    </tr>
  </table> -->
  <div class="row">
    <template  v-for="(item, key) in ipData">
    <span class="key">{{ key }}</span>
    <span class="item">{{ item }}</span>
    </template>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";

export interface IP {
    ip:                   string;
    network:              string;
    version:              string;
    city:                 string;
    region:               string;
    region_code:          string;
    country:              string;
    country_name:         string;
    country_code:         string;
    country_code_iso3:    string;
    country_capital:      string;
    country_tld:          string;
    continent_code:       string;
    in_eu:                boolean;
    postal:               string;
    latitude:             number;
    longitude:            number;
    timezone:             string;
    utc_offset:           string;
    country_calling_code: string;
    currency:             string;
    currency_name:        string;
    languages:            string;
    country_area:         number;
    country_population:   number;
    asn:                  string;
    org:                  string;
}


const ipData = reactive<IP>({} as IP);
const getIp = async () => {
  try {
    const res = await fetch("https://ipapi.co/json");
    const data = await res.json();
    Object.assign(ipData, data)
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getIp();
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
.box{

}
.row{
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 4rem;
  row-gap: 0.6rem;
  text-align: left;
}
.key{
  text-transform: capitalize;
}
</style>
