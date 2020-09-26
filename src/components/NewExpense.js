import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import Data, { category } from "../data";

export default function NewExpense() {
  const history = useHistory();
  const [accountId, set_accountId] = useState(null);
  const [amountSpent, set_amountSpent] = useState(null);
  const id = parseInt(useParams().id);
  const data = JSON.parse(localStorage.getItem("data"));
  const title = data.category.find((item) => {
    return item.id === id ? item.title : null;
  });

  return (
    <div>
      <h2>{title && title.title}</h2>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          if (accountId && amountSpent && id) {
            Data.expense.push({
              id: Date.now(),
              amount: parseInt(amountSpent),
              accountId,
              categoryId: id,
              createdAt: Date.now(),
            });
            localStorage.setItem("data", JSON.stringify(Data));
            console.log(Data);
            history.push("/");
          }
        }}
      >
        <select
          onChange={(e) => {
            data.accounts.find((acc) => {
              if (acc.title === e.target.value) {
                set_accountId(acc.id);
                return;
              }
            });
          }}
        >
          {data.accounts.map((acc) => {
            return <option key={acc.id}>{acc.title}</option>;
          })}
        </select>
        <input
          type="number"
          placeholder="amount"
          onChange={(e) => {
            set_amountSpent(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
