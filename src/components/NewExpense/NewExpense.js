import { useState } from "react";
import "./NewExpense.css";
let id = 5;
const NewExpense = ({ getData }) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [data, setData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const handelOpen = () => {
    setIsOpen(true);
  };
  const handelClose = () => {
    setIsOpen(false);
  };
  const handelBoth = () => {
    setIsOpen(!isOpen);
  };
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
    getData({
      id: id,
      title: data.title,
      price: +data.price,
      date: new Date(data.date),
    });
    id++;
    setData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      {isOpen ? (
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
            <button type="button" onClick={handelBoth}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={handelBoth}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
