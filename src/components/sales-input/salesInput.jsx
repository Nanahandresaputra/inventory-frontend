import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPlusLg } from "react-icons/bs";
import * as yup from "yup";
import formatRupiah from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addSalesData } from "../../app/redux-state/sales/action";

const SalesInput = ({ dataCostumers, dataItems }) => {
  const validate = yup.object({
    name: yup.string().required("Masukan Nama Costumer"),
    items: yup.string().required("Masukan Items"),
  });

  const dispatch = useDispatch();

  const [name, setName] = useState(localStorage.getItem("costumerSales") || "");
  let [listItems, setListItems] = useState(JSON.parse(localStorage.getItem("itemSale")) || []);
  let totalHarga = listItems.reduce((acc, obj) => acc + obj.harga_satuan, 0);
  let [data, setdata] = useState({ costumer: name, items: listItems, total_harga: totalHarga } || {});
  useEffect(() => {
    listItems;
    name;
  }, [listItems, name]);

  const {
    register,
    formState: { errors },
    getValues,
    trigger,
    setError,
  } = useForm({ resolver: yupResolver(validate), mode: onclick });

  const handleClickName = async () => {
    await trigger("name");
    let result = getValues("name").replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    let found = dataCostumers.find((data) => data.name === result);
    if (found) {
      setName(found.name);
      localStorage.setItem("costumerSales", found.name);
    } else {
      setError("name", {
        type: "custom",
        message: "Nama Costumer tidak ditemukan",
      });
    }
  };

  const handleClickItems = async () => {
    await trigger("items");
    let result = getValues("items").replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    let found = dataItems.find((data) => data.name === result);
    if (found) {
      setListItems([...listItems, found]);
      localStorage.setItem("itemSale", JSON.stringify(listItems));
    } else {
      setError("items", {
        type: "custom",
        message: "Item tidak ditemukan",
      });
    }
  };

  const handleClikOrder = () => {
    if (name === "" || listItems.length < 1) {
      alert("Masukan Nama dan Item");
    } else {
      setdata({ ...data, costumer: name, items: listItems.map((itm) => itm.name), total_harga: totalHarga });
      dispatch(addSalesData(data));
      alert("Penjualan sukses");
    }
  };
  return (
    <section className="paper w-9/12 flex space-x-28">
      <div>
        <h1 className="text-lg font-semibold mb-8">Penjualan Barang</h1>
        <form className="flex flex-col justify-center space-y-3">
          <label className="font-medium text-gray-800">
            Nama Costumer:
            <div className="flex flex-col mt-3 gap-y-1 h-20">
              <div className="flex">
                <input type="text" placeholder="Nama Costumer" className={errors.name ? "input-red rounded-l-xl" : "input-blue rounded-l-xl"} {...register("name")} />
                <button type="button" className="block btn-gray top-0 left-0 text-xl" onClick={handleClickName}>
                  <BsPlusLg />
                </button>
              </div>
              <p className="form-errors-message text-start">{errors.name?.message}</p>
            </div>
          </label>
          <label className="font-medium text-gray-800">
            Items
            <div className="flex flex-col mt-3 gap-y-1 h-20">
              <div className="flex">
                <input type="text" placeholder="Items" className={errors.items ? "input-red rounded-l-xl" : "input-blue rounded-l-xl"} {...register("items")} />
                <button type="button" className="block btn-gray top-0 left-0 text-xl" onClick={handleClickItems}>
                  <BsPlusLg />
                </button>
              </div>
              <p className="form-errors-message text-start">{errors.items?.message}</p>
            </div>
          </label>
        </form>
      </div>
      <div className="flex-1 text-center justify-center">
        <h1 className="text-lg font-semibold mb-8">Penjualan Barang</h1>
        <div className="border-b-2 border-black">
          <h1 className="mb-10 font-semibold">Nama costumer: {name}</h1>
          {listItems?.map((index, i) => (
            <div className="flex justify-between items-center" key={i}>
              <p className="">{index.name}</p>
              <p className="">{formatRupiah(index.harga_satuan)} </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-5">
          <p>Total: </p>
          <p>{formatRupiah(totalHarga)}</p>
        </div>
        <button type="button" className="btn-blue w-6/12 h-8 mt-3" onClick={handleClikOrder}>
          Bayar
        </button>
      </div>
    </section>
  );
};

export default SalesInput;
