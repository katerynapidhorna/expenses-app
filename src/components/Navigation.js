import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/accounts">My accounts</NavLink>
      <NavLink to="/expenses">My expenses</NavLink>
      <span to="#" className="list-container">
        <FontAwesomeIcon icon={Icons["faPlus"]} />
        <ul className="list">
          <li>
            New expense
            <NavLink to="/create-expense"></NavLink>
          </li>
          <li>
            New account
            <NavLink to="/create-account"></NavLink>
          </li>
        </ul>
      </span>
    </div>
  );
}
