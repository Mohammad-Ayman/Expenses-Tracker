import ChartBar from "./ChartBar";
import styles from "./style/Chart.module.css";
import barStyles from "./style/ChartBar.module.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const setMaxValue = Math.max(...dataPointsValues);

  const onClickHandler = (e) => {
    const closestBar = e.target.closest(`.${barStyles["chart-bar"]}`);
    // const closestBar = e.target.closest(".chart-bar");
    console.log(closestBar);
    if (closestBar) {
      const barLabel = closestBar.querySelector(
        `.${barStyles["chart-bar__label"]}`
      ).textContent;
      console.log(barLabel);
      if (barLabel.startsWith("20")) {
        props.onBarClick(barLabel);
      } else alert("Feature to be added");
    }
  };

  return (
    <div className={styles.chart} onClick={onClickHandler}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={setMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
