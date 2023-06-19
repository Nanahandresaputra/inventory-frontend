import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Items from "./dashboard/items/items";
import Home from "./dashboard/home/home";
import Costumers from "./dashboard/costumers/costumers";
import Sales from "./dashboard/sales/sales";
import AddItems from "./dashboard/add-items/addItems";
import AddCostumers from "./dashboard/add-costumers/addCostumers";
import EditCostumers from "./dashboard/edit-costumers/editCostumer";
import EditItems from "./dashboard/edit-items/edit-items";
import { useEffect } from "react";
import { getDataCostumers } from "./app/redux-state/costumers/action";
import { useDispatch } from "react-redux";
import { getDataItems } from "./app/redux-state/items/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataCostumers());
    dispatch(getDataItems());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/costumers" element={<Costumers />} />
          <Route path="/items/add-items" element={<AddItems />} />
          <Route path="/items/edit-items/:id" element={<EditItems />} />
          <Route path="/costumers/add-costumers" element={<AddCostumers />} />
          <Route path="/costumers/edit-costumers/:id" element={<EditCostumers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
