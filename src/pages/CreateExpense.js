import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./CreateExpense.css";

export default function CreateExpense() {
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  return (
    <div className="container">
      {data.category.map((item, i) => {
        return (
          <div key={i} style={{ "background-color": `${item.color}` }}>
            <span>
              <Link to={`/new-expense/${item.id}`} />
              <FontAwesomeIcon className="i" icon={Icons[`${item.icon}`]} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
