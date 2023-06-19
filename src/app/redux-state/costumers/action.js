import { addCostumersDataApi, deleteCostumersDataApi, getCostumersDataApi, updateCostumersDataApi } from "../../api/costumers-api/costumersApi";
import { ADD_COSTUMERS, DELETE_COSTUMERS, GET_COSTUMERS, UPDATE_COSTUMERS } from "./constant";

export const getDataCostumers = () => {
  return (dispatch) => {
    getCostumersDataApi().then((res) => {
      dispatch({
        type: GET_COSTUMERS,
        payload: res.data,
      });
    });
  };
};

export const addCostumers = (data) => {
  return (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    let form = new FormData();
    form.append("name", data.nama);
    form.append("contact", data.kontak);
    form.append("email", data.email);
    form.append("alamat", data.alamat);
    form.append("image", data.gambar[0]);
    addCostumersDataApi({ form, headers }).then((res) => {
      dispatch({
        type: ADD_COSTUMERS,
        payload: res.data,
      });
    });
  };
};

export const updateCostumers = (data) => {
  return (dispatch) => {
    let id = localStorage.getItem("costumerId");
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    let form = new FormData();
    form.append("name", data.nama);
    form.append("contact", data.kontak);
    form.append("email", data.email);
    form.append("alamat", data.alamat);
    form.append("image", data.gambar[0]);
    updateCostumersDataApi({ id, form, headers }).then((res) => {
      dispatch({
        type: UPDATE_COSTUMERS,
        payload: res.data,
      });
    });
  };
};

export const deleteCostumers = (id) => {
  return (dispatch) => {
    deleteCostumersDataApi(id).then((res) => {
      dispatch({
        type: DELETE_COSTUMERS,
        payload: res.data,
      });
    });
  };
};
