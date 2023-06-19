import { addSalesDataApi, deleteSalesDataApi, getSalesDataApi } from "../../api/sales-api/salesApi";
import { ADD_SALES, DELETE_SALES, GET_SALES } from "./constant";

export const getSalesData = () => {
  return (dispatch) => {
    getSalesDataApi().then((res) => {
      dispatch({
        type: GET_SALES,
        payload: res.data,
      });
    });
  };
};

export const addSalesData = (data) => {
  return (dispatch) => {
    let headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    addSalesDataApi({ data, headers }).then((res) => {
      dispatch({
        type: ADD_SALES,
        payload: res.data,
      });
    });
  };
};

export const deleteSalesData = (id) => {
  return (dispatch) => {
    deleteSalesDataApi(id).then((res) => {
      dispatch({
        type: DELETE_SALES,
        payload: res.data,
      });
    });
  };
};
