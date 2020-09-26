import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function CreateExpense() {
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  return (
    <div>
      {data.category.map((item, i) => {
        return (
          <div key={i}>
            <FontAwesomeIcon icon={Icons[`${item.icon}`]} />
          </div>
        );
      })}
    </div>
  );
}
