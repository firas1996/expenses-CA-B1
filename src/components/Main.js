import "./Main.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart/Chart";
import ChartData from "./Chart/ChartData";

const Main = ({ expenses }) => {
  return (
    <div className="main">
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
