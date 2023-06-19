import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import config from "../../config/config";
import { useDispatch } from "react-redux";
import { deleteDataItems } from "../../app/redux-state/items/action";
import formatRupiah from "../../utils/utils";

const CardItems = ({ itemsData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <section className="paper cursor-pointer hover:bg-slate-100">
      <div className="grid grid-rows-1 gap-y-5 justify-items-center">
        <div className="h-56">
          <img src={`${config.imgUrlItems}/${itemsData.image}`} alt="items image" className="max-w-56 max-h-56" />
        </div>
        <div>
          <p className="font-semibold">Nama Item: {itemsData.name}</p>
          <p className="">Unit: {itemsData.unit} unit</p>
          <p className="">Harga: {formatRupiah(itemsData.harga_satuan)}</p>
          <div className="flex space-x-1">
            <button
              type="button"
              className="btn-blue"
              onClick={() => {
                localStorage.setItem("itemsId", itemsData._id);
                navigate(`/items/edit-items/${itemsData._id}`);
              }}
            >
              {/* <Link to={`/items/edit-items/${itemsData._id}`}> */}
              <BiEdit />
              {/* </Link> */}
            </button>
            <button
              type="button"
              className="btn-red"
              onClick={() => {
                dispatch(deleteDataItems(itemsData._id));
                window.location.reload(false);
                alert("Item berhasil dihapus");
              }}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardItems;
