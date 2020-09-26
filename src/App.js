import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Expenses from "./pages/Expenses";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/expenses" component={Expenses} />
      </Switch>
    </div>
  );
}

export default App;
