import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addCostumers } from "../../app/redux-state/costumers/action";
import { useNavigate } from "react-router";

const AddCostumers = () => {
  let validate = yup.object().shape({
    nama: yup.string().required("Nama harus diisi"),
    kontak: yup.number().typeError("Masukan nomor kontak").required("Kontak harus diisi"),
    alamat: yup.string().required("masukan alamat"),
    email: yup
      .string()
      .email("Email tidak valid")
      .matches(/^(?!.*@[^,]*,)/)
      .required("Email harus diisi"),
    gambar: yup
      .mixed()
      .test("required", "Masukan foto ktp", function (file) {
        return file.length;
      })
      .test("type", "Hanya file gambar jpg jpeg png", function (file) {
        if (file.length > 0) {
          return file && (file[0].type === "image/jpeg" || file[0].type === "image/png" || file[0].type === "image/jpg");
        }
      }),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validate) });

  const addData = (data) => {
    dispatch(addCostumers(data));
    alert("Costumer Telah Ditambahkan");
    navigate("/costumers");
  };
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="paper w-2/5 flex flex-col items-center">
        <h1 className="font-semibold mb-8 text-xl">Tambah Costumer</h1>
        <form onSubmit={handleSubmit(addData)}>
          <div className="flex flex-wrap  space-y-4 justify-between items-center">
            <label className="font-semibold mt-3 h-24">
              Nama Costumer <span className="text-red-500">*</span>
              <br />
              <input type="text" placeholder="Nama Barang" className={errors.nama ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("nama")} />
              <br /> <span className="form-errors-message">{errors.nama?.message}</span>
            </label>
            <label className="font-semibold h-24">
              Kontak <span className="text-red-500">*</span> <br />
              <input type="number" placeholder="Kontak" className={errors.kontak ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("kontak")} />
              <br /> <span className="form-errors-message">{errors.kontak?.message}</span>
            </label>
            <label className="font-semibold h-24">
              Email <span className="text-red-500">*</span> <br />
              <input type="email" placeholder="Email" className={errors.email ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("email")} />
              <br /> <span className="form-errors-message">{errors.email?.message}</span>
            </label>
            <label className="font-semibold h-24">
              Alamat: <br />
              <input type="text" placeholder="Alamat" className={errors.alamat ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("alamat")} />
              <br /> <span className="form-errors-message">{errors.alamat?.message}</span>
            </label>
            <label className="font-semibold items-start">
              Foto KTP <span className="text-red-500">*</span> <br />
              <input type="file" placeholder="gambar" className="input-blue p-0 cursor-pointer mt-3 rounded-lg file:py-3 file:bg-black file:text-white" {...register("gambar")} />
              <br /> <span className="form-errors-message">{errors.gambar?.message}</span>
            </label>
          </div>
          <button type="submit" className="btn-blue h-10 w-full mt-8">
            Tambah
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCostumers;
