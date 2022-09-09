import SalesTable from "../SalesTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { useState } from "react";

const SalesCard = () => {
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div className="dsmeta-form-control-container">
        <DatePicker
          selected={minDate}
          onChange={(date: Date) => {
            setMinDate(date);
          }}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="dsmeta-form-control-container">
        <DatePicker
          selected={maxDate}
          onChange={(date: Date) => {
            setMaxDate(date);
          }}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <SalesTable />
    </div>
  );
};

export default SalesCard;
