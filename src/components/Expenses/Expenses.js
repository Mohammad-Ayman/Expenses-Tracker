import { useState } from "react";
import DisplayExpenses from "./DisplayExpenses";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import styles from "./style/Expenses.module.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const FilterChangeHandler = (selectedYear) => {
    console.log(typeof selectedYear);
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expensesData.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <Card className={styles.expenses}>
        <ExpensesFilter
          defaultYear={filteredYear}
          onFilterChange={FilterChangeHandler}
        />
        <ExpensesChart
          yearExpenses={filteredExpenses}
          allExpenses={props.expensesData}
          chosenYear={filteredYear}
          onFilterChange={FilterChangeHandler}
          // onClick={onClickHandler}
        />
        <DisplayExpenses
          filteredItems={filteredExpenses}
          allItems={props.expensesData}
          chosenYear={filteredYear}
        />
        {/* {displayedExpenseItems} */}
      </Card>
    </>
  );
};

export default Expenses;

// setAllYear(props.expensesData);
// let allYearsExpenseItems = props.expensesData.map((element) => (
//   <ExpenseItem
//     key={element.id}
//     // key={indexes}
//     title={element.title}
//     amount={element.amount}
//     date={element.date}
//   />
// ));

// let filteredExpenseItems = <p>No Expenses found!</p>;
// if (filteredExpenses.length) {
//   filteredExpenseItems = filteredExpenses.map((expenseData, indexes) => (
//     <ExpenseItem
//       key={expenseData.id}
//       // key={indexes}
//       title={expenseData.title}
//       amount={expenseData.amount}
//       date={expenseData.date}
//     />
//   ));
// }

// let displayedExpenseItems =
//   filteredYear === "All" ? allYearsExpenseItems : filteredExpenseItems;
/*
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./style/Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const initialExpensesItems = props.expensesData.map(
    (expenseData, indexes) => (
      <ExpenseItem
        key={expenseData.id}
        // key={indexes}
        title={expenseData.title}
        amount={expenseData.amount}
        date={expenseData.date}
      />
      )
  );
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenseItems, setExpenseItems] = useState(initialExpensesItems);

  const FilterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    const filteredExpenses = props.expensesData.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
    console.log(filteredExpenses);
    setFilteredYear(selectedYear);
    setExpenseItems(filteredExpenses);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          onFilterChange={FilterChangeHandler}
        />
        {expenseItems}
        </Card>
        </div>
      );
    };
    
    export default Expenses;
    
    
*/
