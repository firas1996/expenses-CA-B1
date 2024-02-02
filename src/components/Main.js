import "./Main.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart/Chart";
import ChartData from "./Chart/ChartData";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Main = ({ expenses }) => {
  const years = new Set(expenses.map((item) => item.date.getFullYear()));
  const res = [...years].sort();
  const [selectedYear, setSelectedYear] = useState(res[0]);
  console.log(selectedYear);
  const filtredExpenses = expenses.filter((item) => {
    return item.date.getFullYear() == selectedYear;
  });
  return (
    <div className="main">
      <ExpensesFilter options={res} changeHandler={setSelectedYear} />
      <ChartData expenses={filtredExpenses} />
      {filtredExpenses.map((expense) => {
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
