import "./ExpenseList.css";
import ExpenseItem from "../expenses/ExpenseItem";

const ExpenseList = ({ filterByYear }) => {
  // showing expanses filterd by year
  if (filterByYear.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {filterByYear.map((expense) => {
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
  );
};

export default ExpenseList;
