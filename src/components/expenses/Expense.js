import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expense.css";
import "../expensesFilter/ExpenseList.css";
import Card from "../utils/Card";
import ExpensesFilter from "../expensesFilter/ExpenseFilter";
import ExpenseList from "../expensesFilter/ExpenseList";
import ExpenseChart from "./ExpenseChart";

const ShowExpense = ({ expenses }) => {
  const [yearSelected, setYearSelected] = useState("all");
  const [showByYear, setShowByYear] = useState(false);

  const getYearHandler = (year) => {
    setYearSelected(year);
    if (year === "all") {
      setShowByYear(false);
    } else {
      setShowByYear(true);
    }
  };

  const filterByYear = expenses.filter(
    (el) => el.date.getFullYear().toString() === yearSelected
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearSelected} onGetYear={getYearHandler} />

      {/* show filtered expenses */}
      {showByYear && <ExpenseChart expenses={filterByYear} />}
      {showByYear && <ExpenseList filterByYear={filterByYear} />}

      {/* show all expenses */}
      {!showByYear && (
        <ul className="expenses-list">
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                price={expense.amount}
              />
            );
          })}
        </ul>
      )}
    </Card>
  );
};

export default ShowExpense;
