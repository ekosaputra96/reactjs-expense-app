import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const NewExpense = ({ onAddNewExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const saveFormHandler = (enteredFormData) => {
    const userData = {
      ...enteredFormData,
      id: uuid(),
    };
    onAddNewExpense(userData);
  };

  const addExpenseHandler = () => {
    // a
    setShowExpenseForm(true);
  };

  const cancelFormHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {/* get data from a child using custom event handler/function */}
      {showExpenseForm && (
        <ExpenseForm
          onSaveForm={saveFormHandler}
          onCancelForm={cancelFormHandler}
        />
      )}
      {!showExpenseForm && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
