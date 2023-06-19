import { BiEdit } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteCostumers } from "../../app/redux-state/costumers/action";
import config from "../../config/config";

const Costumers = () => {
  const { dataCostumer } = useSelector((state) => state.costumer);
  const dispatch = useDispatch();
  const theadData = ["nama costumer", "kontak", "email", "alamat", "ktp", "edit/hapus"];
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center space-y-10">
      <div className="mt-28 flex justify-between w-4/5">
        <div className="paper p-4  w-9/12">
          <h1 className="font-semibold text-lg text-center">Data Costumers</h1>
        </div>
        <Link to="/costumers/add-costumers" className="paper p-4 w-64 cursor-pointer hover:bg-slate-100">
          <div className="flex space-x-1 justify-center items-center">
            <BsFillPersonPlusFill className="text-2xl" /> <p className="font-semibold text-lg text-center">Tambah Costumers</p>
          </div>
        </Link>
      </div>
      <div aria-label="paper" className="paper w-4/5">
        <table className="table-fixed w-full  text-center">
          <thead className="bg-slate-100 uppercase rounded-md py-5">
            <tr>
              {theadData.map((idx, i) => (
                <th scope="col" className="px-3 py-3 " key={i}>
                  {idx}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataCostumer.map((idx, i) => (
              <tr className=" border-b hover:bg-gray-50" key={i}>
                <th className="px-3 py-3">{idx.name} </th>
                <td className="px-3 py-3">{idx.contact}</td>
                <td className=" py-3 break-words">{idx.email}</td>
                <td className="px-3 py-3">{idx.alamat}</td>
                <td className="py-1 flex justify-center">
                  <img src={`${config.imgUrlCostumer}/${idx.image}`} className="max-h-20 max-w-38" alt="ktp" />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn-blue me-2"
                    onClick={() => {
                      localStorage.setItem("costumerId", idx._id);
                      navigate(`/costumers/edit-costumers/${idx._id}`);
                    }}
                  >
                    <BiEdit />
                  </button>

                  <button
                    type="button"
                    className="btn-red"
                    onClick={() => {
                      dispatch(deleteCostumers(idx._id));
                      window.location.reload(false);
                      alert("Data costumer dihapus");
                    }}
                  >
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

export default Costumers;
