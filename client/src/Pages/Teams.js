import React, { useState } from "react";
import "../form_components/Form.css";
import Home from "./Home";
import FormTeamInsert from "../form_components/FormTeams.js";

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
