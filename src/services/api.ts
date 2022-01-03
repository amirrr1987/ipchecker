import Axios from "axios";
const DATA = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export const GetIPDetailsApi = async () => {
  return await DATA.get(`http://ip-api.com/json/4.2.2.4?fields=status,message,continent,country,regionName,city,lat,lon,currency,isp,org,as,asname,reverse,mobile,proxy,hosting`);
};
