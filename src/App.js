import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Expenses from "./pages/Expenses";
import CreateExpense from "./pages/CreateExpense";

function App() {
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
