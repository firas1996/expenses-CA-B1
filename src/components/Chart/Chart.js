import "./Chart.css";
import ChartTube from "./ChartTube";

const Chart = ({ abc }) => {
  console.log("ss", abc);
  const values = abc.map((obj) => obj.value);
  const max = Math.max(...values);
  const sum = values.reduce((x, y) => {
    return x + y;
  });

  console.log(sum);
  return (
    <div className="chart">
      {abc?.map((item) => {
        return (
          <ChartTube
            label={item.label}
            value={item.value}
            max={max}
            sum={sum}
          />
        );
      })}
    </div>
  );
};

export default Chart;
