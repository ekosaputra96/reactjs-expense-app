import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveForm, onCancelForm }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [buttonText, setButtonText] = useState("Add Expense");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // using object
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonText("Adding...");
    setButtonDisabled(true);
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: parseFloat(enteredAmount),
    };
    onSaveForm(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    setTimeout(() => {
      setButtonText("Add Expense");
      setButtonDisabled(false);
      onCancelForm();
    }, 500);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expanseTitle">Title</label>
          <input
            type="text"
            name="expanseTitle"
            id="expanseTitle"
            placeholder="Type title..."
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="amount"
            value={enteredAmount}
            placeholder="Enter amount..."
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-31-12"
            name="date"
            id="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={onCancelForm}>
          Cancel
        </button>
        <button type="submit" disabled={buttonDisabled}>
          {buttonText}{" "}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
