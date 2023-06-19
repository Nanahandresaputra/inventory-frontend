import axios from "axios";
import config from "../../../config/config";

export const getCostumersDataApi = async () => {
  const costumers = await axios.get(`${config.baseUrl}/costumers`);
  return costumers;
};

export const getCostumerDataByIdApi = async (id) => {
  const costumer = await axios.get(`${config.baseUrl}/costumers/${id}`);
  return costumer;
};

export const addCostumersDataApi = async ({ headers, form }) => {
  const addCostumers = await axios.post(`${config.baseUrl}/costumers`, form, headers);
  return addCostumers;
};

export const updateCostumersDataApi = async ({ id, form, headers }) => {
  const updateCostumers = await axios.put(`${config.baseUrl}/costumers/${id}`, form, headers);
  return updateCostumers;
};

export const deleteCostumersDataApi = async (id) => {
  const deleteCostumers = await axios.delete(`${config.baseUrl}/costumers/${id}`);
  return deleteCostumers;
};
