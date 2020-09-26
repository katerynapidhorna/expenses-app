import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Expenses from "./pages/Expenses";
import CreateExpense from "./pages/CreateExpense";
import Data from "./data";

function App() {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(Data));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/expenses" component={Expenses} />
        <Route path="/create-expense" component={CreateExpense} />
      </Switch>
    </div>
  );
}

export default App;
