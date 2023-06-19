import axios from "axios";
import config from "../../../config/config";

export const getSalesDataApi = async () => {
  const sales = await axios.get(`${config.baseUrl}/sales`);
  return sales;
};

export const addSalesDataApi = async ({ data, headers }) => {
  console.log(data);
  const sales = await axios.post(`${config.baseUrl}/sales`, data, headers);
  return sales;
};

export const deleteSalesDataApi = async (id) => {
  const sales = await axios.delete(`${config.baseUrl}/sales/${id}`);
  return sales;
};
