import React from "react";
import Chart from "./Chart";

const ChartData = ({ expenses }) => {
  const myData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  console.log("befor", myData);
  for (const x of expenses) {
    const expenseMonth = x.date.getMonth();
    myData[expenseMonth].value += x.price;
  }
  console.log("after", myData);
  return <Chart abc={myData} />;
};

export default ChartData;
