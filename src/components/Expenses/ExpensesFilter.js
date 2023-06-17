import React from "react";

import styles from "./style/ExpensesFilter.module.css";

const ExpensesFilter = (props) => {

  const dropDownChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
    // console.log(event.target.value)
  };


  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.defaultYear} onChange={dropDownChangeHandler}>
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
