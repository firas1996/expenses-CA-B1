import ExpenseItem from "./components/ExpenseItem";
import Main from "./components/Main";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Education",
      price: 5999,
      date: new Date(2024, 5, 12),
    },
    {
      id: 2,
      title: "Voyage",
      price: 2500,
      date: new Date(2024, 8, 3),
    },
    {
      id: 3,
      title: "New TV",
      price: 1234,
      date: new Date(2023, 10, 15),
    },
    {
      id: 4,
      title: "Car",
      price: 7500,
      date: new Date(2025, 11, 29),
    },
  ];
  return (
    <>
      <NewExpense />
      <Main expenses={expenses} />
    </>
  );
}

export default App;
