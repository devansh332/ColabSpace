import axios from "axios";

export const urlBackEnd = process.env.BACK_END_URL;

export const projectURL = axios.create({
  baseURL: `${urlBackEnd}/api/projects`,
});
