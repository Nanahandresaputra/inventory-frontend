import { Link } from "react-router-dom";
import CardItems from "../../components/card-items/card-items";
import { LuPackagePlus } from "react-icons/lu";
import { useSelector } from "react-redux";

const Items = () => {
  const { dataItems } = useSelector((state) => state.items);

  return (
    <section className="flex flex-col space-y-5 mt-24 justify-center pb-10 ml-20 mr-2">
      <div className="flex justify-between">
        <div className="paper p-4 w-9/12">
          <h1 className="font-semibold text-lg text-center">List Item</h1>
        </div>
        <div className="paper py-4 w-64 cursor-pointer hover:bg-slate-100">
          <Link to="/items/add-items" className="flex space-x-1 justify-center items-center">
            <LuPackagePlus className="text-2xl" /> <p className="font-semibold text-lg text-center">Tambah Item</p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {dataItems?.map((index, i) => (
          <CardItems key={i} itemsData={index} />
        ))}
      </div>
    </section>
  );
};

export default Items;
