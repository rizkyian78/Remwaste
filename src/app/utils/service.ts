import axios from "axios";
import { SkipResponse } from "@/app/model/index";

const API = axios.create({
  baseURL: "https://app.wewantwaste.co.uk",
  timeout: 60000,
});

export const getDataWasteList = () => {
  return API.get<SkipResponse[]>(
    "/api/skips/by-location?postcode=NR32&area=Lowestoft"
  )
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};
