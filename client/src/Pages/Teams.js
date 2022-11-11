import React, { useState } from "react";
import "../form_components/Form.css";
import Home from "./Home";
import FormTeamInsert from "../form_components/FormTeams.js";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function Teams() {
  return (
    <div className="account-box-form">
      <FormTeamInsert />
      <table>
        <thead>
          <tr scope="col"> teamName </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
