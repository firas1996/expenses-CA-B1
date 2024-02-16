import { useState } from "react";
import "./NewExpense.css";

const NewExpense = () => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [data, setData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChanger = (event) => {
    // setTitle(event.target.value);
    setData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const priceChanger = (event) => {
    // setPrice(event.target.value);
    setData({ ...data, price: event.target.value });
  };
  const dateChanger = (event) => {
    // setDate(event.target.value);
    setData({ ...data, date: event.target.value });
  };
  const handelAll = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
    // console.log(event.target.name);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(title);
    // console.log(price);
    // console.log(date);
    // setTitle("");
    // setPrice("");
    // setDate("");
    console.log(data);
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              onChange={handelAll}
              name="title"
              value={data.title}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.001"
              onChange={handelAll}
              value={data.price}
              name="price"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              onChange={handelAll}
              value={data.date}
              name="date"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
