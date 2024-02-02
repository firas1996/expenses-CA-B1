import "./ExpensesFilter.css";

const ExpensesFilter = ({ options }) => {
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select>
        {options.map((opt) => {
          return <option value={opt}>{opt}</option>;
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
