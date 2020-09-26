import React from "react";

export default function Expenses() {
  const data = JSON.parse(localStorage.getItem("data"));
  const totalSpent = data.expense.reduce((total, value) => {
    return total + value.amount;
  }, 0);
  const categoriesId = data.expense.map((item) => {
    return item.categoryId;
  });
  const accountsId = data.expense.map((item) => {
    return item.accountId;
  });

  const categories = data.category.filter((item) => {
    for (let i = 0; i < categoriesId.length; i++) {
      if (item.id === categoriesId[i]) {
        return <p>{item.title}</p>;
      }
    }
  });

  console.log(categories);

  return (
    <div>
      {categories.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <span>
        total amount spent: <strong>{totalSpent}</strong>
      </span>
    </div>
  );
}
