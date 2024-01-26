import "./ChartTube.css";

const ChartTube = ({ label, value, max }) => {
  let barFillHeight = "0%";
  if (max > 0) {
    barFillHeight = Math.round((value / max) * 100) + "%";
  }
  return (
    <div className="chart-tube">
      <div className="chart-tube__base">
        <div
          className="chart-tube__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-tube__label">{label}</div>
    </div>
  );
};

export default ChartTube;
