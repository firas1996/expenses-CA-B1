import "./ExpensesFilter.css";

const ExpensesFilter = ({ options, changeHandler }) => {
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      >
        {options.map((opt) => {
          return <option value={opt}>{opt}</option>;
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
