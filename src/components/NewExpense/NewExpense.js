import ExpenseForm from "./ExpenseForm";

import styles from "./NewExpense.module.css";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  return (
    <div className={styles['new-expense']}>
      <ExpenseForm OnSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
