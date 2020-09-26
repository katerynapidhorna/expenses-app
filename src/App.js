import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Expenses from "./pages/Expenses";
import CreateExpense from "./pages/CreateExpense";
import Data from "./data";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import NewExpense from "./components/NewExpense";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(Data));
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/create-expense" component={CreateExpense} />
        <Route path="/new-expense/:id" component={NewExpense} />
      </Switch>
    </div>
  );
}

export default App;
