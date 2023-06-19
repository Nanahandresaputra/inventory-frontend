import axios from "axios";
import config from "../../../config/config";

export const getDataItemsApi = async () => {
  const items = await axios.get(`${config.baseUrl}/items`);
  return items;
};

export const addDataItemsApi = async ({ form, headers }) => {
  const items = await axios.post(`${config.baseUrl}/items`, form, headers);
  return items;
};

export const updateDataItemsApi = async ({ id, form, headers }) => {
  const items = await axios.put(`${config.baseUrl}/items/${id}`, form, headers);
  return items;
};

export const deleteDataItemsApi = async (id) => {
  const items = await axios.delete(`${config.baseUrl}/items/${id}`);
  return items;
};
