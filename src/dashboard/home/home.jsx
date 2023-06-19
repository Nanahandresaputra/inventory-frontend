import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSalesData, getSalesData } from "../../app/redux-state/sales/action";
import formatRupiah from "../../utils/utils";
import { FaTrashAlt } from "react-icons/fa";

const Home = () => {
  const theadData = ["nama costumer", "kode transaksi", "tanggal", "nama barang", "total harga", "hapus"];
  const { salesData } = useSelector((state) => state.sales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalesData());
    localStorage.removeItem("itemSale");
    localStorage.removeItem("costumerSales");
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSalesData(id));
    window.location.reload(false);
    alert("Data telah dihapus");
  };

  return (
    <section className="flex flex-col items-center space-y-10 pb-10">
      <div className="paper w-5/6 mt-28">
        <h1 className="text-lg font-semibold text-center">Data Penjualan</h1>
      </div>
      <div className="paper w-5/6">
        <table className="table-fixed w-full text-left">
          <thead className="bg-slate-100 uppercase rounded-md py-5">
            <tr>
              {theadData.map((idx, i) => (
                <th scope="col" className="px-6 py-3 " key={i}>
                  {idx}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {salesData.map((idx, i) => (
              <tr className=" border-b hover:bg-gray-50" key={i}>
                <th className="px-6 py-3">{idx.costumer.name}</th>
                <td className="px-6 py-3">{idx.kode_transaksi}</td>
                <td className="px-6 py-3">{new Date(idx.tanggal_transaksi).toUTCString()}</td>
                <td className="px-6 py-3">{idx.items.map((item) => [item.name]).join(", ")}</td>
                <td className="px-6 py-3">{formatRupiah(idx.total_harga)}</td>
                <td className="px-6 py-3">
                  <button type="button" className="btn-red" onClick={() => handleDelete(idx._id)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
