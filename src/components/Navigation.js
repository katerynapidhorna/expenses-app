import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/accounts">My accounts</NavLink>
      <NavLink to="/expenses">My expenses</NavLink>
      <NavLink to="/create-expense">Add expense</NavLink>
    </div>
  );
}
