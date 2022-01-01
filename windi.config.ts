import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: true,
  shortcuts: {
    btn: "py-2 px-14 rounded shadow-md drop-shadow",
    "btn__primary":
      "text-white bg-purple-500 hover:bg-purple-600 focus:bg-purple-400",
    "btn__secondary":
      "text-white bg-pink-500 hover:bg-pink-600 focus:bg-pink-400",
    "btn__success":
      "text-white bg-green-500 hover:bg-green-600 focus:bg-green-400",
    "btn__danger": "text-white bg-red-500 hover:bg-red-600 focus:bg-red-400",
    "btn__info": "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-400",
    "btn__warning":
      "text-black bg-yellow-500 hover:bg-yellow-600 focus:yellow-600 focus:bg-yellow-400",
  },
});
