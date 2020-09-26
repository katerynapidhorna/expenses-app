import React, { useEffect } from "react";
import Data from "../data";

export default function Expenses() {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(Data));
  }, []);

  return (
    <div>
      <h1>Expenses page</h1>
    </div>
  );
}
