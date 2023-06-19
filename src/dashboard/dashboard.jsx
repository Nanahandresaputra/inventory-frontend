import { Outlet } from "react-router";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="grid gap-x-10">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
