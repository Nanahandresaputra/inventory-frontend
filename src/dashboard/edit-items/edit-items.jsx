import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { updateDataItems } from "../../app/redux-state/items/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const EditItems = () => {
  const validate = yup.object().shape({
    nama: yup.string().required("Nama items harus diisi"),
    unit: yup.number().typeError("Masukan unit angka").required("Masukan unit"),
    stok: yup.number().typeError("Masukan angka stok").required("Stok harus diisi"),
    harga: yup.number().typeError("Masukan angka harga").required("Masukan harga"),
    gambar: yup
      .mixed()
      .test("required", "Masukan gambar item", function (file) {
        return file.length;
      })
      .test("type", "Hanya file gambar jpg jpeg png", function (file) {
        if (file.length > 0) {
          return file && (file[0].type === "image/jpg" || file[0].type === "image/jpeg" || file[0].type === "image/png");
        }
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validate) });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItems = (data) => {
    dispatch(updateDataItems(data));
    alert("Item Berhasil di update");
    navigate("/items");
  };
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="paper w-2/5 flex flex-col items-center">
        <h1 className="font-semibold mb-8 text-xl">Edit Items</h1>
        <form onSubmit={handleSubmit(addItems)}>
          <div className="flex flex-wrap space-y-3 justify-between items-center">
            <label className="font-semibold mt-3 h-24">
              Nama Items: <br />
              <input type="text" placeholder="Nama Barang" className={errors.nama ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("nama")} />
              <br /> <span className="form-errors-message">{errors.nama?.message}</span>
            </label>
            <label className="font-semibold h-24">
              Unit: <br />
              <input type="number" placeholder="Unit" className={errors.unit ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("unit")} />
              <br /> <span className="form-errors-message">{errors.unit?.message}</span>
            </label>
            <label className="font-semibold h-24">
              Stok: <br />
              <input type="number" placeholder="Stok" className={errors.stok ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("stok")} />
              <br /> <span className="form-errors-message">{errors.stok?.message}</span>
            </label>
            <label className="font-semibold h-24">
              Harga: <br />
              <input type="number" placeholder="Harga" className={errors.harga ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("harga")} />
              <br /> <span className="form-errors-message">{errors.harga?.message}</span>
            </label>
            <label className="font-semibold items-start h-24">
              Gambar: <br />
              <input type="file" placeholder="Harga" className="input-blue cursor-pointer p-0  mt-3 rounded-lg file:py-3 file:bg-black file:text-white" {...register("gambar")} />
              <br /> <span className="form-errors-message">{errors.gambar?.message}</span>
            </label>
          </div>
          <button className="btn-blue h-10 w-full mt-8" type="submit">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditItems;
