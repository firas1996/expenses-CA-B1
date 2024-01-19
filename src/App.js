import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "New TV",
      price: 1234,
      date: new Date(2023, 10, 15),
    },
    {
      id: 2,
      title: "Education",
      price: 5999,
      date: new Date(2024, 5, 12),
    },
    {
      id: 3,
      title: "Voyage",
      price: 2500,
      date: new Date(2024, 8, 3),
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
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].price}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        price={expenses[1].price}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        price={expenses[2].price}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        price={expenses[3].price}
      />
    </>
  );
}

export default App;
