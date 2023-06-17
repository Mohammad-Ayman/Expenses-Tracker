import styles from "./style/ExpenseDate.module.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("end-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("end-US", { day: "2-digit" });

  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
