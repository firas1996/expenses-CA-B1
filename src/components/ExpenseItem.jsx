import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";

const ExpenseItem = ({ title, date, price }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
