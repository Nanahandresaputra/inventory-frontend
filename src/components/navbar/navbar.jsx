import { FaWarehouse } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 z-50 shadow-lg py-5 w-full">
      <div className="flex items-center justify-center space-x-5">
        <FaWarehouse className="text-3xl" /> <h1 className="font-semibold text-lg ">Inventory Penjualan</h1>
      </div>
    </div>
  );
};

export default Navbar;
