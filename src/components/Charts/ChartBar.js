import styles from "./style/ChartBar.module.css";
// import "./style/ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  //   return (
  //     <div className="ChartBar">
  //       <div className="ChartBar__inner">
  //         <div className="ChartBar__fill" style={{ height: barFillHeight }}></div>
  //       </div>
  //       <div className="ChartBar__label">{props.label}</div>
  //     </div>
  //   );
  // };

  return (
    <div className={styles['chart-bar']}>
      <div className={styles['chart-bar__inner']}>
        <div
          className={styles['chart-bar__fill']}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles['chart-bar__label']}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
