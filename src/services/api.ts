import Axios from "axios";
const DATA = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export const GetIPDetailsApi = async () => {
  return await DATA.get(`//ip-api.com/json/`);
};
