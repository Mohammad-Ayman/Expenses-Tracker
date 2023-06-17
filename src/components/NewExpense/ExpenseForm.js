import { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [isToggle, setIsToggle] = useState(true);

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //
    /* use this form to always ensure that you are
      using the latest version of the state.
      As the useState() is scheduled */
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      const dateObject = /*new Date*/ event.target.value;
      return { ...prevState, date: dateObject };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // const expenseData = userInput;
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    if (
      expenseData.title.trim().length === 0 ||
      isNaN(expenseData.date) ||
      expenseData.amount === 0
    ) {
      alert("Invalid");
    } else {
      // console.log(expenseData);
      props.OnSaveExpenseData(expenseData);
      setUserInput({ title: "", amount: "", date: "" });
      setIsToggle(true);
    }
  };

  const AddNewExpenseHandler = () => {
    setIsToggle(false);
  };
  const cancelButtonHandler = () => {
    setIsToggle(true);
  };

  return (
    <div>
      <button
        onClick={AddNewExpenseHandler}
        className={!isToggle ? styles.toggle : ""}
      >
        Add New Expense{" "}
      </button>
      <form onSubmit={submitHandler} className={isToggle ? styles.toggle : ""}>
        <div className={styles["new-expense__controls"]}>
          <div className={styles["new-expense__control"]}>
            <label>Title</label>
            <input
              value={userInput.title}
              onChange={titleChangeHandler}
              type="text"
            />
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Amount</label>
            <input
              value={userInput.amount}
              onChange={amountChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Date</label>
            <input
              value={userInput.date}
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2023-6-30"
            />
          </div>
        </div>
        <div className={styles["new-expense__actions"]}>
          <button type="button" onClick={cancelButtonHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
