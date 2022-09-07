import { useState } from "react";
import SalesTable from "../SalesTable";
import "./style.css";

const SalesCard = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div className="dsmeta-form-control-container">
      <input type="date" />
      </div>
      <div className="dsmeta-form-control-container">
        <input type="date" />
      </div>
      <SalesTable />
    </div>
  );
};

export default SalesCard;
