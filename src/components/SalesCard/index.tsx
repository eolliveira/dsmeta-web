import { useState } from "react";
import SalesTable from "../SalesTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
        <DatePicker
          selected={new Date()}
          onChange={(date: Date) => {}}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="dsmeta-form-control-container">
        <DatePicker
          selected={new Date()}
          onChange={(date: Date) => {}}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <SalesTable />
    </div>
  );
};

export default SalesCard;
