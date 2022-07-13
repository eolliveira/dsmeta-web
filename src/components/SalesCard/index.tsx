import FormControl from '../FormControl';
import SalesTable from '../SalesTable';
import './style.css';

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <FormControl/>
            <FormControl/>
            <SalesTable/>
        </div>
    );
}

export default SalesCard;




