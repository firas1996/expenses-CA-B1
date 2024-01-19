import "./Main.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart/Chart";

const Main = ({ expenses }) => {
  return (
    <div className="main">
      <Chart />
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
