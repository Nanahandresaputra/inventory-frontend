import { BsBoxFill, BsFillPeopleFill } from "react-icons/bs";
import { MdPointOfSale } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="fixed z-40 mt-16 left-0 bg-slate-800  h-full px-5  group hover:px-8  transition-all duration-1000">
      <div className="flex flex-col space-y-10 justify-center mt-14 text-xl text-white font-semibold">
        <Link to="/">
          <p className="flex space-x-5 items-center hover:cursor-pointer hover:text-gray-300">
            <AiFillHome className="text-3xl" /> <span className="hidden opacity-0 group-hover:opacity-100 group-hover:block">Home</span>
          </p>
        </Link>
        <Link to="/items">
          <p className="flex space-x-5 items-center hover:cursor-pointer hover:text-gray-300">
            <BsBoxFill className="text-3xl" /> <span className="hidden opacity-0 group-hover:opacity-100 group-hover:block">Items</span>
          </p>
        </Link>
        <Link to="/costumers">
          <p className="flex space-x-5 items-center hover:cursor-pointer hover:text-gray-300">
            <BsFillPeopleFill className="text-3xl" /> <span className="hidden opacity-0 group-hover:opacity-100 group-hover:block">Costumers</span>
          </p>
        </Link>
        <Link to="/sales">
          <p className="flex space-x-5 items-center hover:cursor-pointer hover:text-gray-300">
            <MdPointOfSale className="text-3xl" /> <span className="hidden opacity-0 group-hover:opacity-100 group-hover:block">Sales</span>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
