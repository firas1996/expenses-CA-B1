import "./Main.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart/Chart";
import ChartData from "./Chart/ChartData";
import ExpensesFilter from "./ExpensesFilter";

const Main = ({ expenses }) => {
  const years = new Set(expenses.map((item) => item.date.getFullYear()));
  const res = [...years].sort();
  console.log([...years].sort());
  return (
    <div className="main">
      <ExpensesFilter options={res} />
      <ChartData expenses={expenses} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </div>
  );
};

export default Main;
