
function PriceBtn({ onSort }) {
  return (
    <button className="price-btn" onClick={onSort}>
      Price
    </button>
  );
}

export function FilterBtn({ onFilter }) {
  return (
    <button className="filter-btn" onClick={onFilter}>
      Above 1999
    </button>
  );
}

export default PriceBtn;