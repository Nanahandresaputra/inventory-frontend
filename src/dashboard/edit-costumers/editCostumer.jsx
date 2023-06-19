import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { updateCostumers } from "../../app/redux-state/costumers/action";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EditCostumers = () => {
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
      .test("type", "Hanya masukan foto ktp", function (file) {
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

  const updateData = (data) => {
    dispatch(updateCostumers(data));

    alert("Costumer Telah Di update");
    navigate("/costumers");
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="paper w-2/5 flex flex-col items-center">
        <h1 className="font-semibold mb-8 text-xl">Edit Costumer</h1>
        <form onSubmit={handleSubmit(updateData)}>
          <div className="flex flex-wrap  space-y-3 justify-between items-center">
            <label className="font-semibold mt-3">
              Nama Costumer: <br />
              <input type="text" placeholder="Nama Barang" className={errors.nama ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("nama")} />
              <br /> <span className="form-errors-message">{errors.nama?.message}</span>
            </label>
            <label className="font-semibold">
              Kontak: <br />
              <input type="number" placeholder="Kontak" className={errors.kontak ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("kontak")} />
              <br /> <span className="form-errors-message">{errors.kontak?.message}</span>
            </label>
            <label className="font-semibold">
              Email: <br />
              <input type="text" placeholder="Email" className={errors.email ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("email")} />
              <br /> <span className="form-errors-message">{errors.email?.message}</span>
            </label>
            <label className="font-semibold">
              Alamat: <br />
              <input type="text" placeholder="Alamat" className={errors.alamat ? "input-red mt-3 rounded-lg" : "input-blue mt-3 rounded-lg"} {...register("alamat")} />
              <br /> <span className="form-errors-message">{errors.alamat?.message}</span>
            </label>
            <label className="font-semibold items-start">
              Foto KTP: <br />
              <input type="file" placeholder="gambar" className="input-blue p-0 cursor-pointer mt-3 rounded-lg file:py-3 file:bg-black file:text-white" {...register("gambar")} />
              <br /> <span className="form-errors-message">{errors.gambar?.message}</span>
            </label>
          </div>
          <button type="submit" className="btn-blue h-10 w-full mt-8">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditCostumers;
