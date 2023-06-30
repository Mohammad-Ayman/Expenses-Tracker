import ExpenseItem from "./ExpenseItem";
import styles from "./style/DisplayExpenses.module.css";

const DisplayExpenses = (props) => {
  if (props.chosenYear === "All") {
    return (
      <ul className={styles["expenses-list"]}>
        {props.allItems.map((element) => (
          <ExpenseItem
            key={element.id}
            // key={indexes}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        ))}
      </ul>
    );
  } else {
    if (props.filteredItems.length === 0) {
      return <h2 className={styles["expenses-list__fallback"]}>No Expenses Found! </h2>;
    }
    return (
      <ul className={styles["expenses-list"]}>
        {props.filteredItems.map((item, indexes) => (
          <ExpenseItem
            key={item.id}
            // key={indexes}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </ul>
    );
  }
};

export default DisplayExpenses;
