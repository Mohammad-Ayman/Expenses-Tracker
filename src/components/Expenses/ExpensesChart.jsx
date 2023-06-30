import Chart from "../Charts/Chart";

const ExpensesChart = (props) => {
  let ChartDataPoints;
  if (props.chosenYear === "All") {
    ChartDataPoints = [
      { label: 2019, value: 0 },
      { label: 2020, value: 0 },
      { label: 2021, value: 0 },
      { label: 2022, value: 0 },
      { label: 2023, value: 0 },
    ];
    for (const expense of props.allExpenses) {
      for (const ChartDataPoint of ChartDataPoints) {
        if (expense.date.getFullYear() === ChartDataPoint.label) {
          ChartDataPoint.value += expense.amount;
          console.log(ChartDataPoint.value);
        }
      }
    }
  } else {
    ChartDataPoints = [
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
    for (const expense of props.yearExpenses) {
      const expenseMonth = expense.date.getMonth();
      ChartDataPoints[expenseMonth].value += expense.amount;
    }
  }

  return (
    <Chart
      dataPoints={ChartDataPoints}
      onBarClick={props.onFilterChange} /*onClick={onClickHandler}*/
    />
  );
};

export default ExpensesChart;
