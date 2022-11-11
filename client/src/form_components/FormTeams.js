import React, { useState } from "react";
import "./Form.css";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

const FormTeamInsert = (e) => {
  const [teamName, SetteamName] = useState("");
  const teams = useState("");
  const dispatch = useDispatch();

  const teamAdd = (e) => {
    e.preventDefault();
    Axios.post(
      "https://cs308-team20-seffafkart-production.up.railway.app/api/insert_team",
      {
        teamName: teamName,
      }
    ).then((err) => {
      alert("sucessfull insert");
      //console.log(err);
    });
    console.log(teamName);
  };
  const TeamGet = async (e) => {
    e.preventDefault();
    Axios.post(
      "https://cs308-team20-seffafkart-production.up.railway.app/api/team_data",
      {}
    ).then((response) => {
      teams: dispatch(response.data);
      console.log(teams);
    });
  };

  return (
    <div className="form-inputs">
      <label className="form-label">Username</label>
      <input
        className="form-input"
        type="text"
        name="teamname"
        placeholder="Enter your teamname"
        onChange={(e) => {
          SetteamName(e.target.value);
        }}
      />
      <button
        onClick={teamAdd}
        className="form-input-btn"
        type="submit"
      ></button>

      <button
        onClick={TeamGet}
        className="form-input-btn"
        type="submit"
      ></button>
    </div>
  );
};

export default FormTeamInsert;
