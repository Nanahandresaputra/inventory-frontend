import { useSelector } from "react-redux";
import SalesInput from "../../components/sales-input/salesInput";

const Sales = () => {
  const { dataItems } = useSelector((state) => state.items);

  const { dataCostumer } = useSelector((state) => state.costumer);
  return (
    <div className="flex items-center justify-center h-screen">
      <SalesInput dataCostumers={dataCostumer} dataItems={dataItems} />
    </div>
  );
};

export default Sales;
