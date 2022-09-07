import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  // const totalMaxium = Math.max(...dataPointValues);
  // console.log(totalMaxium);
  const totalMaxium = dataPointValues.reduce((total, num) => {
    return total + Math.round(num);
  });
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxium}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
