import "./Main.css";
import ExpenseItem from "./ExpenseItem";

const Main = ({ expenses }) => {
  return (
    <div className="main">
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
