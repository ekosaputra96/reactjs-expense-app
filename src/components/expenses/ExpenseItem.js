import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../utils/Card";

const ExpenseItem = ({ date, price, title }) => {
  const [mytitle, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle("Updating...");
    setTimeout(() => {
      setTitle("Hello there !");
    }, 3000);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{mytitle}</h2>
          <div className="expense-item__price">${price}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
