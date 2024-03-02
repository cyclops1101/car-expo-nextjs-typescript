import { GetCarProps } from "@/types";
import axios from "axios";
import { config } from "dotenv";
config({
  path: "./.env.local",
});

export async function getCars({ make, model, fuel, year }: GetCarProps) {
  const axiosInstance = axios.create({
    baseURL: "https://cars-by-api-ninjas.p.rapidapi.com/v1",
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
      ContentType: "application/json",
    },
  });
  try {
    const response = await axiosInstance.get("/cars", {
      params: {
        make,
        model,
        fuel,
        year,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
}
