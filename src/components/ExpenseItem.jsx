import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";

const ExpenseItem = ({ title, date, price }) => {
  // const [newT, setNewT] = useState(title);
  // const updateTitle = () => {
  //   console.log(newT);
  //   setNewT("new title !!!!");
  //   console.log(newT);
  // };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <button onClick={updateTitle}>Update Title</button> */}
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
