import { addDataItemsApi, deleteDataItemsApi, getDataItemsApi, updateDataItemsApi } from "../../api/items-api/itemsApi";
import { ADD_ITEMS, DELETE_ITEMS, GET_ITEMS, UPDATE_ITEMS } from "./constant";

export const getDataItems = () => {
  return (dispatch) => {
    getDataItemsApi().then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    });
  };
};

export const addDataItems = (data) => {
  return (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    let form = new FormData();
    form.append("name", data.nama);
    form.append("unit", data.unit);
    form.append("stok", data.stok);
    form.append("harga_satuan", data.harga);
    form.append("image", data.gambar[0]);
    addDataItemsApi({ form, headers }).then((res) => {
      dispatch({
        type: ADD_ITEMS,
        payload: res.data,
      });
    });
  };
};

export const updateDataItems = (data) => {
  return (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    let id = localStorage.getItem("itemsId");
    let form = new FormData();
    form.append("name", data.nama);
    form.append("unit", data.unit);
    form.append("stok", data.stok);
    form.append("harga_satuan", data.harga);
    form.append("image", data.gambar[0]);
    updateDataItemsApi({ id, form, headers }).then((res) => {
      dispatch({
        type: UPDATE_ITEMS,
        payload: res.data,
      });
    });
  };
};

export const deleteDataItems = (id) => {
  return (disapatch) => {
    deleteDataItemsApi(id).then((res) => {
      disapatch({
        type: DELETE_ITEMS,
        payload: res.data,
      });
    });
  };
};
